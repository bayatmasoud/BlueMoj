import React from "react";
import { Text, View } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";
import useConfigStore from "../../stores/configStore";

const Dashboard = () => {
  const selectedCommunity = useConfigStore((state) => state.selectedCommunity);
  return (
    <ScreenContainer>
      <View>
        <Text>Dashboard</Text>
      </View>
    </ScreenContainer>
  );
};

export default Dashboard;
