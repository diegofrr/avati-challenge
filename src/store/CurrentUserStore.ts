import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CURRENT_USER_KEY } from '@/constants/storageKeys';
import type { User } from '@/core/models/User';

interface CurrentUserState {
  currentUser: User;
  setCurrentUser: (user: User) => void;
}

export const useCurrentUserStore = create<CurrentUserState>()(
  persist(
    (set) => ({
      currentUser: {
        id: '',
        name: '',
        email: '',
        createdAt: '',
      },
      setCurrentUser: (user: User) => set({ currentUser: user }),
    }),
    {
      name: CURRENT_USER_KEY,
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
