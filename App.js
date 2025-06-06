import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Mi Primera App!!</Text>
      <Button
        title="Presioname"
        onPress={() => alert("Hola desde React Native!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fonySize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
