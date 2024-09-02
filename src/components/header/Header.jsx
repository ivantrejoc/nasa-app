import { View, Text, Image, StyleSheet } from "react-native"

const Header = () => {
  return (
    <View>
      <View><Text>Explore</Text></View>
      <View>
        <Image source={require("../../../assets/nasa-logo.png")} />
      </View>        
        </View>
  )
}
export default Header

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
})