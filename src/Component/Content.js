import { View, StyleSheet, Keyboard, Alert} from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import React from 'react'

export default function Content() {
    const [showPassword, setShowPassword] = React.useState(false);
  return (
    <View style={style.contentContainer}> 
     <TextInput
     placeholder='Email'
     label='Email'
     style = {style.textInputContainer}
     />
     <TextInput 
     placeholder='Password'
     label='Password'
     style = {style.textInputContainer}
     secureTextEntry = {!showPassword}
     right={
        <TextInput.Icon
        icon={showPassword ? "eye" : "eye-off"}
        onPress={() => {
            Keyboard.dismiss;
            setShowPassword(!showPassword);
        }}
        />
     }
     />
     <View style={style.buttonLoginSubmit}>
        <Button icon="login" mode='contained' onPress={() => Alert.alert('You have pressed LogIn!')}>
            Login
        </Button>
     </View>
     <View style={style.buttonSignUpSubmit}>
     <Button icon="account-plus" mode='contained-tonal' onPress={() => Alert.alert('You have pressed SignUp!')}>
            Signup
        </Button>
     </View>
    </View>
  )

}

const style = StyleSheet.create({
    
    contentContainer : {
        flex: 1, 
        padding: 10,
        alignItems: 'center'
    },
    textInputContainer: {
        marginTop:5,
        width: 300,
        maxWidth: '80%',
    },
    buttonLoginSubmit: {
        marginTop: 20,
        width: "100%",
        paddingHorizontal: 20
    },
    buttonSignUpSubmit: {
        marginTop: 10,
        width: "100%",
        paddingHorizontal: 20
    },
    


});