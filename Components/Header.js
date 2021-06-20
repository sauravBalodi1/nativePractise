import React from 'react'

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}> {props.title}</Text>
           
        </View>
    )
}
const styles=StyleSheet.create({
   header:{
       height:90,
       width:"100%",
    paddingTop:36,
    backgroundColor:'#f73',
    alignItems:'center',
    justifyContent:'center'
   },
   headerTitle:{
       color:'black',
       fontSize:18
   }
});
