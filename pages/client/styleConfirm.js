import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FFA696',
        alignItems: 'center',
        justifyContent: 'space-around',
       

    },
    txt:{
        fontSize:30,
        fontFamily:'Times New Roman'
    },
    
    buttonOut:{
        width:40
    },

    viewButton:{
        
        flexDirection:'row',
        display:'flex',
        justifyContent:'space-between'
    },
    scroll:{
        backgroundColor:'#B31E23',
        width:'90vw',
        height:'60vh',
       

        
    },
    card:{
        height:'20%',
        width:'90%',
        backgroundColor:'white',
        borderRadius:20,
        marginTop:'15px',
        marginLeft:'20px',
        display:'flex',
        justifyContent:'space-around',
        flexDirection: 'row',
        alignItems:'center'

    },
    foto:{
        justifyContent:'center',
        borderRadius:10,
        width:70,
        height:70,
    },
     
    txtButton: {
        fontFamily:'Times New Roman',
        fontSize: 15,
        color: '#DDD',
        textAlign:'center',
        marginTop:'15px'
    },
    button:{
      width: '40vw',
      height:'6vh',
      fontSize: 20,
      borderRadius:20,
      borderColor:'#B31E23',
      backgroundColor:'black',
      
    },
    viewConfirm:{
        backgroundColor:'white',
        width:'90%',
        // height:'20%',
        alignItems:'center',
        justifyContent:'center',
        flex:0.8
    },
    buttonDiv:{
    width: '40vw',
      height:'6vh',
      fontSize: 20,
      borderRadius:20,
      borderColor:'#B31E23',
      backgroundColor:'black',
      marginTop:'12px'
    }
   
})

export default styles