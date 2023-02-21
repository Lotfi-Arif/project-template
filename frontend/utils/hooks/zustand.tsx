import create from "zustand";
import { persist } from "zustand/middleware";

import { ZustandStore } from "../types/Store";

export const useStore = create<ZustandStore>(
  persist(
    (set): ZustandStore => ({
      auth: undefined,
      user: undefined,
      progress: 0,
      loading: false,
      scroll: "",
      setProgress: (data: number): void => set(() => ({ progress: data })),
      login: (data: any): void => set(() => ({ auth: data })),
      setMe: (data: any): void => set(() => ({ user: data })),
      logout: (): void => set({ auth: undefined, user: undefined }),
      setLoading: (loading: boolean): void => set(() => ({ loading })),
      setScrollRef: (scroll: string): void => set(() => ({ scroll })),
    }),
    {
      name: "auth", // unique name
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    },
  ),
);
