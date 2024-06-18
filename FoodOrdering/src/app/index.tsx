import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

const sizes = ["S", "M", "Lg", "Xl"];

const index = () => {
  const [SizeSelection, setSizeSelection] = useState("M");
  return (
    <Pressable>      
        <View style={styles.sizeBall}>
          {sizes.map((size) => {
            return <Text style={{ color: "#444" }}>{size}</Text>;
          })}
        </View>      
    </Pressable>
  );
};

export default index;

const styles = StyleSheet.create({
  prodSize: {
    width: 50,
    aspectRatio: 1,
    backgroundColor: "#dd33cc",
    borderRadius: 25,
  },
  sizeBall:{
    
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginTop:300

  }
});
