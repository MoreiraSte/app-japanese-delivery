import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#B31E23',
        alignItems: 'center',
        justifyContent: 'space-around',
        minHeight:'100%'
       

    },
    txt:{
        fontSize:30,
        fontFamily:'Times New Roman',
        color:'white'
        
    },
    
    buttonOut:{
        width:40
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
      borderColor:'#B31E23',
      backgroundColor:'black',
      
    },

    buttonDiv:{
    width: '50vw',
      height:'7vh',
      fontSize: 20,
      borderRadius:20,
      borderColor:'#B31E23',
      backgroundColor:'black',
      
    },
    input:{
        width: '40vw',
        height:'5vh',
        fontSize: 20,
        borderRadius:20,
        borderColor:'black',
        textAlign:'center',
        backgroundColor:'white',
        color: 'black'
    },
    viewbtn:{
        flexDirection:'row',
        display:'flex',
       
    }
   
})

export default styles