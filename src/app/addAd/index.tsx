import Header from "@/src/components/Header";
import ScreenContainer from "@/src/components/ScreenContainer";
import ThemedButton from "@/src/components/ThemedButton";
import { ThemedText } from "@/src/components/ThemedText";
import useTheme from "@/src/hooks/useTheme";
import { createThemedStyles } from "@/src/hooks/utils/themeStylesSheet";
import { yupResolver } from "@hookform/resolvers/yup";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import schema, { FormData } from "./formSchema";

const DataEntryScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [imageUri, setImageUri] = useState<string | null>(null);

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };
  const theme = useTheme();

  return (
    <ScreenContainer
      header={<Header title='Add Advertisement' color='dark' backButton />}
      footer={
        <ThemedButton
          text='Submit'
          onPress={handleSubmit(onSubmit)}
          disabled={!errors}
          size='XLarge'
        />
      }
      scrollable={false}
      enabledPaddingHorizontal={false}
    >
      <View style={styles.bodyContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.field}>
            <View style={styles.labelRow}>
              <ThemedText type='defaultSemiBold'>Full Name</ThemedText>
              <ThemedText type='subtitle'>
                will not be shown to users
              </ThemedText>
            </View>
            <Controller
              control={control}
              name='fullName'
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder='Enter full name'
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.fullName && (
              <ThemedText style={styles.error} type='subtitle'>
                {errors.fullName.message}
              </ThemedText>
            )}
          </View>
          <View style={styles.field}>
            <View style={styles.labelRow}>
              <ThemedText type='defaultSemiBold'>Address</ThemedText>
            </View>
            <View style={{ gap: 5 }}>
              <Controller
                control={control}
                name='city'
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder='City ex. Ballerup'
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name='address'
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder='ex. Guldblommevej 10, st 5'
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
            </View>

            {errors.city && (
              <ThemedText style={styles.error} type='subtitle'>
                {errors.city?.message}
              </ThemedText>
            )}

            {errors.address && (
              <ThemedText style={styles.error} type='subtitle'>
                {errors.address.message}
              </ThemedText>
            )}
          </View>

          <View style={styles.field}>
            <ThemedText type='defaultSemiBold'>Email</ThemedText>
            <Controller
              control={control}
              name='email'
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder='Enter email'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.email && (
              <ThemedText style={styles.error} type='subtitle'>
                {errors.email.message}
              </ThemedText>
            )}
          </View>

          <View style={styles.field}>
            <ThemedText type='defaultSemiBold'>Phone Number</ThemedText>
            <View style={styles.phoneRow}>
              <Controller
                control={control}
                name='countryCode'
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={[styles.input, styles.codeInput]}
                    placeholder='+45'
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name='phone'
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={[styles.input, styles.phoneInput]}
                    placeholder='Enter phone number'
                    keyboardType='phone-pad'
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
            </View>
            {errors.countryCode && (
              <ThemedText style={styles.error} type='subtitle'>
                {errors.countryCode.message}
              </ThemedText>
            )}
            {errors.phone && (
              <ThemedText style={styles.error} type='subtitle'>
                {errors.phone.message}
              </ThemedText>
            )}
          </View>

          <View style={styles.field}>
            <ThemedText type='defaultSemiBold'>Upload Image</ThemedText>
            <TouchableOpacity style={styles.uploadBtn} onPress={pickImage}>
              <ThemedText type='defaultSemiBold'>Choose Image</ThemedText>
            </TouchableOpacity>
            {imageUri && (
              <Image source={{ uri: imageUri }} style={styles.image} />
            )}
          </View>

          <View style={styles.field}>
            <ThemedText type='defaultSemiBold'>Description</ThemedText>
            <Controller
              control={control}
              name='description'
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={[styles.input, styles.textArea]}
                  placeholder='Enter description'
                  multiline
                  numberOfLines={4}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.description && (
              <ThemedText style={styles.error} type='subtitle'>
                {errors.description.message}
              </ThemedText>
            )}
          </View>

          {/* 🔴 Error Summary */}
          {Object.keys(errors).length > 0 && (
            <View style={styles.errorSummary}>
              <ThemedText style={styles.error} type='defaultSemiBold'>
                Please fix the following:
              </ThemedText>
              {Object.values(errors).map((err, idx) => (
                <ThemedText
                  key={idx}
                  style={styles.bulletError}
                  type='subtitle'
                >
                  • {err.message}
                </ThemedText>
              ))}
            </View>
          )}
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

const styles = createThemedStyles((theme) => ({
  bodyContainer: {
    flex: 1,
    flexDirection: "column",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 40,
    paddingTop: 20,
    width: theme.dimensions.width,
  },
  field: {
    marginBottom: 20,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  infoIcon: {
    fontSize: 16,
    marginLeft: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  phoneRow: {
    flexDirection: "row",
    gap: 10,
  },
  codeInput: {
    width: 80,
  },
  phoneInput: {
    flex: 1,
  },
  uploadBtn: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  uploadText: {
    color: "#333",
  },
  image: {
    marginTop: 10,
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  submitBtn: {
    backgroundColor: "#007AFF",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  error: {
    color: "#D00",
  },
  errorSummary: {
    marginBottom: 20,
    backgroundColor: "#ffe6e6",
    padding: 10,
    borderRadius: 8,
  },
  errorTitle: {
    fontWeight: "600",
    marginBottom: 6,
    color: "#900",
  },
  bulletError: {
    color: "#900",
    fontSize: 13,
    marginBottom: 2,
  },
}));

export default DataEntryScreen;
