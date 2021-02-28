import React from "react";
import { Text, StyleSheet } from "react-native";
function a() {
  return <Text style={styles.itemText}>😝{demoView}</Text>;
}
export default a;

const demoView = 1;
const styles = {
  indicator: {
    position: "absolute",
    left: 0,
    top: -99,
    borderColor: "#aaa",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  } as any,

  scrollView: {
    height: 0,
  },

  selectedItemText: {
    fontSize: 20,
    fontWeight: "100",
    color: "#000",
  } as any,
  itemText: {
    fontSize: 20,
    color: "#aaa",
    textAlign: "center",
  } as any,
};
