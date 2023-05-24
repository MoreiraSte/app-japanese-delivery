import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FFA696',
        alignItems: 'center',
        justifyContent: 'space-around',
       

    },
    texto1:{
        fontSize:40,
        fontFamily:'Times New Roman'
    },
    
    buttonOut:{
        width:40
    },

    viewButton:{
        marginLeft:'70vw',
        position: 'absolute',
        top: 0,
        marginTop:'20px'
    },
    scroll:{
        backgroundColor:'#B31E23',
        width:'90vw',
        height:'80vh',
        marginTop:'15px'

        
    }
})

export default styles