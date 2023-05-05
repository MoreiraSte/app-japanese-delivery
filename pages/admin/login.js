import styles from '../admin/style'
import React, {useState,useEffect} from 'react';
import { View, Text, TouchableOpacity,Button,TextInput ,Link} from 'react-native';
import image_logo from '../images/icon_logo.png'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


import firebase from "../config/firebase.js"

export default function Login({navigation}) {
  const database = firebase.firestore();

  const [email,setEmail] = useState("")
  const [senha,setSenha] = useState("")
  const [errorLogin, setErrorLogin] = useState("")

  const loginFirebase = () =>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        let user = userCredential.user;
        
        if (email == 'admin@gmail.com' && senha == 'admin123'){
          this.props.navigation.navigate('Choice')
        }

   
      })
      .catch((error) => {
        setErrorLogin(true)
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  }

  useEffect(()=>{

  },[]);
    return (
        <>
      <View style={styles.container}>
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
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="Your Email"
                    keyboardType="text"
                    type = 'text'
                  />
            </View>
            <View>
                  <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                    placeholder="Password"
                    keyboardType="text"
                    type = 'text'
                  /> 
             </View>
             {errorLogin === true
             ?
             <View style={styles.contentAlert}>
              <MaterialCommunityIcons 
                name = 'alert-circle'
                size={24}
                color="#bdbdbd"
              />
              <Text style={styles.warningAlert}>invalid e-mail or password</Text>
             </View>
             :
             <View/>
            }
            {email === "" || senha === ""
            ?
            <TouchableOpacity 
            
            onPress={loginFirebase}
            style={styles.button}
            disabled={true}
        >
            <Text style={styles.txtButton}>Sign In</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity 
            
            onPress={loginFirebase}
            style={styles.button}
            disabled={true}
        >
            <Text style={styles.txtButton}>Sign In</Text>
          </TouchableOpacity>
          }

            </View>           
      </View>
      
      </>
      
    );
  }
  