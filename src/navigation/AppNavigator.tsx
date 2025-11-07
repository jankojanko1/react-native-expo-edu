import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/HomeScreen";
import SearchScreen from "@/screens/SearchScreen";
import VideoDetailScreen from "@/screens/VideoDetailScreen";
// import SettingsScreen from '@/screens/SettingsScreen';

export type RootStackParamList = {
  Home: undefined;
  Search: { query?: string } | undefined;
  VideoDetail: { videoId: string };
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Search" }}
      />
      <Stack.Screen
        name="VideoDetail"
        component={VideoDetailScreen}
        options={{ title: "Video" }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Main"
          component={HomeStack}
          options={{ title: "Main" }}
        />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
