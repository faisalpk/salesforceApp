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

const Harmone = () => {
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
            source={require("./harmones.png")}
            style={styles.welcomeImage}
          />
          <Text style={styles.paragraph}>
            When you are in chronic stressed state our body can respond by
            setting off small alarms within our body’s functions and systems to
            let us know it is in distress. Our body’s autonomic nervous system
            operates in two main systems the sympathetic and the
            parasympathetic.
          </Text>
          <Text style={styles.paragraph}>
            The sympathetic nervous system role is to stimulate the fight or
            flight response is a reaction to stressors. The parasympathetic
            system operates to stimulate the body’s rest and digest system,
            taking care of what the body needs for optimal health and
            functioning. When our sympathetic nervous system is running in
            overdrive with little time in the parasympathetic our physical
            health can be compromised.
          </Text>
          <Text style={styles.paragraph}>Our body’s warning signs</Text>
          <Text style={styles.paragraph}>Headaches </Text>
          <Text style={styles.paragraph}>troubles sleeping </Text>
          <Text style={styles.paragraph}>Increased heart rate</Text>
          <Text style={styles.paragraph}>Irritable bowel syndrome</Text>
          <Text style={styles.paragraph}>Weight gain or loss</Text>
          <Text style={styles.paragraph}>Hair loss</Text>
          <Text style={styles.paragraph}>Decreased appetite</Text>
          <Text style={styles.paragraph}>Decreased sex drive</Text>
          <Text style={styles.paragraph}>Bone issues</Text>
          <Text style={styles.paragraph}>Chronic niggles</Text>
          <Text style={styles.paragraph}>
            These issues can indicate that body isn’t getting enough time to
            repair and rest.
          </Text>
          <Text style={styles.paragraph}>
            Stress hormones too little or too much?
          </Text>
          <Text style={styles.paragraph}>
            Our major stress hormone is cortisol. Cortisol is released by the
            sympathetic nervous system to put out body into action to do
            something, Our other stress hormones are noradrenaline & adrenaline.
            These stress hormones are linked to depression, anxiety, headaches,
            migraines. If our body is under constant stress, and constantly
            pumping out cortisol it becomes worn out or “burnt out “which can
            spill over to under-functioning and depression and fatigue. Our body
            can adjust to periods of high stress; however, we need to have
            periods of downtime to repair and rest to keep functioning at a high
            level.
          </Text>
          <Text style={styles.paragraph}>
            The long-term activation of the stress-response system and the
            subsequent overexposure to cortisol and other stress hormones can
            disrupt almost all your body's processes.
          </Text>
          <Text style={styles.paragraph}>Hormone function</Text>
          <Text style={styles.paragraph}>
            Over functioning of the body systems like the Autonomic nervous
            system will lead to downregulation of other vital body systems. For
            females in a chronic stress environment the hormones associated with
            fertility - progesterone and estrogen drop off. This can mean
            amenorrhea, risk of bone loss and muscle loss and long-term impact
            on fertility. Similar occurs for men in that their testosterone
            decreases, which impacts on sleep, focus and fertility. The longer
            your body stays in a hormone imbalance the more risks there are to
            your health and hormones.
          </Text>
          <Text style={styles.paragraph}>How to reduce stress hormones</Text>
          <Text style={styles.paragraph}>
            The feel-good chemicals – serotonin and endorphins can help to
            reduce the impact of stress hormones. Some of the ways they are
            released are during physical exercise, during human connection when
            spending time in nature and after periods of relaxation and rest.{" "}
          </Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Harmone;

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
