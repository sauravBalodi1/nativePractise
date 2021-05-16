/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Suspense, useState} from 'react';
import type {Node} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
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
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [state, setstate] = useState('This is my first line of code');
 
  const [arrayList, setarrayList] = useState([]);
  
  const pree = (input,setinput) => {
    // const uniqueNames = Array.from(new Set(arrayList));
    // setarrayList([...uniqueNames,input]);
    // setarrayList([...arrayList, input]);
     setarrayList(currentGoals=>[
       ...currentGoals,
       {id:Math.random().toString(),value:input}
     ])
    setinput('');
  };
const render=(itemd)=>{
  return <View style={styles.list}>
    <Text>
      {itemd.item.value}
    </Text>
  </View>

}
const removeHandler=goalid=>{
  const fil=arrayList.filter((goal)=>goal.id!=goalid)
  console.log("the array is: ",fil)
  setarrayList(fil)
}
  return (
    //   <View style={styles.container}>
    //  <Text>{state}</Text>
    //  <Button title="Click on me"onPress={()=>setstate("My state is changed")}/>
    //   </View>
    <View style={styles.screen}>
      <Text>This is my input field</Text>
      <GoalItem preefun={pree}/>
      <ScrollView>
        <View>
          {/* {arrayList.map((e,i)=>( <GoalInput id={i.id} ondelete={removeHandler} prop={e}/>))} */}
          
        
          <FlatList data={arrayList}
              renderItem={itemdata=><GoalInput id={itemdata.item.id} ondelete={removeHandler} prop={itemdata.item.value}/>}
              keyExtractor={(item,index)=>item.id}
          />
        </View>
      </ScrollView>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    width: '80%',
    padding: 30,
    borderBottomColor: 'black',
    borderLeftColor: 'pink',
    borderWidth: 2,
  },
  list: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default App;
