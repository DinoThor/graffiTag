import 'react-native-gesture-handler';

import { StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

import { MD3DarkTheme } from 'react-native-paper';

import Home from './src/components/home/Home';
import CustomDrawer from './src/components/drawer/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <PaperProvider style={styles.container} theme={MD3DarkTheme}>
        <NavigationContainer theme={DarkTheme}>
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
          >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Notifications" component={Home} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: DarkTheme.colors.card,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
