import styles from '../admin/style'
import React from 'react';
import { View, Text, TouchableOpacity,Button,TextInput ,Link} from 'react-native';
import image_logo from '../images/icon_logo.png'

export default function Login({navigation}) {
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
                    placeholder="User Admin"
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
                    <Text style={styles.txtButton}>Sign In</Text>
                </TouchableOpacity>
              {/* <a href='#' style={styles.link}>Sign UP</a> */}
            </View>
            </View>           
      </View>
      
      </>
      
    );
  }
  