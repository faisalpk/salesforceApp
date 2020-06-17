// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //
import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";

import { Dropdown } from "react-native-material-dropdown";

import FontAwesome from "react-native-vector-icons/FontAwesome";
export default class Formclass extends Component {
  state = {
    name: "",
    telephonenumber: "",
    locality: "",
    employer: "",
    male: "",
    edit: true,
    job: "barber",
    data: [
      {
        value: "Engineer",
      },
      {
        value: "Barber",
      },
      {
        value: "Doctor",
      },
    ],
    q1: [false, false, false, false, false],
    q2: [false, false, false, false, false],
    q3: [false, false, false, false, false],
    q4: [false, false, false, false, false],
  };
  selectq1(i) {
    if (this.state.edit) {
      let temp = [false, false, false, false, false];
      temp[i] = true;
      this.setState({ q1: temp });
    }
  }

  selectq2(i) {
    if (this.state.edit) {
      let temp = [false, false, false, false, false];
      temp[i] = true;
      this.setState({ q2: temp });
    }
  }

  selectq3(i) {
    if (this.state.edit) {
      let temp = [false, false, false, false, false];
      temp[i] = true;
      this.setState({ q3: temp });
    }
  }

  selectq4(i) {
    if (this.state.edit) {
      let temp = [false, false, false, false, false];
      temp[i] = true;
      this.setState({ q4: temp });
    }
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
          <ScrollView>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", alignSelf: "center" }}
            >
              Registration
            </Text>
            <Text>Name</Text>
            <View
              style={{
                borderWidth: 1,
                marginTop: 10,
                borderColor: "#cececd",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <TextInput
                onChangeText={(v) => this.setState({ name: v })}
                editable={this.state.edit}
                placeholder="write name"
              />
            </View>
            <Text style={{ marginTop: 10 }}>Telephone Number</Text>
            <View
              style={{
                borderWidth: 1,
                marginTop: 10,
                borderColor: "#cececd",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <TextInput
                onChangeText={(v) => this.setState({ telephonenumber: v })}
                editable={this.state.edit}
                placeholder="write name"
              />
            </View>
            <Dropdown
              label="Job"
              baseColor="black"
              labelTextStyle={{ color: "black" }}
              data={this.state.data}
            />
            <Text style={{ marginTop: 10 }}>Locality</Text>
            <View
              style={{
                borderWidth: 1,
                marginTop: 10,
                borderColor: "#cececd",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <TextInput
                onChangeText={(v) => this.setState({ locality: v })}
                editable={this.state.edit}
                placeholder="write name"
              />
            </View>
            <Text style={{ marginTop: 10 }}>Employer</Text>
            <View
              style={{
                borderWidth: 1,
                marginTop: 10,
                borderColor: "#cececd",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <TextInput
                onChangeText={(v) => this.setState({ employer: v })}
                editable={this.state.edit}
                placeholder="write name"
              />
            </View>
            <Text style={{ marginTop: 10 }}>Male/Female</Text>
            <View
              style={{
                borderWidth: 1,
                marginTop: 10,
                borderColor: "#cececd",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <TextInput
                onChangeText={(v) => this.setState({ male: v })}
                editable={this.state.edit}
                placeholder="write name"
              />
            </View>
            <Text style={{ marginTop: 10 }}>
              In the last month how often have you felt you were unable to
              control the important things in your life (R)?
            </Text>
            <TouchableOpacity
              onPress={() => this.selectq1(0)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q1[0] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Never</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectq1(1)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q1[1] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Almost Never</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectq1(2)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q1[2] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Sometimes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectq1(3)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q1[3] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Fairly Often</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectq1(4)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q1[4] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Almost All the time</Text>
            </TouchableOpacity>

            <Text style={{ marginTop: 10 }}>
              In the last month how often have you felt confident about your
              ability to handle your personal problems?
            </Text>
            <TouchableOpacity
              onPress={() => this.selectq2(0)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q2[0] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Never</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectq2(1)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q2[1] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Almost Never</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectq2(2)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q2[2] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Sometimes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectq2(3)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q2[3] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Fairly Often</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectq2(4)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q2[4] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Almost All the time</Text>
            </TouchableOpacity>

            <Text style={{ marginTop: 10 }}>
              In the last month how often have you felt things were going your
              way (R)?
            </Text>
            <TouchableOpacity
              onPress={() => this.selectq3(0)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q3[0] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Never</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectq3(1)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q3[1] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Almost Never</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectq3(2)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q3[2] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Sometimes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectq3(3)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q3[3] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Fairly Often</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectq3(4)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q3[4] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Almost All the time</Text>
            </TouchableOpacity>

            <Text style={{ marginTop: 10 }}>
              In the last month how often have you felt difficulties were piling
              up so high that you could not overcome them?
            </Text>
            <TouchableOpacity
              onPress={() => this.selectq4(0)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q4[0] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Never</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectq4(1)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q4[1] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Almost Never</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectq4(2)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q4[2] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Sometimes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectq4(3)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q4[3] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Fairly Often</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.selectq4(4)}
              style={{
                width: "90%",
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <FontAwesome
                name={this.state.q4[4] ? "circle" : "circle-o"}
                size={20}
              />
              <Text style={{ marginLeft: 20 }}>Almost All the time</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: "100%",
                height: 50,
                backgroundColor: "#cececd",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
              onPress={() => this.setState({ edit: false })}
            >
              <Text>{this.state.edit ? "Submit" : "Edit"}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#297db6",
    padding: 10,
    width: 300,
    marginTop: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 30,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 15,
    textAlign: "center",
  },
});
