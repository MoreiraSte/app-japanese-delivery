import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './pages/home/index'
import Login from './pages/admin/login'
import Choice from './pages/admin/choice'
import Create from './pages/admin/create'
import Client from './pages/client/loginClient'
import ClientRegister from './pages/client/registerClient'
import Products from './pages/client/index'
import Remove from './pages/admin/remove'
import Confirm from './pages/client/pageConfirm'
import Adress from './pages/client/pageAdress'
import Pagar from './pages/client/pagePagar'
import MotoboyRegister from './pages/motoboy/pageRegister'
import MotoboyLogin from './pages/motoboy/pageLogin'
import MotoboyCorrida from './pages/motoboy/pageCorrida'
import MotoboyMaps from './pages/motoboy/mapsRoutes'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Choice" component={Choice} options={{headerShown:false}}/>
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Client" component={Client} />
        <Stack.Screen name="ClientRegister" component={ClientRegister} options={{headerShown:false}} />
        <Stack.Screen name="Products" component={Products}  options={{headerShown:false}}  />
        <Stack.Screen name="Remove" component={Remove}    />
        <Stack.Screen name="Confirm" component={Confirm}    />
        <Stack.Screen name="Adress" component={Adress}  options={{headerShown:false}} />
        <Stack.Screen name="Pagar" component={Pagar}   options={{headerShown:false}}/>
        <Stack.Screen name="MotoboyLogin" component={MotoboyLogin} options={{headerShown:false}}/>
        <Stack.Screen name="MotoboyRegister" component={MotoboyRegister} />
        <Stack.Screen name="MotoboyCorrida" component={MotoboyCorrida} options={{headerShown:false}} />
        <Stack.Screen name="MotoboyMaps" component={MotoboyMaps} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


