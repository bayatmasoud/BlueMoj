import { SymbolViewProps } from "expo-symbols";
import { ImageSourcePropType } from "react-native";

export type Category = {
  catName: string;
  adsCount: number;
  iconName: SymbolViewProps["name"];
  id:string|number;
};

export type Advertisement = {
  title: string;
  image: ImageSourcePropType;
  date: string;
  isLiked: boolean;
  id: string | number;
  catId: string | number;
  city:string
};

// export const categories: Category[] = [
//   { catName: "Cars", adsCount: 20, iconName: "car.fill", id:1 },
//   {
//     catName: "Real Estate",
//     adsCount: 10,
//     iconName: "house.fill",
//      id:2
//   },
//   {
//     catName: "Electronics",
//     adsCount: 15,
//     iconName: "light.beacon.max",
//      id:3
//   },
//   {
//     catName: "Furniture",
//     adsCount: 5,
//     iconName: "sofa.fill",
//      id:4
//   },
//   { catName: "Jobs", adsCount: 8, iconName: "gear.badge.checkmark", id:5 },
//   { catName: "Services", adsCount: 12, iconName: "wheelchair",  id:6 },
//   { catName: "Events", adsCount: 7, iconName: "calendar", id:7},
// ];

export const categories: Category[] = [
  {
    catName: "Retails",
    adsCount: 120,
    iconName: "building",
    id: 1
  },
  {
    catName: "Food & Drink",
    adsCount: 95,
    iconName: "fork.knife",
    id: 2
  },
  {
    catName: "Health",
    adsCount: 80,
    iconName: "bolt.heart.fill",
    id: 3
  },
  {
    catName: "Services",
    adsCount: 60,
    iconName: "wrench.and.screwdriver",
    id: 4
  },
  {
    catName: "Education",
    adsCount: 50,
    iconName: "graduationcap",
    id: 6
  },
  {
    catName: "Automotive",
    adsCount: 70,
    iconName: "car",
    id: 7
  },
  {
    catName: "Events",
    adsCount: 65,
    iconName: "calendar",
    id: 8
  },
  {
    catName: "Second hand",
    adsCount: 40,
    iconName: "sofa",
    id: 9
  },
  {
    catName: "Technology & IT",
    adsCount: 55,
    iconName: "laptopcomputer",
    id: 10
  },
  {
    catName: "Travel",
    adsCount: 45,
    iconName: "airplane",
    id: 11
  },
  {
    catName: "Transport",
    adsCount: 35,
    iconName: "truck.box",
    id: 12
  },
  {
    catName: "Jobs",
    adsCount: 30,
    iconName: "person.badge.clock",
    id: 13
  },
  {
    catName: "Public Services",
    adsCount: 25,
    iconName: "person.3.sequence",
    id: 14
  },
  {
    catName: "Real Estate",
    adsCount: 50,
    iconName: "house.and.flag",
    id: 15
  }
];


export const ads: Advertisement[] = [
  {
    title: "Sarv Market",
    image: require("../assets/images/sarv.jpeg"),
    date: "Apr 28 - 2025",
    isLiked: true,
    id: 1,
    catId:1,
    city:'Soborg'
  },
  {
    title: "Patogh Resturant",
    image: require("../assets/images/patogh.jpg"),
    date: "Apr 28 - 2025",
    isLiked: false,
    id: 2,
    catId:2,
    city:'Ballerup'
  },
  {
    title: "Mr Dentist",
    image: require("../assets/images/sarv.jpeg"),
    date: "Apr 28 - 2025",
    isLiked: false,
    id: 3,
    catId:2,
    city:'Copnehagen'

  },
  {
    title: "Abbas Beauty",
    image: require("../assets/images/patogh.jpg"),
    date: "Apr 28 - 2025",
    isLiked: true,
    id: 4,
    catId:6,
    city:'Aarhus'

  },
];


export const cateDescription = {
  id: 1,
  title: "Sarv Market",
  address: "Sborg,Guldblommevej 25, 1740 Kobenhaven",
  description:
    "Auto text generators, powered by artificial intelligence and natural language processing, automatically produce written content based on user inputs, creating original text for a wide range of applications, from marketing copy and blog posts to technical documentation and design mockups. Tools like Copy.ai, Grammarly, and design-specific plugins offer various ways to generate, refine, and even transform text, helping users save time and enhance productivity. There are also built-in functions in software like Microsoft Word to generate random placeholder text, such as =RAND() or =LOREM(), for document layout testing.What they are:AI-powered tools:These generators use advanced language models to understand user prompts and generate relevant, high-quality text. Content creation assistants:They function as digital writers, creating original and contextually appropriate text based on keywords and user expectations. Purpose-built software:Specialized tools can be used for specific tasks, such as generating text effects in design tools like Adobe Express, or populating text fields in design mockups for Figma. How they work:Understanding prompts: Users provide information, keywords, or instructions to guide the AI. Deep learning: The AI analyzes the input and accesses vast datasets to create new content that is grammatically correct and relevant to the prompt. Customization: Users can tailor the generated text by adjusting tone, length, or style, or by directing the AI to make text more formal, casual, or descriptive. Examples of applications:Content creation:Generating blog posts, articles, marketing copy, and other written content. Design and prototyping:Filling text fields with realistic content in design tools like Figma for mockups and presentations. Writing assistance:Rewriting sentences for clarity, adjusting the tone of messages, or generating sample documents like cover letters. Placeholder text:Quickly generating random or placeholder text for document layouts in software like Microsoft Word using functions like =RAND(). Time-Saving Hack: Auto-Generate Random Text in Microsoft ...6 May 2020 — how can you easily type random text in Microsoft Word to apply and practice Word skills or to even create a mockup of a ...YouTube · Dawn Bjork-The Software Pro AI Text Generator | Figma 13 Sept 2024 — AI Text Generator is an AI-powered plugin designed to streamline the text generation and filling process in Figma. Key...Figma Free AI Text Generator - No Login Required - Semrush What is an AI Text Generator? The Semrush AI Text Generator, also known as an AI typer, is a tool powered by artificial intelligen...Semrush Show all",
  email: "bayat.masoud@gmail.com",
  phone: "+45-42730428",
  image: require("../assets/images/sarv.jpeg"),
};