import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "../../components/header";
import { PodCard } from "../../components/podCard";
import { LastFiveImages } from "../../components/lastFiveImages";
import { getPod, getPicsLastFiveDays } from "../../services/fetch";

const Home = () => {
  const [pod, setPod] = useState(null);
  const [lastFivePics, setLastFivePics] = useState(null);

  const rawDate = new Date();
  const currentDate = rawDate.toISOString().slice(0, 10);
  const fiveDaysAgo = new Date(rawDate.getTime() - 5 * 24 * 60 * 60 * 1000);
  const fiveDaysAgoDate = fiveDaysAgo.toISOString().slice(0, 10);

  useEffect(() => {
    const dailyImage = async () => {
      try {
        const response = await getPod();
        setPod(response);
      } catch (error) {
        console.error(error);
      }
    };

    const lastFiveImages = async (startDate, endDate) => {
      try {
        const response = await getPicsLastFiveDays(startDate, endDate);
        setLastFivePics(response);
      } catch (error) {
        console.error(error);
      }
    };
    dailyImage();
    lastFiveImages(fiveDaysAgoDate, currentDate);
  }, [setPod, setLastFivePics, currentDate, fiveDaysAgoDate]);

  return (
    <View style={styles.container}>
      <Header />
      {pod && <PodCard image={pod.hdurl} title={pod.title} date={pod.date} />}
      {lastFivePics && <LastFiveImages data={lastFivePics} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  lastFiveContainer: {
    backgroundColor: "gold"
  }
});

export default Home;
