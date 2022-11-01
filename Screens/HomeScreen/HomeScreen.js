import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import Cards from "./Cards/Cards";

const HomeScreen = ()=>{
    return(
        <View style={{justifyContent:"center",display:"flex",alignItems:"center"}}>
            <Text style={{
                fontSize:30,
                textAlign:"center",
                marginTop:"20%"
            }}>
                NUTRI HOME - RECIPES
            </Text>
            <Cards/>
        </View>
    )
}

export default HomeScreen