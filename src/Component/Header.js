import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Nbsclogo from '../../assets/Nbsclogo.png'
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Header = props => {

  return (
    <SafeAreaProvider>
    <View style={styles.header}>
      <Image source={Nbsclogo} style={styles.logoHeader}/>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
    </SafeAreaProvider>
  )

};
const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 120,
        paddingTop: 36,
        backgroundColor: "#FBE7C6",
        alignItems: 'center',
        justifyContent: 'center'

    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    },
    logoHeader: {
      width: 50,
      height: 50
    }
})

export default Header