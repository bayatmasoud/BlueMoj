import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type RadioItem = {
  key: string;
  label: string;
};

type Props = {
  items: RadioItem[];
  defaultKey?: string;
  onChange: (selectedKey: string) => void;
};

export default function RadioButtonGroup({
  items,
  defaultKey,
  onChange,
}: Props) {
  const [selectedKey, setSelectedKey] = useState<string | undefined>(
    defaultKey
  );

  useEffect(() => {
    if (defaultKey) {
      setSelectedKey(defaultKey);
      onChange(defaultKey);
    }
  }, [defaultKey]);

  const handleSelect = (key: string) => {
    setSelectedKey(key);
    onChange(key);
  };

  return (
    <View style={styles.container}>
      {items.map(({ key, label }) => (
        <TouchableOpacity
          key={key}
          style={styles.radioItem}
          onPress={() => handleSelect(key)}
        >
          <View
            style={[
              styles.circle,
              selectedKey === key && styles.selectedCircle,
            ]}
          />
          <Text
            style={selectedKey === key ? styles.selectedLabel : styles.label}
          >
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  radioItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#555",
    marginRight: 10,
  },
  selectedCircle: {
    backgroundColor: "#51a0efff",
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
  selectedLabel: {
    fontSize: 16,
    color: "#f80404ff",
  },
});
