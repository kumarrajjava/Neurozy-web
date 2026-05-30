import { createContext, useContext, useState, ReactNode } from 'react';

export interface UserProfile {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  photo: string | null;
}

interface AuthContextType {
  user: UserProfile | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateUser: (updates: Partial<UserProfile>) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Demo credentials
const DEMO_EMAIL = 'raj@neurozy.ai';
const DEMO_PASSWORD = 'neurozy2026';

const DEFAULT_USER: UserProfile = {
  name: 'Raj Kumar',
  role: 'Founder & CEO',
  email: 'raj@neurozy.ai',
  phone: '',
  location: 'India',
  bio: 'A visionary technologist building scalable AI systems and long-term digital products.',
  photo: null,
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);

  function login(email: string, password: string): boolean {
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      setUser({ ...DEFAULT_USER });
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
  }

  function updateUser(updates: Partial<UserProfile>) {
    setUser((prev) => (prev ? { ...prev, ...updates } : prev));
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
