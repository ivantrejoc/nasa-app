import { View, Text, Image, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PodCard = ({ title, image, date, explanation }) => {
  const { navigate } = useNavigation();
  const handlePress = () => {
    navigate("Detail", {title, image, date, explanation});
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handlePress} />
      </View>
    </View>
  );
};
export default PodCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(105, 153, 238, 0.6)",
    flex: 1.3,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
    borderRadius: 35,
    marginHorizontal: 15,
    padding: 1
  },
  imageContainer: {
    width: "90%",
    height: "60%",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 35
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 35
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
  buttonContainer: {
    width: "90%",
    alignItems: "flex-end"
  }
});
