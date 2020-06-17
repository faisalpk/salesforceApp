// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //
import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Card } from "react-native-elements";

const Trainings = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("StressEating")}>
            <Card
              containerStyle={{
                backgroundColor: "#FFFFFF",
                padding: 10,
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#606070", fontWeight: "bold" }}>
                  Stress Eating
                </Text>
                <Text
                  style={{ color: "#228B22" }}
                  onPress={() => alert("MORE")}
                >
                  tap to see detail
                </Text>
              </View>
              <View style={{ flexDirection: "column", width: "100%" }}>
                <ScrollView
                  horizontal={false}
                  showsHorizontalScrollIndicator={false}
                >
                  <View
                    style={{
                      margin: 5,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image
                      source={require("./stress.png")}
                      style={{ width: 70, height: 70, margin: 10 }}
                    />
                    <Text style={{ alignContent: "flex-end" }}>
                      Stress and uncertainty can lead to changes in the way we
                      operate but particularly in the way we eat. Eating and
                      making food choice is such a subconscious process that we
                      most often don’t even realise the choices we are making.
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ color: "#606070", fontWeight: "200" }}>
                      {"Status"}
                    </Text>
                    <Text style={{ color: "#228B22" }}>{"Completed"}</Text>
                  </View>
                </ScrollView>
              </View>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Nutrition")}>
            <Card
              containerStyle={{
                backgroundColor: "#FFFFFF",
                padding: 10,
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#606070", fontWeight: "bold" }}>
                  10 simple Nutrition tips
                </Text>
                <Text
                  style={{ color: "#228B22" }}
                  onPress={() => alert("MORE")}
                >
                  tap to see detail
                </Text>
              </View>
              <View style={{ flexDirection: "column", width: "100%" }}>
                <ScrollView
                  horizontal={false}
                  showsHorizontalScrollIndicator={false}
                >
                  <View
                    style={{
                      margin: 5,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image
                      source={require("./Nutration.png")}
                      style={{ width: 70, height: 70, margin: 10 }}
                    />
                    <Text style={{ alignContent: "flex-end" }}>
                      When we feel stressed and overwhelmed the last thing we
                      want to think about is eating healthy and thinking about
                      our diet. But rather than thinking of food as something to
                      make us worried and stressed we can think of it as
                      something that fuels our bodies and keeps our brains
                      nourished.
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ color: "#606070", fontWeight: "200" }}>
                      {"Status"}
                    </Text>
                    <Text style={{ color: "#228B22" }}>{"In Progress"}</Text>
                  </View>
                </ScrollView>
              </View>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Chronic")}>
            <Card
              containerStyle={{
                backgroundColor: "#FFFFFF",
                padding: 10,
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#606070", fontWeight: "bold" }}>
                  Hormones and chronic stress
                </Text>
                <Text
                  style={{ color: "#228B22" }}
                  onPress={() => alert("MORE")}
                >
                  tap to see detail
                </Text>
              </View>
              <View style={{ flexDirection: "column", width: "100%" }}>
                <ScrollView
                  horizontal={false}
                  showsHorizontalScrollIndicator={false}
                >
                  <View
                    style={{
                      margin: 5,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Image
                      source={require("./harmones.png")}
                      style={{ width: 70, height: 70, margin: 10 }}
                    />
                    <Text style={{ alignContent: "flex-end" }}>
                      When you are in chronic stressed state our body can
                      respond by setting off small alarms within our body’s
                      functions and systems to let us know it is in distress
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ color: "#606070", fontWeight: "200" }}>
                      {"Status"}
                    </Text>
                    <Text style={{ color: "#228B22" }}>{"No Started"}</Text>
                  </View>
                </ScrollView>
              </View>
            </Card>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 18, textAlign: "center", color: "#297db6" }}>
          Tel: (02) 8243 5600
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center", color: "#297db6" }}>
          Email: info@navigatorgroup.com.au
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
export default Trainings;
