import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from 'navigation/HomeStack';
import DrawerContent from 'components/DrawerContent';
// import getTheme from 'services/getTheme';
import storeActions from 'store/actions/store';
import settingsSelectors from 'store/selectors/settings';

import { StyleSheet, Button, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import BottomTabNavigator from 'navigation/BottomTabNavigator';

import DetailsScreen from './screens/DetailsScreen';
import Trainings from './screens/Trainings';
import StressEating from './screens/StressEating';
import MessageScreen from './screens/MessageScreen';
//import FormScreen from './screens/FormScreen';
//import ChatView from './screens/ChatView';

const Drawer = createDrawerNavigator();

function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        If you want professional support to identify, monitor and resolve psychosocial barriers to
        physical recovery, workplace health, and wellbeing. Register with us!
      </Text>
      <Image source={require('./logo.png')} style={styles.welcomeImage} />
      <Button title="SignIn or Register" onPress={() => navigation.navigate('drawer')} />
    </View>
  );
}

const Main = ({ theme, clearStore }) => {
  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} clearStore={clearStore} />}
        initialRouteName="SignInScreen">
        <Drawer.Screen name="Sign In" component={SignInScreen} />
        <Drawer.Screen name="drawer" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

Main.propTypes = {
  theme: PropTypes.object,
};

const mapStateToProps = state => ({
  // darkTheme: settingsSelectors.getDarkTheme(state),
  // scaleFonts: settingsSelectors.getScaleFonts(state),
  theme: settingsSelectors.getTheme(state),
});

const mapDispatchToProps = {
  clearStore: storeActions.clearStore,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  ImageContainer: {
    alignItems: 'center',
    marginTop: 1,
    marginBottom: 1,
  },
  welcomeImage: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  paragraph: {
    margin: 10,
    fontSize: 15,
    textAlign: 'center',
  },
});
/* 
<NavigationContainer>
        <Stack.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: '#297db6' },
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold' },
  }}>
  <Stack.Screen name="Root" component={BottomTabNavigator} />
  <Stack.Screen name="Details" component={DetailsScreen} />
  <Stack.Screen name="Trainings" component={Trainings} />
  <Stack.Screen name="StressEating" component={StressEating} />
  <Stack.Screen name="MessageScreen" component={MessageScreen} />
</Stack.Navigator>;
      </NavigationContainer>

       <NavigationContainer theme={theme}>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} clearStore={clearStore} />}
        initialRouteName="SignInScreen">
        <Drawer.Screen name="Sign In" component={SignInScreen} />
        <Drawer.Screen name="drawer" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>

*/
