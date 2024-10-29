import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MasterPortrait from './screens/MasterPortrait';
import DetailPortrait from './screens/DetailPortrait';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MasterPortrait" >
        <Stack.Screen name="MasterPortrait" component={MasterPortrait} options={{ headerShown: false }} />
        <Stack.Screen name="DetailPortrait" component={DetailPortrait} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
