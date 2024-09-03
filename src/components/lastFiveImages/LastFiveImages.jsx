import { View, Text, ScrollView, StyleSheet } from "react-native";
import { PostImage } from "../postImage";

const LastFiveImages = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 days</Text>
      <ScrollView style={styles.content}>
        {data?.map((item) => {
          return (
            <PostImage key={item.index} title={item.title} date={item.date} />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
