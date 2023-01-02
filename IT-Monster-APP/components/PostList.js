import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const PostList = () => {
  const [list, setList] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("https://g10000.shop/api/quests/searches");

    return data.content;
  };
  useEffect(() => {
    fetchData().then((data) => setList(data));
  }, []);
  console.log(list);
  return (
    <ScrollView>
      {list.length > 0
        ? list?.map((li, i) => (
            <View key={i} style={styles.post}>
              <Text style={styles.title}>{li.title}</Text>
            </View>
          ))
        : null}
      {/* <View style={styles.post}></View>
      <View style={styles.post}></View>
      <View style={styles.post}></View>
      <View style={styles.post}></View>
      <View style={styles.post}></View>
      <View style={styles.post}></View>
      <View style={styles.post}></View>
      <View style={styles.post}></View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  post: {
    flex: 1,
    width: 400,
    height: 100,
    backgroundColor: "purple",
    marginBottom: 10,
  },
  title: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
});

export default PostList;
