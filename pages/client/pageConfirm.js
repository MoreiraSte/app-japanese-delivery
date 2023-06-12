import React,{useState,useEffect} from 'react';
import { View, Text, TouchableOpacity,Button, Image} from 'react-native';
import styles from '../client/styleConfirm'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { collection, getDocs,doc, deleteDoc} from 'firebase/firestore'
import {db} from '../config/firebase';

export default function PageConfirm({navigation}){
    const [data, setData] = useState([]);

    const [page, setPage] = useState([])
    const [removido,setRemovido] = useState(0)

    const [total,setTotal] = useState(0)

    function deleteItem(id) {
        console.log(id)
        deleteDoc(doc(db, 'cart', id));
        setRemovido(removido+1)
    }

    function adressIr(){
        navigation.navigate('Adress')
    }
    function paymentIr(){
        navigation.navigate('Pagar')
    }
    function maps(){
        navigation.navigate('MotoboyMaps')

    }

    useEffect(() => {
        async function carregar() {
            const querySnapshot = await getDocs(collection(db,'cart'));
            let list=[]
            let valor = 0
            querySnapshot.forEach((doc)=>{
                valor += parseFloat(doc.data().price);
                console.log(doc._key.path.segments[6])
                list.push({...doc.data(),id:doc._key.path.segments[6], name: doc.data().name, image: doc.data().image})
            });
            setTotal(valor)
            setData(list)
        }
        carregar();
    },[removido])

   


    const repositorio = 'https://firebasestorage.googleapis.com/v0/b/japanesedelivery-f850b.appspot.com/o/images%2F'
    const media = '?alt=media'
    
    return(
        
        <View style={styles.container}>
    
    <View style={styles.scroll}>
            {data.map((item) => (
               <View style={styles.card}>
               
               <View style={styles.viewItem}>  
                    <Image style={styles.foto} source={repositorio + item.image + media} ></Image>
               </View>
               <View style={styles.viewDetails}>

                   <View>
                       <Text>{item.name}</Text>
                   </View>
                   <View>
                       <Text>R$ {item.price}</Text>
                      
                   </View>
                   
               </View>
               <View style={styles.viewIcon}>
                   <TouchableOpacity
                    onPress={() => { deleteItem(item.id) }}
                   >
                       
                       <Entypo name="trash" size={24} color="black" />
                   </TouchableOpacity>
               </View>
           </View>
            ))}
            
        </View>
            
            <View style={styles.viewConfirm}>

                <Text style={styles.txt}>Total: R$ {total} </Text>

                <View style={styles.viewButton}>
                <TouchableOpacity
                 style={styles.button}
                 onPress={adressIr}
                >
                    <Text style={styles.txtButton}>Add Adress</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 style={styles.button}
                 onPress={paymentIr}
                 
                >
                    <Text style={styles.txtButton}>Add Payment</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity
                 style={styles.buttonDiv}
                 onPress={maps}
                >
                    <Text style={styles.txtButton}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
            
        
    )
}