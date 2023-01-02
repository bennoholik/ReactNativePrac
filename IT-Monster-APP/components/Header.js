import { StyleSheet, Text, View } from "react-native";

const AppHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>ITDA</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1.3,
    width: 400,
    height: 400,
    backgroundColor: "red",
  },
  logo: {
    fontSize: 40,
    fontWeight: "500",
    position: "absolute",
    top: 40,
    left: 10,
    color: "white",
  },
});

export default AppHeader;
