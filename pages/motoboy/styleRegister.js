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
    btn: {
        flex:0.8,
        
        alignItems: 'center',
        justifyContent: 'space-around',
        
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
      width: '50vw',
      height:'7vh',
      fontSize: 20,
      borderRadius:20,
      borderColor:'black',
      textAlign:'center',
    },
    link:{
        fontSize:20,
        fontFamily:'Times New Roman',
        color: 'black',
        textAlign:'center',
        marginTop:'10px'
    },
      img_logo:{
        width:'40vw',
        marginLeft:'20%'
    },
    buttonSignIn:{
       
            width: '40vw',
            height:'5vh',
            fontSize: 15,
            borderRadius:20,
            borderColor:'white',
            backgroundColor:'black',
            color:'white'
        
    },
    divbtn:{
        marginTop:'5px',
        alignItems: 'center',

    }
   

})

export default styles