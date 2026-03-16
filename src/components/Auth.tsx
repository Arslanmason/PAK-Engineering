import { useState, useEffect } from 'react';
import { auth, googleProvider, signInWithPopup, signOut, onAuthStateChanged, db, doc, setDoc, getDoc } from '../firebase';
import { LogIn, LogOut, User as UserIcon } from 'lucide-react';

export default function Auth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        // Sync user to Firestore
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        if (!userSnap.exists()) {
          await setDoc(userRef, {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            createdAt: new Date().toISOString()
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    setAuthError(null);
    setIsLoggingIn(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      console.error("Login failed", error);
      if (error.code === 'auth/popup-closed-by-user') {
        setAuthError("Sign-in window was closed before completion. Please try again.");
      } else if (error.code === 'auth/cancelled-by-user') {
        setAuthError("Sign-in was cancelled.");
      } else if (error.code === 'auth/popup-blocked') {
        setAuthError("Sign-in popup was blocked by your browser. Please allow popups for this site.");
      } else {
        setAuthError("An unexpected error occurred during sign-in. Please try again.");
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  if (loading) return null;

  return (
    <div className="flex flex-col items-end space-y-2">
      <div className="flex items-center space-x-4">
        {user ? (
          <div className="flex items-center space-x-3">
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="text-xs font-bold text-white uppercase tracking-widest">{user.displayName}</span>
              <button 
                onClick={handleLogout}
                className="text-[10px] text-pak-gold hover:text-white transition-colors uppercase tracking-widest"
              >
                Sign Out
              </button>
            </div>
            <img src={user.photoURL} alt={user.displayName} className="w-8 h-8 rounded-full border border-pak-gold/50" />
          </div>
        ) : (
          <button 
            onClick={handleLogin}
            disabled={isLoggingIn}
            className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold tracking-widest uppercase transition-all rounded-sm border border-white/10 disabled:opacity-50"
          >
            {isLoggingIn ? (
              <div className="w-3 h-3 border-2 border-pak-gold border-t-transparent rounded-full animate-spin" />
            ) : (
              <LogIn size={14} className="text-pak-gold" />
            )}
            <span>{isLoggingIn ? 'Connecting...' : 'Sign In'}</span>
          </button>
        )}
      </div>
      {authError && (
        <div className="absolute top-full mt-2 right-0 bg-pak-red/90 text-white text-[9px] px-3 py-1.5 rounded-sm border border-white/10 shadow-xl animate-in fade-in slide-in-from-top-1 duration-300 z-50 max-w-[200px] text-right">
          {authError}
          <button 
            onClick={() => setAuthError(null)}
            className="ml-2 hover:text-pak-gold font-bold"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
