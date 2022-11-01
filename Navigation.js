import react from "react";
import { createMaterialBottomTabNavigator, MaterialBottomTabView } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//screens
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import SettingScreen from "./Screens/SettingScreen/SettingScreen"

//icons
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
    return(
        <Tab.Navigator
        activeColor="white"
        barStyle={{ backgroundColor: 'lime' }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
            options={{
                tabBarLabel:"Home",
                tabBarIcon:({color,size})=>(
                    <Ionicons name="ios-home" size={24} color={color} />
                )
            }}
            />
            <Tab.Screen name="Settings" component={SettingScreen}
                options={{
                    tabBarLabel:"Profile",
                    tabBarIcon:({color,size})=>(
                        <FontAwesome name="user-circle-o" size={24} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default function Navigator(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}