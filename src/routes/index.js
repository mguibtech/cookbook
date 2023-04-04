import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { Favorites } from '../screens/Favorites'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#121212",

                tabBarStyle: {
                    backgroundColor: "#fff",
                    borderTopWidth: 0,
                }
            }}
        >
            <Tab.Screen
                name='HomeTab'
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <MaterialCommunityIcons name='home' color='#000' size={size} />
                        }
                        return <MaterialCommunityIcons name='home-outline' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name='Favorites'
                component={Favorites}
                options={{
                    tabBarIcon:({color, size, focused}) => {
                        if(focused){
                            return <MaterialCommunityIcons name='heart' color='#ff4141' size={size}/>
                        }
                        return <MaterialCommunityIcons name='heart-outline' color={color} size={size}/>
                    }
                }}
            />
        </Tab.Navigator>
    )
}