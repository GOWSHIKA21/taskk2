import { create } from "zustand";

const useUserStore = create((set) => ({
    username: " ",
    setUser: (name) => set({ username: name}),
}));

export default useUserStore;