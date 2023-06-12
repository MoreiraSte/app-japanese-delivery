import {useEffect, useState, useRef} from 'react';
import {View} from 'react-native';
import MapView ,{Marker} from 'react-native-maps';
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    LocationObject,
    watchPositionAsync,
    LocationAccuracy,
} from 'expo-location';

import {styles} from './stylesMapsRoutes';

export default function Map(){
    const[location,setLocation] = useState <LocationObject | null>(null);

    const mapRef = useRef<MapView>(null);

    async function requestForegroundPermissions(){
        const {granted} = await requestForegroundPermissionsAsync();

        if (granted){
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);

            console.log("LOCALIZAÇÃO ATUAL =>",currentPosition);
        }
    }
    
    useEffect(()=>{
        requestForegroundPermissions();
    },[]);

    useEffect(()=>{
        watchPositionAsync({
            accuracy:LocationAccuracy.Highest,
            timeInterval:1000,
            distanceInterval:1
        },(response) => {
            console.log("Nova localização! =>",response);
            setLocation(response);
            mapRef.current?.animateCamera({
                pitch: 70,
                center: response.coords
            })
        })
    },[])

    return(
        <View style={styles.container}>
            {
                location &&
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                    latitude:location.coords.latitude,
                    longitude:location.coords.longitude,
                    latitudeDelta:0.005,
                    longitudeDelta:0.005
                }}
            >
                <Marker
                    coordinate={{
                        latitude:location.coords.latitude,
                        longitude:location.coords.longitude,
                    }}
                />
            </MapView>
            }
        </View>
    );
}