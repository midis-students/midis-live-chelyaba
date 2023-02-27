import { create } from 'zustand';

type Price = {
  min: number | undefined;
  max: number | undefined;
};

type FilterStore = {
  list: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
  has: (id: string) => boolean;
  price: Price;
  setPrice: (price: Price) => void;
};

export const useFilter = create<FilterStore>((set, get) => ({
  list: [],
  price: {
    min: undefined,
    max: undefined,
  },
  add: (id) => set({ list: [...get().list, id] }),
  remove: (id) => set({ list: get().list.filter((el) => el != id) }),
  has: (id) => get().list.includes(id),
  setPrice: (price) => set({ price }),
}));
