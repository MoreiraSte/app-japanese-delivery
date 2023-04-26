import styles from '../admin/style'
import React from 'react';
import { View, Text, TouchableOpacity,Button,TextInput ,Link} from 'react-native';

export default function Login({navigation}) {
    return (
        <>
      <View style={styles.container}>
      <View>
            <Text style={styles.texto1}>
                Japanese Delivery
            </Text>
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
              <a href='#' style={styles.link}>Sign UP</a>
            </View>
            </View>           
      </View>
      
      </>
      
    );
  }
  