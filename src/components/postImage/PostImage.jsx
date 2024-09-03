import { StyleSheet, Text, View, Button } from 'react-native'

const PostImage = ({title, date}) => {
  return (
    <View style={styles.container}>    
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button
        title="View"
        onPress={() => console.log("Learn More button pressed")}
      />
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(105, 153, 238, 0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 16,
        borderRadius: 35,
        marginHorizontal: 15,
        padding: 16
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
        width: "100%",
        alignItems: "flex-end"
      }
})

export default PostImage;