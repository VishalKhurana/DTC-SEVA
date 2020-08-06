
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Firebase_Routes from '../Components/firebase/firebase_routes';


export default function qrCode(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async({ type, data }) => {
    setScanned(true);
    var stringify = JSON.parse(data);
  const Route=stringify.Route.toString();
  const Driver_Name=stringify.Driver_Name;
  const Vehicle_Number=stringify.Vehicle_Number;
  const Conductor_Name=stringify.Conductor_Name;


  var ref=Firebase_Routes.database().ref('/'+Route);
  
  var keys=[' '];
  await ref.once('value').then(snapshot => {
   //var data1=snapshot.val();
   //var key;
   snapshot.forEach((function (child) {
     //console.log(typeof child.key);
     keys.push(child.key);
     //console.log(keys.length);
   }));
    // snapshot.val() is the dictionary with all your keys/values from the '/store' path
   
  })
 // console.log(keys);
 if(keys.length<3)
 {
   alert('wrong QR');
   return;
 }
 console.log(Route);
  props.navigation.navigate('src',{keys:keys,Driver_Name:Driver_Name,Vehicle_Number:Vehicle_Number,Conductor_Name:Conductor_Name,Route:Route});
  
  // var main_data=JSON.parse(data1);
  // console.log(main_data);
  //console.log(Driver_Name+Vehicle_Number+Conductor_Name)
    //alert(stringify.Route);
    //console.log(keys.length);

     //alert(`Bar code with type ${type} and data ${data.Route.toString()} has been scanned!`);
    //props.navigation.navigate('Go');
    //console.log(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        <Text style={{alignSelf:'center'}}>Scan the QR code</Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{height:'75%',width:'75%',alignSelf:'center',marginBottom:'10%'}}
      />

      {scanned && (
        <Button style={{backgroundColor:'black'}} title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
