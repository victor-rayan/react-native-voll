import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../Login";
import Register from "../Register";
import Tabs from "../Tabs";

const Tab = createNativeStackNavigator();

export default function Routers(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} options={{headerShown:false}} />
                <Tab.Screen name="Register" component={Register} options={{headerShown:false}} />
                <Tab.Screen name="Tabs" component={Tabs} options={{headerShown:false}} />
            </Tab.Navigator>
    </NavigationContainer>
    );
}