import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppHeader from "./components/Header";
// import Header from "./components/Header";
import NavBar from "./components/NavBar";
import PostList from "./components/PostList";

export default function App() {
  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.contents}>
        <PostList />
      </View>

      <NavBar style={styles.navbar} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contents: {
    flex: 8,
    backgroundColor: "yellow",
  },
});
