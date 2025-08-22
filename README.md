# BlueMoj - Expo React Native App

## Overview

BlueMoj is a React Native application built with Expo, designed to connect people within specific communities. The app provides a platform for users to view advertisements and content tailored to their selected community.

## Features

-   **Community Selection:** Users can select their preferred community (e.g., Iranian, Turkish, or All).
-   **Themed UI:** Utilizes a consistent and customizable theme for both light and dark modes.
-   **Expo Router:** Implements file-based routing for easy navigation.
-   **Reusable Components:** Includes a variety of custom components such as `ScreenContainer`, `RadioButtonGroup`, `ThemedText`, and more.
-   **Animations:** Uses `react-native-reanimated` for smooth and engaging animations.
-   **Haptic Feedback:** Provides haptic feedback on tab presses for a better user experience.

## Technologies Used

-   [Expo](https://expo.dev): A framework for building universal React Native applications.
-   [React Native](https://reactnative.dev): A JavaScript framework for writing cross-platform mobile applications.
-   [TypeScript](https://www.typescriptlang.org): A typed superset of JavaScript.
-   [Expo Router](https://expo.github.io/router/): A file-based routing library for Expo.
-   [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated): A library for creating complex animations.
-   [@react-navigation](https://reactnavigation.org/): Navigation library for React Native.
-   [expo-haptics](https://docs.expo.dev/versions/latest/sdk/haptics/): Provides access to the device's haptic feedback system.

## Getting Started

### Prerequisites

-   Node.js (>=18)
-   npm or yarn
-   Expo CLI (`npm install -g expo-cli`)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd BlueMoj
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the App

1.  Start the Expo development server:

    ```bash
    npm start
    # or
    yarn start
    ```

2.  You can then run the app on:

    -   **Android:** Use an Android emulator or a physical device with Expo Go installed.
    -   **iOS:** Use an iOS simulator or a physical device with Expo Go installed.
    -   **Web:** Open the provided web URL in your browser.

## Project Structure


## Key Components

-   **`src/components/ScreenContainer.tsx`:** A container component that provides a consistent layout for screens, including header, content, and footer sections.
-   **`src/components/RadioButtonGroup.tsx`:** A custom radio button group component for selecting options.
-   **`src/components/ThemedText.tsx`:** A text component that supports theming (light and dark modes).
-   **`src/hooks/useTheme.ts`:** A custom hook for accessing the current theme.
-   **`utils/themeStylesSheet.ts`:** Utility for creating themed style sheets.

## Scripts

-   `npm start`: Starts the Expo development server.
-   `npm run android`: Starts the Expo development server and opens the app on an Android emulator/device.
-   `npm run ios`: Starts the Expo development server and opens the app on an iOS simulator/device.
-   `npm run web`: Starts the Expo development server for web.
-   `npm run lint`: Runs ESLint to check for code quality.
-   `npm run reset-project`: Resets the project to a blank state, moving existing code to the `app-example` directory.

## Resetting the Project

To reset the project to a blank state, run:

```bash
npm run reset-project
