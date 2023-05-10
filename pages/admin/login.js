import styles from '../admin/style'
import React, {useState,useEffect} from 'react';
import { View, Text, TouchableOpacity,Button,TextInput ,Link} from 'react-native';
import image_logo from '../images/icon_logo.png'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { auth,logInWithEmailAndPassword,signOut  } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigation } from '@react-navigation/native';

export default function Login({navigation}) {
  // const database = firebase.firestore();

//   const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[user,loading] = useAuthState(auth)
  const[errorLogin,setErrorLogin] = useState('')

  // const navigate = useNavigation()

  // quando a pagina recarregar, se estiver em loading vai retornar o que tem de acordo com a configuarção do firebase no arquivo js, se 
  // reconhecer o usuario, irá navegar até a pagina create.
  useEffect(() => {
      if(loading){
          return;
      }
      if(user) {
        console.log(user)
        if (user.uid === '2UVpAWuuCEPKTqBstxcdHlRwSEz1'){
          navigation.navigate('Choice')
        }
        else{
          navigation.navigate('Home')
        }
        
      }
  },[user,loading])
   // criando uma constante para guardar a função que possui o registro que é o email e password
  const loginFire = () => {
      console.log("chamou a função")
      logInWithEmailAndPassword(email,password).then((res) => {
        console.log(res)
      });
  }

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
                    onChangeText={(text) => setPassword(text)}
                    value={password}
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
            {email === "" || password === ""
            ?
            <TouchableOpacity 
            
            onPress={loginFire}
            style={styles.button}
            disabled={true}
        >
            <Text style={styles.txtButton}>Sign In</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity 
            
            onPress={loginFire}
            style={styles.button}
            // disabled={true}
        >
            <Text style={styles.txtButton}>Sign In</Text>
          </TouchableOpacity>
          }

            </View>           
      </View>
      
      </>
      
    );
  }
  