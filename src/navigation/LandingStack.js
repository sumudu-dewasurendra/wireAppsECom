import NotificationDot from '../components/NotificationDot';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import BasketScreen from '../screens/BasketScreen';
import { useGetBasketItems } from '../hooks/useBucket';

const LandingTab = createBottomTabNavigator();

const tabScreenOptions = {
    headerShown: false,
}

const tabBarLabelStyle = {
    fontWeight: "700",
    fontSize: 20,
    color: "white",
}

const tabBarIconStyle = {
    left: 30,
    top: 10
}

const tabBarStyle = {
    backgroundColor: "#ff8626",
}

const LandingStack = () => {
    const { basketItems } = useGetBasketItems();
    const notificationCount = basketItems.length
    return (
            <LandingTab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        return route.name === 'Home' ? null : notificationCount > 0 ? <NotificationDot count={notificationCount} /> : null;
                    },
                    tabBarLabelStyle: tabBarLabelStyle,
                    tabBarIconStyle: tabBarIconStyle,
                    tabBarStyle: tabBarStyle,
                })}
            >
                <LandingTab.Screen options={tabScreenOptions} name="Home" component={HomeStack} />
                <LandingTab.Screen options={tabScreenOptions} name="Basket" component={BasketScreen} />
            </LandingTab.Navigator>
    );
}

export default LandingStack;