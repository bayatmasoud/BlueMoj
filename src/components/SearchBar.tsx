import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

interface SearchProps<T> {
  data: T[];
  searchKey: keyof T;
  onResults: (results: T[]) => void;
}

const SearchBar = <T extends Record<string, any>>({
  data,
  searchKey,
  onResults,
}: SearchProps<T>) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const filtered = data.filter((item) =>
      String(item[searchKey]).toLowerCase().includes(query.toLowerCase())
    );
    onResults(filtered);
  }, [query, data]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Search...'
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
