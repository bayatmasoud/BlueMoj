import { Dimensions, StatusBar } from "react-native";

const useDimensions = () => {
const { width, height } = Dimensions.get("screen");
const xPadding = 20;
const yPadding = 20;
const appHeight = height - (StatusBar.currentHeight || 0);

return {appHeight, width, height, xPadding, yPadding};
}

export default useDimensions;