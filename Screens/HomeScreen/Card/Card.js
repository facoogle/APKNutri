import React from "react";
import { View,Text,Image,StyleSheet,TouchableOpacity } from "react-native";
import  Icon  from "react-native-vector-icons/AntDesign";
import  IconComment  from "react-native-vector-icons/FontAwesome";
import  IconShare  from "react-native-vector-icons/Fontisto";

const Card = ({id,name,image})=>{

    const onPress = () => console.log("soy onpress");


    return(
        
        <View
        style={{ width:"100%",backgroundColor:"white"}}
        >
            <View
        style={{ width:"99%",backgroundColor:"white"}}
        >
            <Text style={{
                
            }}>
                {name}
            </Text>
            <Image 
            source={{uri: image }}
            style={{aspectRatio: 1, height: undefined, }}
            ></Image>


            <TouchableOpacity
        style={{alignItems: "center",
        size:"25%",
        width:"15%",
        position:"absolute",
        marginLeft:"88%",
        marginTop:"60%"

        }}
        onPress={onPress}
      >
        <Icon name="heart" size={35}  style = {{
            color:"green",
            
        }}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={{alignItems: "center",
        size:"25%",
        width:"15%",
        position:"absolute",
        marginLeft:"88%",
        marginTop:"75%"

        }}
        onPress={onPress}
      >
        <IconComment name="comment" size={35}  style = {{
            color:"green",
            
        }}/>
      </TouchableOpacity>


      <TouchableOpacity
        style={{alignItems: "center",
        size:"25%",
        width:"15%",
        position:"absolute",
        marginLeft:"88%",
        marginTop:"95%"

        }}
        onPress={onPress}
      >
        <IconShare name="share-a" size={25}  style = {{
            color:"green",
            
        }}/>
      </TouchableOpacity>


            </View>
        </View>
       
    )
}

export default Card