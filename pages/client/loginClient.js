import styles from '../client/styleLogin'
import React from 'react';
import { View, Text, TouchableOpacity,Button,TextInput ,Link} from 'react-native';
import image_logo from '../images/icon_logo.png'

export default function ClientLogin({navigation}) {
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
                    title='ClientRegister'
                    // onPress={}
                    style={styles.button}
                >
                    <Text style={styles.txtButton}>Sign In</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.divbtn}>
              <TouchableOpacity 
                      title='ClientRegister'
                      onPress={()=> navigation.navigate('ClientRegister')}
                      style={styles.buttonSignUp}
                  >
                      <Text style={styles.txtButton}>Sign Up</Text>
                  </TouchableOpacity>
              
            </View>
            </View>           
      </View>
      
      </>
      
    );
  }
  