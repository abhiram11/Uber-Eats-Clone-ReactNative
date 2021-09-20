import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";

export default function Home() {
  return (
    <SafeAreaView style={{ marginTop: 40 }}>
      <HeaderTabs />
    </SafeAreaView>
  );
}
