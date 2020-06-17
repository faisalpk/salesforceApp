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

const Nutrition = () => {
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
          <Image
            source={require("./Nutration.png")}
            style={styles.welcomeImage}
          />
          <Text style={styles.paragraph}>
            When we feel stressed and overwhelmed the last thing we want to
            think about is eating healthy and thinking about our diet. But
            rather than thinking of food as something to make us worried and
            stressed we can think of it as something that fuels our bodies and
            keeps our brains nourished.
          </Text>
          <Text style={styles.paragraph}>
            Keep it super simple, here are 10 tips to improve your energy and
            brain power all day long.
          </Text>
          <Text style={styles.paragraph}>
            1. Aim towards 5 servings of vegetables and 2 servings of fruit a
            day, pay attention to how much variety and colour you are getting in
            your fruit and veg.
          </Text>
          <Text style={styles.paragraph}>
            2. Reduce the amount of sugary drinks. If you drink soft drink
            regularly swap it for sparkling water. If you have coffee with sugar
            see if you can slowly reduce this to one or none.
          </Text>
          <Text style={styles.paragraph}>
            3. Have three full meals a day. skipping meals will only make you
            hungry later in the day and more likely to overeat.
          </Text>
          <Text style={styles.paragraph}>4. Eat Protein with every meal.</Text>
          <Text style={styles.paragraph}>
            5. Reduce highly packaged food, that includes wrapped, boxed and in
            plastic. If the food can sit on the shelf for 6 months and still
            look exactly the same it doesn’t have a very many nutrients in it
            and a lot of filler. Swap for colourful vegetables or food with one
            ingredient listed.
          </Text>
          <Text style={styles.paragraph}>
            6. Sweets or treats, how many and how often? There should be no
            guilt or shame about enjoying chocolate or cake in your regular
            eating. However a treat (high sugar high fat) daily or more could be
            more of a hunger signal, or an emotional eating cue
          </Text>
          <Text style={styles.paragraph}>
            7. Minimum 2 litres of water a day especially if you are exercising{" "}
          </Text>
          <Text style={styles.paragraph}>
            8. Understand that just because something is packaged as “healthy”
            “low-fat” “organic” does not mean you can eat unlimited amounts,
            these foods can trick us into thinking they are an unlimited
            indulgence.
          </Text>
          <Text style={styles.paragraph}>
            9. Don’t go crazy on the weekend with “cheat meals” or by telling
            yourself you have been “good” all weekend. This creates negative
            patterns with your relationship with food.{" "}
          </Text>
          <Text style={styles.paragraph}>
            10. Keep it simple, the more complex it is the more unlikely you are
            going to stick with it.{" "}
          </Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Nutrition;

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
