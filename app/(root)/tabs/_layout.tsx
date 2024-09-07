import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="chat" options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="home" options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="profile" options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="rides" options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  );
};

export default _layout;
