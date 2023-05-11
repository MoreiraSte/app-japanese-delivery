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
    img_logo:{
        width:'40vw',
        marginLeft:'20%'
    },
    buttonOut:{
        position: 'absolute',
        top: 0,
        marginLeft:'40vw',
        width:20
    }

   

})

export default styles