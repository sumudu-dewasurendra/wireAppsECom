
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ItemDetailedViewScreen from "../screens/ItemDetailedViewScreen";

const Stack = createNativeStackNavigator()

const stackScreenOptions = {
    headerShown: false,
}

const HomeStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerBackTitleVisible: false, headerStyle: { display: 'none' } }}>
        <Stack.Screen name="HomeView" options={stackScreenOptions} component={HomeScreen} />
        <Stack.Screen name="ItemDetailedView" options={stackScreenOptions} component={ItemDetailedViewScreen} />
      </Stack.Navigator>
  );
}

export default HomeStack;