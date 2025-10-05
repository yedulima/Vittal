import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginByEmail from "../pages/login/LoginByEmail/Login";
import LoginByPhone from "../pages/login/LoginByPhone/Login"

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false,
    cardStyle: {
        backgroundColor: "#fff",
    },
};

export default function LoginRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="LoginByEmail"
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name="LoginByEmail"
                component={LoginByEmail}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginByPhone"
                component={LoginByPhone}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
