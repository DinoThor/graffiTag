import 'react-native-gesture-handler';

import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { MD3DarkTheme } from 'react-native-paper';
import Home from './components/home/Home';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider style={styles.container} theme={MD3DarkTheme}>
      <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerShown: false
          }}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Notifications" component={Home} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
