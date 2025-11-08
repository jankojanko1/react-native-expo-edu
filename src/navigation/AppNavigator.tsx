import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/HomeScreen";
import SearchScreen from "@/screens/SearchScreen";
import VideoDetailScreen from "@/screens/VideoDetailScreen";
import PreloadScreen from "@/components/PreloadScreen";

import IconHome from "../../assets/icons/home-icon.svg";
import IconSearch from "../../assets/icons/search-icon.svg";
import { theme } from "@/theme/theme";

export type RootStackParamList = {
  Home: undefined;
  Search: { query?: string } | undefined;
  VideoDetail: { videoId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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

function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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
  const [showPreload, setShowPreload] = useState(true);

  if (showPreload) {
    return <PreloadScreen onContinue={() => setShowPreload(false)} />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: "#000",
            borderTopWidth: 0,
            height: 70,
            paddingBottom: 8,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: -4,
          },
          tabBarIcon: ({ focused }) => {
            const color = focused ? theme.themePrimary : theme.themeSecondary;

            if (route.name === "Home") {
              return <IconHome width={24} height={24} color={color} />;
            }
            if (route.name === "Search") {
              return <IconSearch width={24} height={24} color={color} />;
            }
            return null;
          },
          tabBarActiveTintColor: theme.themePrimary,
          tabBarInactiveTintColor: theme.themeSecondary,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ title: "Home" }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{ title: "Search" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
