import styles from './styleCreate'
import React from 'react';
import { View, Text, TouchableOpacity,Button,TextInput ,Link} from 'react-native';

export default function Create({navigation}) {
    return (
        <>
      
      
        <View style={styles.container}>

            <View >
                  <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    type='text'
                    placeholder="Product Name"
                    keyboardType="text"
                  />
            </View>
            <View >
                  <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    type='numeric'
                    placeholder="Product Price"
                    keyboardType="numeric"
                  />
            </View>
            <View >
                  <input
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    type='file'
                    placeholder="Product Image"
                    
                  />
            </View>

            
            <TouchableOpacity 
                    title='Login'
                    onPress={()=> navigation.navigate('Login')}
                    style={styles.button}
                >
                    <Text style={styles.txtButton}>Create</Text>
                </TouchableOpacity>

            
            </View>           
    
      
      </>
      
    );
  }