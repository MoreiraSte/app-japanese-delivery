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
    },
    btn: {
        flex:0.5,
        
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    
    txtButton: {
        fontFamily: 'Verdana',
        fontSize: 30,
        color: '#DDD',
    },
    button:{
      width: '50vw',
      height:'7vh',
      fontSize: 20,
      borderRadius:20,
      borderColor:'black',
      backgroundColor:'#B31E23',
      
    }
})

export default styles