import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SCREENS} from './types';

/**
 * SCREENS
 */
import HomeScreen from './screens/Home';
import NoteScreen from './screens/Note';
import DeleteScreen from './screens/Delete';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.HOME}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREENS.NOTE} component={NoteScreen} />
        <Stack.Screen name={SCREENS.DELETE} component={DeleteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
