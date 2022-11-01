import React,{useState,useEffect} from "react";
import { View,Text,ScrollView,StyleSheet,TouchableOpacity,SafeAreaView } from "react-native";
import Card from "../Card/Card"


let URL = "https://nutri-app-production.up.railway.app/recipes"


const Cards = ()=>{

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        fetch(URL)
        .then((response)=>response.json())
        .then((json)=>setData(json))
        .catch((error)=>console.error(error))
        .finally(()=>setLoading(false))
    },[])

    
    const styles = StyleSheet.create({
        container:{
            
            
            display:"flex",
            justifyContent:"center"
            
        }
    })
    
    return(
        <View 
        style = {styles.container}
        >
            <SafeAreaView>
            <ScrollView>
                {loading?(<Text>Loading..</Text>):
                (data.map((post)=>(
                
                    <Card  style={styles.cards}
                    id = {post.id}
                    name = {post.name}
                    image = {post.image}
                    />
                )))}
                </ScrollView>
                </SafeAreaView>
        </View>
    )
}

export default Cards