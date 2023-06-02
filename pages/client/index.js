import React,{useState,useEffect} from 'react';
import { View, Text, TouchableOpacity,Button, Image } from 'react-native';
import styles from '../client/style'
import { getAuth, signOut } from "firebase/auth";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


import { collection, getDocs,addDoc } from 'firebase/firestore'
import {db,storage} from '../config/firebase';
import { async } from '@firebase/util';

export default function Products({navigation}){
    const auth = getAuth();
    const [data, setData] = useState([]);

    const [name, setName] = useState("")
    const [price, setPrice] = useState()
    const [image, setImage] = useState('')

    function pageIr(){
        navigation.navigate('Confirm')
    }
    
    const LogOut = () => {
        signOut(auth).then(() => {
            navigation.navigate('Home')
           

            
        }).catch((error) => {
            console.log('ERRO AO SAIR')
        });
    }

    useEffect(() => {
        async function carregar() {
            const querySnapshot = await getDocs(collection(db,'item'));
            let list=[]
            querySnapshot.forEach((doc)=>{
                list.push({...doc.data(),id:doc.data().id, name: doc.data().name, image: doc.data().image})
            });
    
            setData(list)
        }
        carregar();
    },[])

    const repositorio = 'https://firebasestorage.googleapis.com/v0/b/japanesedelivery-f850b.appspot.com/o/images%2F'
    const media = '?alt=media'

    async function adicionar(name, price,image) {
        await addDoc(collection(db, 'cart'), {
          name: name,
          price: price,
          image: image
        })
    
        setName('')
        setPrice('')
        Notify.success('Item adicionado no carrinho');
    
        
      }
    
    return(
        
        <View style={styles.container}>
            <View  style={styles.viewButton} >
        
            <TouchableOpacity
                title='cartPage'
                style={styles.buttonOut}
                onPress={pageIr}
            >
                <FontAwesome5 name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>
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
                    onPress={()=>adicionar(
                        item.name, item.price, item.image
                    )}
                   >
                       
                       <FontAwesome5 name="cart-plus" size={24} color="black" />
                   </TouchableOpacity>
               </View>
           </View>
            ))}
            
        </View>
            
        </View>
    )
}