import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "../../components/header";
import { PodCard } from "../../components/podCard";
import { fetchPod } from "../../services/fetch";

const Home = () => {
  const [pod, setPod] = useState(null);

  useEffect(() => {
    const dailyImage = async () => {
      try {
        const response = await fetchPod();
        setPod(response);
      } catch (error) {
        console.error(error);
      }
    };
    dailyImage();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      {pod && <PodCard image={pod.hdurl} title={pod.title} date={pod.date} />}
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  }
});
