import styles from '../client/styleRegister'
import React from 'react';
import { View, Text, TouchableOpacity,Button,TextInput} from 'react-native';
import { Link } from "react-router-native";

import image_logo from '../images/icon_logo.png'

export default function ClientRegister({navigation}) {
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
                    title='Choice'
                    onPress={()=> navigation.navigate('Choice')}
                    style={styles.button}
                >
                    <Text style={styles.txtButton}>Sign Up</Text>
                </TouchableOpacity>
                <Link to="/Client">
                    <Text>Visit your profile</Text>
                </Link>
            </View>
            </View>           
      </View>
      
      </>
      
    );
  }
  