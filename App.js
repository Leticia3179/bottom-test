import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Telas podem ficar fora do componente principal
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

function ContatosScreen() {
  return (
    <View style={styles.container}>
      <Text>Contatos</Text>
    </View>
  );
}

function AjudaScreen() {
  return (
    <View style={styles.container}>
      <Text>Ajuda</Text>
    </View>
  );
}

function SobreScreen() {
  return (
    <View style={styles.container}>
      <Text>sobre a App</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Contatos" component={ContatosScreen} />
        <Tab.Screen name="Ajuda" component={AjudaScreen} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
