// src/stores/auth.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  isAuthenticated: boolean;
  accessToken?: string;
};
type AuthAction = {
  setAccessToken: (t?: string) => void;
  setAuthenticated: (ok: boolean) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState & AuthAction>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      accessToken: undefined,
      setAccessToken: (t) => set({ accessToken: t }),
      setAuthenticated: (ok) => set({ isAuthenticated: ok }),
      logout: () => set({ isAuthenticated: false, accessToken: undefined }),
    }),
    {
      name: 'auth-store',
      // chỉ lưu token (và không lưu isAuthenticated vì nó được derived sau kiểm tra)
      partialize: (s) => ({
        accessToken: s.accessToken,
        isAuthenticated: s.isAuthenticated,
      }),
    }
  )
);
