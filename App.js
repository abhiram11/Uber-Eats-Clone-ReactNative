import * as React from "react";
import { View, Text } from "react-native";
import Home from "./screens/Home";

//23:00 alignItems:"center" doesnt work... we have to use alignSelf:"center" instead

export default function App() {
  return <Home />;
}
