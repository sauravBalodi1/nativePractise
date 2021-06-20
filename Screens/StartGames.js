import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function StartGames(props) {
    return (
        <View style={styles.screen}>
          <Text> The game screen</Text> 
        </View>
    )
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:"center",
    
    }
})