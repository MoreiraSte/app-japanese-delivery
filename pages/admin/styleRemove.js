import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FFA696',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    texto1:{
        fontSize:30,
        fontFamily:'Times New Roman'
    },
   
    
    txtButton: {
        fontFamily:'Times New Roman',
        fontSize: 25,
        color: 'black',
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
      pageDelete:{
        width:300,
        flexDirection:'row',
        marginTop:30,
        height:'80%'
        
    },
    deleteItem:{
        justifyContent:'center',
        paddingLeft:15,
    },

   

})

export default styles