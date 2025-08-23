import { create } from 'zustand';

interface ConfigState {
    selectedCommunity: string | undefined;
    setSelectedCommunity: (community: string) => void;
}

const configStore = create<ConfigState>((set) => ({
    selectedCommunity:undefined,
    setSelectedCommunity: (community: string) => set({ selectedCommunity: community }),
    
}));

export default configStore;