/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App= () => {
  
  const [state, setstate] = useState("This is my first line of code")
return (
  <View style={styles.container}>
 <Text>{state}</Text>
 <Button title="Click on me"onPress={()=>setstate("My state is changed")}/>
  </View>
 
)
}
 
const styles=StyleSheet.create({
  container:{
    flex:1,
    color:"black",
    backgroundColor:"pink",
    alignItems:"center",
    justifyContent:"center"
  }
})

export default App;
