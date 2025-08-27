import ST from "@/src/constants/names";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

interface LikedBusiness {
  businessId: string | number;
  categoryId: string | number;
}

interface LikeStore {
  likedBusiness: LikedBusiness[];
  toggleLike: (businessId: string | number, categoryId: string | number) => void;
  hydrate: () => Promise<void>;
  isLiked: (businessId: string | number) => boolean;
}


const useLikedStore = create<LikeStore>((set, get) => ({
  likedBusiness: [],

  toggleLike: async (businessId, categoryId) => {
    const current = get().likedBusiness;
    const exists = current.find((b) => b.businessId === businessId);

    let updated;
    if (exists) {
      updated = current.filter((b) => b.businessId !== businessId);
    } else {
      updated = [...current, { businessId, categoryId }];
    }

    set({ likedBusiness: updated });
    await AsyncStorage.setItem(ST.LIKE_STORAGE, JSON.stringify(updated));
  },

  hydrate: async () => {
    const stored = await AsyncStorage.getItem(ST.LIKE_STORAGE);
    set({ likedBusiness: stored ? JSON.parse(stored) : [] });
  },

  isLiked: (businessId) => {
    return get().likedBusiness.some((b) => b.businessId === businessId);
  },
}));

export default useLikedStore;
