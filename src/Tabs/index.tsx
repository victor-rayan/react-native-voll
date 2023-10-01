import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import MainScreen from "./MainScreen";
import Appointment from "./Appointments";
import Profile from "./Profile";
import Explore from "./Explore";

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarStyle: {
      backgroundColor: "#002851",
      borderTopWidth: 0,
    },
    tabBarActiveTintColor: "#339cff",
    tabBarInactiveTintColor: "#FFF",
    headerShown: false,
};

const tabs = [
    {
        name: "Home",
        component: MainScreen,
        icon: "home",
    },
    {
        name: "Consultas",
        component: Appointment,
        icon: "calendar",
    },
    {
        name: "Perfil",
        component: Profile,
        icon: "person",
    },
    {
        name: "Explorar",
        component: Explore,
        icon: "search",
    },
];

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
    >
    {tabs.map((tab) => (
        <Tab.Screen
        key={tab.name}
        name={tab.name}
        component={tab.component}
        options={{
            tabBarIcon: ({ color, size }) => (
            <Ionicons name={tab.icon} color={color} size={size} />
            ),
        }}
        />
    ))}
    </Tab.Navigator>
  );
}
