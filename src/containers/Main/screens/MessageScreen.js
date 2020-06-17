import * as React from "react";
import { Alert, Button, TextInput, View, StyleSheet } from "react-native";

export default function MessageScreen() {
  const onLogin = () => {
    Alert.alert("Credentials", `${username} + ${password}`);
  };
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onUsernameChange = (username) => setUserName(username);
  const onPwdChange = (password) => setPassword(password);

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={onUsernameChange}
        placeholder={"Username"}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={onPwdChange}
        placeholder={"Password"}
        secureTextEntry={true}
        style={styles.input}
      />

      <Button title={"Login"} style={styles.input} onPress={onLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  paragraph: {
    margin: 10,
    fontSize: 15,
    textAlign: "center",
  },
});
