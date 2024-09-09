import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Header } from "../../components/header";
import { useRoute } from "@react-navigation/native";
const Detail = () => {
  const route = useRoute();
  const { title, image, date, explanation } = route.params;

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(7,26,93,255)",
    flex: 1,
    paddingHorizontal: 16
  },
  content: {
    flex: 1,
    backgroundColor: "rgba(105, 153, 238, 0.6)",
    marginVertical: 24,
    borderRadius: 35,
    padding: 16
  },
  image: {
    width: "100%",
    height: "50%",
    resizeMode: "cover",
    borderRadius: 35,
    borderColor: "#FFFFFF",
    borderWidth: 2
  },
  textContainer: {
    width: "90%",
    justifyContent: "flex-start"
  },
  title: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginVertical: 12
  },
  date: {
    fontSize: 15,
    color: "#FFFFFF",
    textAlign: "left"
  },
  explanationContainer: {
    marginVertical: 16,
    flex: 1
  },
  explanation:{
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "left"
  }
});

export default Detail;
