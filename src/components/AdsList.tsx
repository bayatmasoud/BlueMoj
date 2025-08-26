import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Advertisement } from "../constants/SampleData";
import AdsCard from "./AdsCard";

type AdsListProps = {
  ads: Advertisement[];
};

const AdsList = ({ ads }: AdsListProps) => {
  const [adsHolder, setAdsHolder] = useState<Advertisement[]>(ads);

  useEffect(() => {
    setAdsHolder(ads);
  }, [ads]);

  const onLinked = (id: string | number) => {
    const selectedItem = adsHolder.find((item) => item.id === id);
    if (selectedItem) {
      const updatedItem: Advertisement = {
        ...selectedItem,
        isLiked: !selectedItem.isLiked,
      };
      setAdsHolder((prevAds) =>
        prevAds.map((item) => (item.id === id ? updatedItem : item))
      );
    }
  };
  const renderAds = ({
    item,
    index,
  }: {
    item: Advertisement;
    index: number;
  }) => {
    return (
      <AdsCard
        item={item}
        index={index}
        adsLength={ads.length}
        onLinked={onLinked}
      />
    );
  };
  return <FlatList data={adsHolder} renderItem={renderAds} numColumns={2} />;
};

export default AdsList;
