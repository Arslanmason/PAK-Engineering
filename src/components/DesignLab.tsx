import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Sparkles, Upload, Wand2, Search, Loader2, Download, Trash2, Maximize } from 'lucide-react';
import { generateImage, analyzeImage, editImage, getFastResponse } from '../services/aiService';
import { auth, db, collection, addDoc } from '../firebase';

const aspectRatios = [
  { label: '1:1', value: '1:1' },
  { label: '2:3', value: '2:3' },
  { label: '3:2', value: '3:2' },
  { label: '3:4', value: '3:4' },
  { label: '4:3', value: '4:3' },
  { label: '9:16', value: '9:16' },
  { label: '16:9', value: '16:9' },
  { label: '21:9', value: '21:9' }
];

export default function DesignLab() {
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [mode, setMode] = useState<'generate' | 'analyze' | 'edit'>('generate');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFastSummary = async () => {
    if (!prompt.trim() || loading) return;
    setLoading(true);
    setResult(null);
    try {
      const summary = await getFastResponse(`Provide a concise technical engineering summary for this maritime design concept: ${prompt}`);
      setAnalysis(summary);
    } catch (error) {
      console.error("Fast response error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim() || loading) return;
    setLoading(true);
    setAnalysis(null);
    try {
      const imageUrl = await generateImage(prompt, aspectRatio);
      setResult(imageUrl);
      if (auth.currentUser) {
        await addDoc(collection(db, 'design_projects'), {
          uid: auth.currentUser.uid,
          prompt,
          imageUrl,
          type: 'generation',
          metadata: { aspectRatio },
          createdAt: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error("Generation error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setMode('analyze');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage || !prompt.trim() || loading) return;
    setLoading(true);
    try {
      const text = await analyzeImage(prompt, selectedImage);
      setAnalysis(text);
      if (auth.currentUser) {
        await addDoc(collection(db, 'design_projects'), {
          uid: auth.currentUser.uid,
          prompt,
          imageUrl: selectedImage,
          type: 'analysis',
          metadata: { analysis: text },
          createdAt: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error("Analysis error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async () => {
    if (!selectedImage || !prompt.trim() || loading) return;
    setLoading(true);
    try {
      const imageUrl = await editImage(prompt, selectedImage);
      setResult(imageUrl);
      if (auth.currentUser) {
        await addDoc(collection(db, 'design_projects'), {
          uid: auth.currentUser.uid,
          prompt,
          imageUrl,
          type: 'edit',
          createdAt: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error("Edit error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-pak-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Innovation Hub</span>
          <h2 className="text-5xl font-serif font-bold text-pak-blue mb-6">Engineering Design Lab</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            Use advanced AI to visualize maritime concepts, analyze structural integrity from photos, or iterate on engineering designs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-pak-dark p-8 rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex space-x-4 mb-8">
                <button 
                  onClick={() => setMode('generate')}
                  className={`flex-1 py-3 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-all ${
                    mode === 'generate' ? 'bg-pak-red text-white' : 'bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  Generate
                </button>
                <button 
                  onClick={() => setMode('analyze')}
                  className={`flex-1 py-3 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-all ${
                    mode === 'analyze' || mode === 'edit' ? 'bg-pak-red text-white' : 'bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  Analyze/Edit
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-bold text-pak-gold uppercase tracking-widest mb-3 block">Prompt</label>
                  <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={mode === 'generate' ? "Describe a futuristic hull design..." : "Describe what to analyze or how to edit..."}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-pak-gold transition-colors h-32 resize-none"
                  />
                </div>

                {mode === 'generate' && (
                  <div>
                    <label className="text-[10px] font-bold text-pak-gold uppercase tracking-widest mb-3 block">Aspect Ratio</label>
                    <div className="grid grid-cols-4 gap-2">
                      {aspectRatios.map((ratio) => (
                        <button
                          key={ratio.value}
                          onClick={() => setAspectRatio(ratio.value)}
                          className={`py-2 rounded-md text-[10px] font-bold transition-all ${
                            aspectRatio === ratio.value ? 'bg-pak-gold text-pak-blue' : 'bg-white/5 text-gray-400 hover:text-white'
                          }`}
                        >
                          {ratio.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {(mode === 'analyze' || mode === 'edit') && (
                  <div>
                    <label className="text-[10px] font-bold text-pak-gold uppercase tracking-widest mb-3 block">Reference Image</label>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full aspect-video bg-white/5 border border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-white/10 transition-all overflow-hidden relative"
                    >
                      {selectedImage ? (
                        <img src={selectedImage} alt="Selected" className="w-full h-full object-cover" />
                      ) : (
                        <>
                          <Upload className="text-pak-gold mb-2" size={24} />
                          <span className="text-[10px] text-gray-400 uppercase tracking-widest">Upload Photo</span>
                        </>
                      )}
                    </div>
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                  </div>
                )}

                <div className="flex flex-col space-y-3">
                  <button 
                    onClick={mode === 'generate' ? handleGenerate : (mode === 'analyze' ? handleAnalyze : handleEdit)}
                    disabled={loading || !prompt.trim() || ((mode === 'analyze' || mode === 'edit') && !selectedImage)}
                    className="w-full py-4 bg-pak-gold text-pak-blue font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white hover:text-pak-blue transition-all flex items-center justify-center space-x-3 disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 size={20} className="animate-spin" />
                    ) : (
                      <>
                        {mode === 'generate' ? <Sparkles size={20} /> : (mode === 'analyze' ? <Search size={20} /> : <Wand2 size={20} />)}
                        <span>{mode === 'generate' ? 'Generate Concept' : (mode === 'analyze' ? 'Analyze Image' : 'Apply Edits')}</span>
                      </>
                    )}
                  </button>

                  {mode === 'generate' && (
                    <button 
                      onClick={handleFastSummary}
                      disabled={loading || !prompt.trim()}
                      className="w-full py-3 bg-white/5 text-pak-gold font-bold tracking-[0.1em] uppercase rounded-xl border border-pak-gold/20 hover:bg-pak-gold hover:text-pak-blue transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      <Maximize size={16} />
                      <span>Quick Technical Summary</span>
                    </button>
                  )}
                </div>

                {(mode === 'analyze' || mode === 'edit') && selectedImage && (
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setMode('analyze')}
                      className={`flex-1 py-2 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-all ${
                        mode === 'analyze' ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-500'
                      }`}
                    >
                      Analyze
                    </button>
                    <button 
                      onClick={() => setMode('edit')}
                      className={`flex-1 py-2 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-all ${
                        mode === 'edit' ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-500'
                      }`}
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => { setSelectedImage(null); setMode('generate'); }}
                      className="p-2 bg-white/5 text-pak-red hover:bg-pak-red hover:text-white rounded-lg transition-all"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Result Display */}
          <div className="lg:col-span-8">
            <div className="bg-gray-50 rounded-2xl border border-gray-100 h-full min-h-[600px] flex flex-col overflow-hidden shadow-inner">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pak-blue rounded-xl flex items-center justify-center">
                    <ImageIcon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-pak-blue uppercase tracking-widest">Output Preview</h4>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">AI Visualization</span>
                  </div>
                </div>
                {result && (
                  <a 
                    href={result} 
                    download="pak-ai-design.png"
                    className="p-3 bg-pak-blue text-white rounded-xl hover:bg-pak-red transition-all"
                  >
                    <Download size={20} />
                  </a>
                )}
              </div>

              <div className="flex-grow p-8 flex flex-col items-center justify-center relative">
                {loading ? (
                  <div className="text-center">
                    <Loader2 size={64} className="text-pak-gold animate-spin mb-6 mx-auto" />
                    <p className="text-pak-blue font-serif italic text-xl">Engineering the future...</p>
                    <p className="text-gray-400 text-sm mt-2">This may take a few moments</p>
                  </div>
                ) : result ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img src={result} alt="AI Result" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
                  </motion.div>
                ) : analysis ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-xl border border-gray-100"
                  >
                    <h5 className="text-pak-blue font-serif font-bold text-2xl mb-6 flex items-center">
                      <Search className="text-pak-gold mr-3" size={24} />
                      AI Analysis Report
                    </h5>
                    <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
                      {analysis.split('\n').map((line, i) => (
                        <p key={i} className="mb-4">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-center opacity-20">
                    <Sparkles size={120} className="text-pak-blue mb-8 mx-auto" />
                    <p className="text-3xl font-serif font-bold text-pak-blue">Ready for Innovation</p>
                    <p className="text-gray-500 mt-4">Enter a prompt and click generate to begin</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
