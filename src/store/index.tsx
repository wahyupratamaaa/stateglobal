import { create } from "zustand";

type Loadingprops = {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
};

export const useStore = create<Loadingprops>((set) => ({
  loading: false,
  setLoading: (isLoading) => set({ loading: isLoading }),
}));
