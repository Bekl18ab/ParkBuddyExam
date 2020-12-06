import {createStackNavigator} from "@react-navigation/stack";
import SettingsScreen from "./SettingsScreen";
import Profile from "./Profile";

// Her oprettes den overordnede StackNavigator der forbinder de 5 sider

const SettingStack = createStackNavigator({
        Settings: { screen: SettingsScreen },
        Profile: {screen: Profile}
    },
    {
        //opstartsiden sættes til SettingScreen
        initialRouteName:'Settings',
        navigationOptions:{
            title:'Main'
        }
    }
);
export default SettingStack


// const Stack = createStackNavigator();

// function SettingStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
//       <Stack.Screen name="Profile" component={Profile} />
//     </Stack.Navigator>
//   );
// }