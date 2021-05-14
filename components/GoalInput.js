import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'

const GoalInput = ({prop,ondelete}) => {
    return (
      <TouchableHighlight  onPress={ondelete}>
        <View style={styles.list}>
            <Text>{prop}</Text>
        </View>
        </TouchableHighlight>
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
export default GoalInput
