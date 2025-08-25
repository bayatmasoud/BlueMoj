import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import ScreenContainer from "@/src/components/ScreenContainer";
import { ThemedText } from "@/src/components/ThemedText";
import { IconSymbol } from "@/src/components/ui/IconSymbol.ios";
import { createThemedStyles } from "@/src/hooks/utils/themeStylesSheet";
import React, { useState } from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  View,
} from "react-native";

export type CatDescription = {
  id: number;
  description: string;
  title: string;
  email?: string;
  phone?: string;
  image?: string;
};

const cateDescription = {
  id: 1,
  title: "Sarv Market",
  address: "Sborg,Guldblommevej 25, 1740 Kobenhaven",
  description:
    "Auto text generators, powered by artificial intelligence and natural language processing, automatically produce written content based on user inputs, creating original text for a wide range of applications, from marketing copy and blog posts to technical documentation and design mockups. Tools like Copy.ai, Grammarly, and design-specific plugins offer various ways to generate, refine, and even transform text, helping users save time and enhance productivity. There are also built-in functions in software like Microsoft Word to generate random placeholder text, such as =RAND() or =LOREM(), for document layout testing.What they are:AI-powered tools:These generators use advanced language models to understand user prompts and generate relevant, high-quality text. Content creation assistants:They function as digital writers, creating original and contextually appropriate text based on keywords and user expectations. Purpose-built software:Specialized tools can be used for specific tasks, such as generating text effects in design tools like Adobe Express, or populating text fields in design mockups for Figma. How they work:Understanding prompts: Users provide information, keywords, or instructions to guide the AI. Deep learning: The AI analyzes the input and accesses vast datasets to create new content that is grammatically correct and relevant to the prompt. Customization: Users can tailor the generated text by adjusting tone, length, or style, or by directing the AI to make text more formal, casual, or descriptive. Examples of applications:Content creation:Generating blog posts, articles, marketing copy, and other written content. Design and prototyping:Filling text fields with realistic content in design tools like Figma for mockups and presentations. Writing assistance:Rewriting sentences for clarity, adjusting the tone of messages, or generating sample documents like cover letters. Placeholder text:Quickly generating random or placeholder text for document layouts in software like Microsoft Word using functions like =RAND(). Time-Saving Hack: Auto-Generate Random Text in Microsoft ...6 May 2020 — how can you easily type random text in Microsoft Word to apply and practice Word skills or to even create a mockup of a ...YouTube · Dawn Bjork-The Software Pro AI Text Generator | Figma 13 Sept 2024 — AI Text Generator is an AI-powered plugin designed to streamline the text generation and filling process in Figma. Key...Figma Free AI Text Generator - No Login Required - Semrush What is an AI Text Generator? The Semrush AI Text Generator, also known as an AI typer, is a tool powered by artificial intelligen...Semrush Show all",
  email: "bayat.masoud@gmail.com",
  phone: "+45-42730428",
  image: require("../../assets/images/sarv.jpeg"),
};

const BusinessPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const renderImage = (source: ImageSourcePropType) => (
    <ImageBackground source={source} resizeMethod='resize'>
      <View style={styles.imageBackgroundContainer}>
        <Pressable
          style={styles.likePressAble}
          onPress={() => setIsLiked(!isLiked)}
        >
          <IconSymbol
            name={isLiked ? "heart.fill" : "heart"}
            color={isLiked ? "red" : "white"}
          />
        </Pressable>
        <View>
          <View style={styles.contactsContainer}>
            <IconSymbol name='envelope' size={25} color={"white"} />
            <ThemedText type='defaultSemiBold' style={{ color: "white" }}>
              {cateDescription.email}
            </ThemedText>
          </View>
          <View style={styles.contactsContainer}>
            <IconSymbol name='phone' size={25} color={"white"} />
            <ThemedText type='defaultSemiBold' style={{ color: "white" }}>
              {cateDescription.phone}
            </ThemedText>
          </View>
        </View>
      </View>
    </ImageBackground>
  );

  //   const categoryId = useLocalSearchParams();
  return (
    <ScreenContainer enabledPaddingHorizontal={false}>
      <ParallaxScrollView
        headerImage={renderImage(cateDescription.image)}
        headerBackgroundColor={{
          dark: "white",
          light: "white",
        }}
      >
        <View>
          <View style={styles.contactsContainer}>
            <IconSymbol
              name='location.fill.viewfinder'
              size={18}
              color='black'
            />
            <ThemedText type='subtitle'>{cateDescription.address}</ThemedText>
          </View>
          <ThemedText type='title'>{cateDescription.title}</ThemedText>

          <ThemedText type='default' style={styles.contextContainer}>
            {cateDescription.description}
          </ThemedText>
        </View>
      </ParallaxScrollView>
    </ScreenContainer>
  );
};

const styles = createThemedStyles((theme) => ({
  imageBackgroundContainer: {
    height: "100%",
    width: theme.dimensions.width,
    backgroundColor: "#3631317d",
    justifyContent: "space-between",
  },
  likePressAble: {
    height: 30,
    width: 30,
    borderRadius: 80,
    alignSelf: "flex-end",
    marginVertical: 20,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  contactsContainer: { flexDirection: "row", gap: 10 },
  contextContainer: { textAlign: "justify", paddingTop: 10 },
}));

export default BusinessPage;
