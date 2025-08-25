import Storage from '@/src/constants/names';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

interface ConfigState {
    selectedCommunity: string | undefined;
    setSelectedCommunity: (community: string) => void;
     hydrate: () => Promise<void>;
}

const useConfigStore = create<ConfigState>()(
      (set) => ({
    selectedCommunity:undefined,
    setSelectedCommunity: (community: string) => {set({ selectedCommunity: community })
     AsyncStorage.setItem(Storage.CONFIG_STORAGE, community);},
     hydrate: async () => {
      const storedCommunity = await AsyncStorage.getItem(Storage.CONFIG_STORAGE);
      if (storedCommunity) {
        set({ selectedCommunity: storedCommunity });
      }
    }
}),

);

export default useConfigStore;