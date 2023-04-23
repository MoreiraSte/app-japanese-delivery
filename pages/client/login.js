import styles from '../client/style'
import React from 'react';
import { View, Text, TouchableOpacity,Button } from 'react-native';

export default function Login({navigation}) {
    return (
        <>
      <View style={styles.container}>
        <Text>Welcome</Text>
      </View>
      <View >
      <TouchableOpacity 
                    title='Login'
                    onPress={()=> navigation.navigate('Home')}
                    style={styles.button}
                >
                    <Text >Login</Text>
                </TouchableOpacity>
                        
      </View>
      </>
      
    );
  }
  