import React,{useState} from 'react'
import { View, Text,StyleSheet,TextInput,Button,Modal } from 'react-native'

const GoalItem = (props) => {
    const fun = e => {
        setinput(e);
      };
     
    const [input, setinput] = useState('');
    return (
      <Modal visible={props.visible}animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="add content"
          style={styles.text}
          onChangeText={fun}
          value={input}
        />
        <View style={styles.but}>
          <View style={{width:"40%"}}>
        <Button title="add" onPress={props.preefun.bind(this,input,setinput)} />
          </View>
          <View style={{width:"40%"}}>
        <Button title="Cancel to add item" color="red"onPress={props.cancelf}/>
          </View>
      </View>
      </View>
      </Modal>
     
    )
}

const styles = StyleSheet.create({
    screen: {
      padding: 30,
    },
    inputContainer: {
     flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      width: '80%',
      padding: 10,
      borderBottomColor: 'black',
      borderLeftColor: 'pink',
      borderWidth: 2,
      marginBottom:10
    },
    list: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1,
    },
    but:{
      width:"60%",
      flexDirection:'row',
      justifyContent:'space-around'
    }
  });

export default GoalItem
