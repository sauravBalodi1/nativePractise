import React,{useState} from 'react'
import { View, Text,StyleSheet,TextInput,Button } from 'react-native'

const GoalItem = (props) => {
    const fun = e => {
        setinput(e);
      };
    const [input, setinput] = useState('');
    return (
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="add content"
          style={styles.text}
          onChangeText={fun}
          value={input}
        />
        <Button title="add" onPress={props.preefun.bind(this,input,setinput)} />
      </View>
    )
}

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

export default GoalItem
