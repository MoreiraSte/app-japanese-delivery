import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FFA696',
        alignItems: 'center',
        justifyContent: 'space-around',
       

    },
    texto1:{
        fontSize:30,
        fontFamily:'Times New Roman'
    },
    
    buttonOut:{
        width:40
    },

    viewButton:{
        marginLeft:'70vw',
        flexDirection:'row',
        top: 0,
        marginTop:'40px',
        display:'flex'
    },
    scroll:{
        backgroundColor:'#B31E23',
        width:'90vw',
        height:'80vh',
        marginTop:'15px'

        
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
    button:{
        backgroundColor:'black',
        color:'white',
        width:'20vw',
        height:'4vh',
        borderRadius:10
    }
   
})

export default styles