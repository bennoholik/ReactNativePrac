import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const API_KEY = "e2958830798c2a31ddfd8b49a1a39a91";

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeatherInfo = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=1&appid=${API_KEY}`
    );
    const json = await data.json();
    console.log(json);
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator="false"
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>9</Text>
          <Text style={styles.weatherStatus}>Windy</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>9</Text>
          <Text style={styles.weatherStatus}>Windy</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>9</Text>
          <Text style={styles.weatherStatus}>Windy</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>9</Text>
          <Text style={styles.weatherStatus}>Windy</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>9</Text>
          <Text style={styles.weatherStatus}>Windy</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "blue" },
  city: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  temp: {
    fontSize: 100,
    fontWeight: "800",
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
    marginTop: 50,
  },
  weatherStatus: {
    fontSize: 30,
    fontWeight: "500",
  },
  weather: {
    backgroundColor: "green",
    // justifyContent: "center",
  },
});
