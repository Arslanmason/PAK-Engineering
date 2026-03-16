import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Search, MapPin, Loader2 } from 'lucide-react';
import { generateChatResponse } from '../services/aiService';
import { auth, db, collection, addDoc, query, orderBy, limit, onSnapshot } from '../firebase';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [useSearch, setUseSearch] = useState(false);
  const [useMaps, setUseMaps] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = {
      text: input,
      role: 'user',
      timestamp: new Date().toISOString(),
      uid: auth.currentUser?.uid || 'anonymous'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      let location = undefined;
      if (useMaps && navigator.geolocation) {
        const pos: any = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        location = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      }

      const response = await generateChatResponse(input, { useSearch, useMaps, location });
      
      const modelMessage = {
        text: response.text,
        role: 'model',
        timestamp: new Date().toISOString(),
        uid: 'gemini',
        groundingMetadata: response.groundingMetadata
      };

      setMessages(prev => [...prev, modelMessage]);

      // Save to Firestore if user is logged in
      if (auth.currentUser) {
        await addDoc(collection(db, 'chats', auth.currentUser.uid, 'messages'), userMessage);
        await addDoc(collection(db, 'chats', auth.currentUser.uid, 'messages'), modelMessage);
      }
    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => [...prev, {
        text: "I encountered an error. Please try again.",
        role: 'model',
        timestamp: new Date().toISOString(),
        uid: 'gemini'
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[150]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-[400px] h-[600px] bg-pak-dark border border-white/10 shadow-2xl rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-pak-blue border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-pak-gold rounded-full flex items-center justify-center">
                  <Bot size={18} className="text-pak-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest">PAK AI Assistant</h4>
                  <span className="text-[10px] text-pak-gold font-mono uppercase tracking-widest">Powered by Gemini</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <Bot size={48} className="text-pak-gold/20 mb-4" />
                  <p className="text-gray-500 text-sm font-light">
                    Hello! I'm your AI maritime engineering assistant. How can I help you today?
                  </p>
                </div>
              )}
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-pak-red text-white rounded-tr-none' 
                      : 'bg-white/5 text-gray-300 border border-white/10 rounded-tl-none'
                  }`}>
                    <p className="leading-relaxed">{msg.text}</p>
                    {msg.groundingMetadata?.groundingChunks && (
                      <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                        <p className="text-[10px] text-pak-gold font-bold uppercase tracking-widest">Sources & References:</p>
                        <div className="flex flex-wrap gap-2">
                          {msg.groundingMetadata.groundingChunks.map((chunk: any, cIdx: number) => {
                            const link = chunk.web?.uri || chunk.maps?.uri;
                            const title = chunk.web?.title || chunk.maps?.title || 'View Source';
                            if (!link) return null;
                            return (
                              <a 
                                key={cIdx}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-1 px-2 py-1 bg-white/5 hover:bg-white/10 rounded text-[10px] text-white transition-colors border border-white/5"
                              >
                                <span>{title}</span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none">
                    <Loader2 size={16} className="text-pak-gold animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Controls */}
            <div className="p-2 border-t border-white/10 bg-white/[0.02] flex space-x-2">
              <button 
                onClick={() => setUseSearch(!useSearch)}
                className={`flex items-center space-x-1 px-2 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${
                  useSearch ? 'bg-pak-gold text-pak-blue' : 'bg-white/5 text-gray-500 hover:text-white'
                }`}
              >
                <Search size={12} />
                <span>Search</span>
              </button>
              <button 
                onClick={() => setUseMaps(!useMaps)}
                className={`flex items-center space-x-1 px-2 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${
                  useMaps ? 'bg-pak-gold text-pak-blue' : 'bg-white/5 text-gray-500 hover:text-white'
                }`}
              >
                <MapPin size={12} />
                <span>Maps</span>
              </button>
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-pak-dark border-t border-white/10 flex space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about ship repair, marine engineering..."
                className="flex-grow bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-pak-gold transition-colors"
              />
              <button 
                type="submit"
                disabled={loading || !input.trim()}
                className="w-10 h-10 bg-pak-red text-white rounded-full flex items-center justify-center hover:bg-pak-blue transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-pak-red text-white rounded-full shadow-2xl flex items-center justify-center relative group"
      >
        <div className="absolute inset-0 bg-pak-red rounded-full animate-ping opacity-20"></div>
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
}
