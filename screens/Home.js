import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItem, {
  localRestaurantData,
} from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurantData);

  return (
    <SafeAreaView style={{ paddingTop: 40, backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem locatRestaurantData={localRestaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
