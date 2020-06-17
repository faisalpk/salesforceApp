import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Communications from 'react-native-communications';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.ImageContainer}>
          <Image source={require('./NavigatorLogo.png')} style={styles.welcomeImage} />
        </View>

        <View>
          <Text style={styles.paragraph}>
            If you are in distress or need to talk to someone about your mental wellbeing, call or
            text the free 24/7 mental wellbeing helpline for your location.
          </Text>
        </View>
        <View style={styles.welcomeContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Communications.phonecall('(02) 8243 5600', true)}>
            <Text style={{ color: 'white' }}>(02) 8243 5600 Call</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.welcomeContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chatter')}>
            <Text style={{ color: 'white' }}>Message to Advisor</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.welcomeContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FormScreen')}>
            <Text style={{ color: 'white' }}>Fill Assessment Form</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.welcomeContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Trainings')}>
            <Text style={{ color: 'white' }}>Trainings</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.welcomeContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Trainings')}>
            <Text style={{ color: 'white' }}>Body</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.welcomeContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Trainings')}>
            <Text style={{ color: 'white' }}>Mind</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.welcomeContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Trainings')}>
            <Text style={{ color: 'white' }}>Rest</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.welcomeContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={{ color: 'white' }}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#297db6',
    padding: 10,
    width: 300,
  },
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  ImageContainer: {
    alignItems: 'center',
    marginTop: 1,
    marginBottom: 1,
  },
  welcomeImage: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
  paragraph: {
    margin: 10,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default HomeScreen;
