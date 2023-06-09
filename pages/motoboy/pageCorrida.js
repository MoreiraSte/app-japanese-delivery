import styles from './styleCorrida'
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList,CheckBox,Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import {doc, deleteDoc, getDocs, collection } from 'firebase/firestore'
import { getAuth, signOut } from "firebase/auth";
import { AntDesign } from '@expo/vector-icons';

import { db } from '../config/firebase';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function Corrida({navigation}) {
    const auth = getAuth();

    const [data, setData] = useState([]);
    const [cidade,setCidade] = useState('')
    const [cep,setCep] = useState('')

    const LogOut = () => {
        signOut(auth).then(() => {
            navigation.navigate('Home')
           

            
        }).catch((error) => {
            console.log('ERRO AO SAIR')
        });
    }

    useEffect(() => {
        async function carregar() {
            const querySnapshot = await getDocs(collection(db,'Adress'));
            let list=[]
            querySnapshot.forEach((doc)=>{
                list.push({...doc.data(),id:doc.data().id, cidade: doc.data().cidade, cep: doc.data().cep})
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
                       <Text style={styles.texto1}>{item.cidade}</Text>
                   </View>
                   <View>
                       <Text style={styles.texto1}>{item.cep}</Text>
                      
                   </View>
                   
               </View>
               <View style={styles.viewIcon}>
                   <TouchableOpacity
                      style={styles.button}
                   >
                       
                       <Text  style={{color:'white',marginTop:'5px',marginLeft:'10px'}}>Entregar</Text>
                    </TouchableOpacity>
               </View>
           </View>
            ))}
            
        </View>
            
        </View>
    )
}