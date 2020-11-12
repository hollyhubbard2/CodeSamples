import React from "react";
import { View, StyleSheet } from "react-native";
import BaseComponent from "./BaseComponent";
import FooterComponent from "./FooterComponent";
import HeaderNavComponent from "./HeaderNavComponent";
import JumboComponent from "./JumboComponent";
import "../styles/fonts.css";

const MainComponent = () => {
  return (
    <View style={styles.baseText}>
      <View>
        <HeaderNavComponent></HeaderNavComponent>
      </View>
      <View>
        <JumboComponent></JumboComponent>
      </View>
      <View>
        <BaseComponent></BaseComponent>
      </View>
      <View>
        <FooterComponent></FooterComponent>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Noto Sans JP"
  },
  
});
export default MainComponent;