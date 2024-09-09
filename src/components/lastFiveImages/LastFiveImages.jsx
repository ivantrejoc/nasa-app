import { View, Text, ScrollView, StyleSheet } from "react-native";
import { PostImage } from "../postImage";

const LastFiveImages = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 days</Text>
      <ScrollView style={styles.content}>
        {data?.map((item) => {
          return (
            <PostImage key={item.title} title={item.title} date={item.date} image={item.hdurl} explanation={item.explanation} />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    marginVertical: 8
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 18
  },
  content: {
    padding: 1
  }
});

export default LastFiveImages;
