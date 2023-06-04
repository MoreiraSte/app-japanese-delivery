import styles from './styleCorrida'
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList,CheckBox,Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import {doc, deleteDoc, getDocs, collection } from 'firebase/firestore'
import { db } from '../config/firebase';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function Corrida({navigation}) {
    const [data, setData] = useState([]);
    const [cidade,setCidade] = useState('')
    const [cep,setCep] = useState('')

    useEffect(() => {
        async function carregar() {
            const querySnapshot = await getDocs(collection(db,'adress'));
            let list=[]
            querySnapshot.forEach((doc)=>{
                list.push({...doc.data(),id:doc.data().id, name: doc.data().name, image: doc.data().image})
            });
    
            setData(list)
        }
        carregar();
    },[])


    return(
        
        <View style={styles.container}>
            <View  style={styles.viewButton} >
        
           
            <TouchableOpacity 
                    title='Logout'
                    onPress={LogOut}
                    style={styles.buttonOut}
                >
                    <AntDesign name="logout" size={25} color="black" />
                </TouchableOpacity>
        </View>
            
        <View style={styles.scroll}>
            {data.map((item) => (
               <View style={styles.card}>
               
            
               <View style={styles.viewDetails}>

                   <View>
                       <Text>{item.cidade}</Text>
                   </View>
                   <View>
                       <Text>{item.cep}</Text>
                      
                   </View>
                   
               </View>
               <View style={styles.viewIcon}>
                   <TouchableOpacity
                    
                   >
                       
                       <FontAwesome5 name="map-marker-alt" size={24} color="black" />
                    </TouchableOpacity>
               </View>
           </View>
            ))}
            
        </View>
            
        </View>
    )
}