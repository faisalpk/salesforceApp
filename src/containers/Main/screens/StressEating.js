// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //
import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Card } from "react-native-elements";

const StressEating = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignContent: "center" }}>
      <ScrollView>
        <Card
          containerStyle={{
            backgroundColor: "#FFFFFF",
            padding: 10,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            alignContent: "center",
          }}
        >
          <Image source={require("./stress.png")} style={styles.welcomeImage} />
          <Text style={styles.paragraph}>
            Stress and uncertainty can lead to changes in the way we operate but
            particularly in the way we eat. Eating and making food choice is
            such a subconscious process that we most often don’t even realise
            the choices we are making.
          </Text>
          <Text style={styles.paragraph}>
            Changes to our home routine, our work routine, as well as our sleep
            patterns, can lead to increased feelings of stress and overwhelm and
            have us grabbing for the packet of Tim Tams to manage this.
          </Text>
          <Text style={styles.paragraph}>
            Foods that are high in fat and sugar not only taste great but also
            hit the dopamine spot in our brain, or the pleasure centre. So the
            quickest and easiest way to take us away to our happy place is that
            chocolate bar or ice cream. However this high is only ever temporary
            but leaves us craving more and more. The best way to break this
            cycle is to become aware of the emotions that make us turn to food
            in the first place.
          </Text>
          <Text style={styles.paragraph}>
            Emotions that make us turn to food:
          </Text>
          <Text style={styles.paragraph}>Boredom</Text>
          <Text style={styles.paragraph}>Stress and Anxiety</Text>
          <Text style={styles.paragraph}>Overwhelm</Text>
          <Text style={styles.paragraph}>Grief and Sadness</Text>
          <Text style={styles.paragraph}>Loss of control</Text>
          <Text style={styles.paragraph}>
            Quite likely you have been feeling all of those at different times
            during the last few months and it makes perfect sense to turn to
            food. Food is the fastest thing that changes our emotional state.
          </Text>
          <Text style={styles.paragraph}>
            For most of us, it can, however, create that negative loop where we
            feel guilty for eating the treats in the freezer and then rather
            than sit with the guilt, eat something else to hide away from those
            guilty feelings.{" "}
          </Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};
export default StressEating;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#297db6",
    padding: 10,
    width: 300,
  },
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    alignContent: "center",
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  welcomeImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    alignContent: "center",
  },
  paragraph: {
    margin: 24,
    fontSize: 15,
    textAlign: "left",
  },
});
