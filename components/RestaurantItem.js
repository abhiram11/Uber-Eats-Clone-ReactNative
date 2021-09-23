import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// dummy data similar to yelp api
export const localRestaurantData = [
  {
    name: "Tinkus Bhawarkua",
    image_url: "aaaa",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.2,
  },
  {
    name: "Namo Sandwich",
    image_url: "aaaa",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1214,
    rating: 4.5,
  },
  {
    name: "Dhaba Junction",
    image_url: "aaaa",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1121,
    rating: 4.0,
  },
];

export default function RestaurantItem(props) {
  return (
    <TouchableOpacity activeOpacity={0.9} style={{ marginBottom: 20 }}>
      {/* {localRestaurantData.map((restData, index) => ( */}
      {props.restaurantData.map((restData, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          {/* restaurant image */}
          <RestaurantImage image={restData.image} />
          {/* restaurant info and texts and rating */}
          <RestaurantInfo name={restData.name} rating={restData.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = ({ image }) => (
  <>
    <Image
      source={{
        uri: "https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow=",
      }}
      style={{
        width: "100%",
        height: 180,
      }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 mins</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{rating}</Text>
    </View>
  </View>
);
