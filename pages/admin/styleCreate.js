import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FFA696',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    texto1:{
        fontSize:40,
        fontFamily:'Times New Roman'
    },
   
    
    txtButton: {
        fontFamily:'Times New Roman',
        fontSize: 25,
        color: '#DDD',
        textAlign:'center',
        marginTop:'15px'
    },
    button:{
      width: '50vw',
      height:'7vh',
      fontSize: 20,
      borderRadius:20,
      borderColor:'black',
      backgroundColor:'#B31E23',
      
    },
    input:{
        width: '70vw',
        height:'7vh',
        fontSize: 20,
        borderRadius:5,
        borderColor:'black',
        textAlign:'center',
      },

   

})

export default styles