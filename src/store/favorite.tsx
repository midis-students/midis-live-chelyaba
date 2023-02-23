import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FavoriteStore = {
  list: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
};

export const useFavorite = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      list: [],
      add: (id) => set({ list: [...get().list, id] }),
      remove: (id) => set({ list: get().list.filter((el) => el != id) }),
    }),
    {
      name: 'favorite',
    },
  ),
);
