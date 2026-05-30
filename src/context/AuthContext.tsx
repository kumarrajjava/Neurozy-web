import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

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
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  updateUser: (updates: Partial<UserProfile>) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const STORAGE_KEY = 'neurozy_users';

function loadUsersFromStorage(): Map<string, { password: string; profile: UserProfile }> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      return new Map(data);
    }
  } catch (error) {
    console.error('Failed to load users from storage:', error);
  }
  return new Map();
}

function saveUsersToStorage(users: Map<string, { password: string; profile: UserProfile }>) {
  try {
    const data = Array.from(users.entries());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save users to storage:', error);
  }
}

const DEFAULT_USER: UserProfile = {
  name: 'Raj Kumar',
  role: 'Founder & CEO',
  email: 'alega@neurozy.ai',
  phone: '',
  location: 'India',
  bio: 'A visionary technologist building scalable AI systems and long-term digital products.',
  photo: null,
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [registeredUsers, setRegisteredUsers] = useState<Map<string, { password: string; profile: UserProfile }>>(() => loadUsersFromStorage());

  function login(email: string, password: string): boolean {
    // Check registered users
    const registered = registeredUsers.get(email);
    if (registered && registered.password === password) {
      setUser(registered.profile);
      return true;
    }
    return false;
  }

  function signup(name: string, email: string, password: string): boolean {
    // Check if user already exists
    if (registeredUsers.has(email)) {
      return false;
    }
    // Create new user
    const newUser: UserProfile = {
      name,
      role: 'User',
      email,
      phone: '',
      location: '',
      bio: '',
      photo: null,
    };
    const updatedUsers = new Map(registeredUsers).set(email, { password, profile: newUser });
    setRegisteredUsers(updatedUsers);
    saveUsersToStorage(updatedUsers);
    setUser(newUser);
    return true;
  }

  function logout() {
    setUser(null);
  }

  function updateUser(updates: Partial<UserProfile>) {
    setUser((prev) => (prev ? { ...prev, ...updates } : prev));
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
