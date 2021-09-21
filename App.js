import * as React from "react";
import { View, Text } from "react-native";
import Home from "./screens/Home";

//23:00 alignItems:"center" doesnt work... we have to use alignSelf:"center" instead
//42:00 how to change styling of APIs that we downloaded? eg google places? => go to their documentation and search for style(s)={{}}

export default function App() {
  return <Home />;
}
