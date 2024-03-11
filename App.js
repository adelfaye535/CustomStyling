import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from './src/Component/Header';
import Content from './src/Component/Content';

import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import Colors from './src/config/theme/Colors';

const theme = {
  ...DefaultTheme,
  colors: Colors.colors,
  mode: "exact"
}

export default function App() {
  return (
   <PaperProvider theme={theme}>
     <SafeAreaProvider style={styles.screen}>
      <Header title="Northern Bukidnon State College"/>
      <Content/>
      <StatusBar style="auto" />
    </SafeAreaProvider>
   </PaperProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  
  }
});
