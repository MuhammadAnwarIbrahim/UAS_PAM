import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Home = ({ navigation }) => {
    //
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: "#E7F6EF",
    },
    content:{
      marginTop:30,
    },
    H1:{
      marginTop:50,
      fontSize:20,
    },
    kotak: {
      backgroundColor: "#fff",
      padding: 10,
      marginVertical: 5,
      marginHorizontal: 22,
      flexDirection: "row",
      borderRadius: 12,
      elevation: 3,
    },
    newRecipe:{
      flexDirection:'row',
      marginBottom:10,
    },
    image:{
      marginTop:10,
      width: 90,
      height: 90,
    },
    boxHijau: {
      backgroundColor: "#3ABD8F",
      width: '100%',
      height: 160,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      position: "absolute",
    },
    boxSearch: {
      width: "auto",
      height: 50,
      marginHorizontal: 16,
      backgroundColor: "#FFF",
      marginBottom: 18,
      marginTop: 25,
      borderRadius: 10,
      flexDirection: "row",
      padding: 10,
      paddingLeft: 20,
    },
    input: {
      marginLeft: 10,
      fontSize: 15,
    },
    desc:{
      marginLeft:10,
      width:'70%',
    },
    deskripsi: {
      fontSize: 12,
      textAlign: "justify",
      color: "#443C3C",
    },
    judul: {
      fontSize: 16,
      fontWeight: "bold",
    },
    tagInfo_detail:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:5,
    },
    img_tag:{
      width: 20,
      height:20,
    }
  });

  export default Home;