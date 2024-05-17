import { NavigationContainer } from "@react-navigation/native";
import LandingStack from "./LandingStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

const stackScreenOptions = {
    headerShown: false,
}

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerBackTitleVisible: false, headerStyle: { shadowColor: 'transparent', elevation: 0 } }}>
        <Stack.Screen name="Landing" options={stackScreenOptions} component={LandingStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;