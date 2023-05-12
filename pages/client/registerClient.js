import styles from '../client/styleRegister'
import React from 'react';
import { View, Text, TouchableOpacity,Button,TextInput} from 'react-native';
import { Link } from "react-router-native";

import image_logo from '../images/icon_logo.png'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function ClientRegister({navigation}) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
      const user = userCredential.user;
   
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
     
    });
    return (
        <>
      <View  style={styles.container}>
      <View>
            <Text style={styles.texto1}>
                Japanese Delivery
            </Text>
            <img style={styles.img_logo} alt='logo' src={image_logo}/>
        </View>
        <View style={styles.btn}>
            <View >
                  <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="User"
                    keyboardType="text"
                  />
            </View>
            <View>
                  <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Password"
                    keyboardType="text"
                  /> 
             </View>
            <View >
            <TouchableOpacity 
                    title='Choice'
                    // onPress={}
                    style={styles.button}
                >
                    <Text style={styles.txtButton}>Sign Up</Text>
                </TouchableOpacity>

               
            </View>
            <View style={styles.divbtn}>
            <TouchableOpacity 
                    title='Client'
                    onPress={()=> navigation.navigate('Client')}
                    style={styles.buttonSignIn}
                >
                    <Text style={styles.txtButton}>Sign In</Text>
                </TouchableOpacity>

            </View>
            </View>           
      </View>
      
      </>
      
    );
  }
  