import { StyleSheet, Text, View } from "react-native";

const NavBar = () => {
  return (
    <View style={styles.NavBar}>
      <View style={{ backgroundColor: "red", flex: 1 }}>
        <Text>Home</Text>
      </View>
      <View style={{ backgroundColor: "blue", flex: 1 }}>
        <Text>Chat</Text>
      </View>
      <View style={{ backgroundColor: "pink", flex: 1 }}>
        <Text>Community</Text>
      </View>
      <View style={{ backgroundColor: "black", flex: 1 }}>
        <Text style={{ color: "white" }}>Mypage</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  NavBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "green",
  },
});

export default NavBar;
