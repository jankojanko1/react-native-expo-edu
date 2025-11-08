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
  MainTabs: undefined;
  VideoDetail: { videoId: string };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: theme.theme,
          borderTopWidth: 0,
          height: 72,
          paddingBottom: 8,
        },
        tabBarIconStyle: { marginTop: 4 },
        tabBarLabelStyle: { fontSize: 12, marginTop: 0 },
        tabBarIcon: ({ focused }) => {
          const color = focused ? theme.themePrimary : theme.themeSecondary;
          if (route.name === "Home")
            return <IconHome width={32} height={32} color={color} />;
          if (route.name === "Search")
            return <IconSearch width={32} height={32} color={color} />;
        },
        tabBarActiveTintColor: theme.themePrimary,
        tabBarInactiveTintColor: theme.themeSecondary,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const [showPreload, setShowPreload] = useState(true);

  if (showPreload) {
    return <PreloadScreen onContinue={() => setShowPreload(false)} />;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="MainTabs" component={MainTabs} />
        <RootStack.Screen name="VideoDetail" component={VideoDetailScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
