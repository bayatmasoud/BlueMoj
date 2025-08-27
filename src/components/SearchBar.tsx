import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

interface SearchProps<T> {
  data: T[];
  searchKeys: (keyof T)[];
  onResults: (results: T[]) => void;
  placeHolder?: string;
}

const SearchBar = <T extends Record<string, any>>({
  data,
  searchKeys,
  onResults,
  placeHolder = "Search...",
}: SearchProps<T>) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const lowerQuery = query.toLowerCase();

      const filtered = data.filter((item) =>
        searchKeys.some((key) =>
          String(item[key]).toLowerCase().includes(lowerQuery)
        )
      );

      onResults(filtered);
    }, 200);

    return () => clearTimeout(timeout);
  }, [query, data]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        value={query}
        onChangeText={setQuery}
        placeholderTextColor='#999'
      />
      {query.length > 0 && (
        <TouchableOpacity onPress={() => setQuery("")}>
          <Ionicons name='close-circle' size={20} color='#666' />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000000ff",
  },
});

export default SearchBar;
