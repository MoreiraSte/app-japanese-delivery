import styles from './styleChoice'
import React from 'react';
import { View, Text, TouchableOpacity,Button,TextInput ,Link} from 'react-native';
import image_logo from '../images/icon_logo.png'
// import { auth,signOut ,getAuth } from '../config/firebase';
import { getAuth, signOut } from "firebase/auth";
import { AntDesign } from '@expo/vector-icons';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export default function Create({navigation}) {

    const auth = getAuth();

    const LogOut = () => {
        signOut(auth).then(() => {
            navigation.navigate('Login')
            Notify.failure('Você saiu da conta de Admin');

            
        }).catch((error) => {
            console.log('ERRO AO SAIR')
        });
    }

    return (
        <>
      <View style={styles.container}>
        <View>
        <TouchableOpacity 
                    title='Logout'
                    onPress={LogOut}
                    style={styles.buttonOut}
                >
                    <AntDesign name="logout" size={24} color="black" />
                </TouchableOpacity>
        </View>
      <View>
            <Text style={styles.texto1}>
                Japanese Delivery
            </Text>
            <img style={styles.img_logo} alt='logo' src={image_logo}/>
        </View>
        <View style={styles.btn}>
            
           

            <TouchableOpacity 
                    title='Create'
                    onPress={()=> navigation.navigate('Create')}
                    style={styles.button}
                >
                    <Text style={styles.txtButton}>Adicionar Item</Text>
                </TouchableOpacity>

            <TouchableOpacity 
                    title='Remove'
                    onPress={()=> navigation.navigate('Remove')}
                    style={styles.button}
                >
                    <Text style={styles.txtButton}>Remover Item</Text>
                </TouchableOpacity>


            
            </View>           
      </View>
      
      </>
      
    );
  }