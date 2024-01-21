import { create } from "zustand";

interface UserStore {
    accessToken: string;
    userId: string;
    setLoginData: (accessToken: string, userId: string) => void;
    logout: () => void;
}

const useUserStore = create<UserStore>()((set) => ({
    accessToken: "",
    userId: "",
    setLoginData: (accessToken, userId) => set({ accessToken, userId }),
    logout: () => set({ accessToken: "", userId: "" }),
}));

export default useUserStore;
