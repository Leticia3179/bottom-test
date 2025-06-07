import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './styles';  // importando styles separado

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

function ContatosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contatos</Text>
    </View>
  );
}

function AjudaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ajuda</Text>
    </View>
  );
}

function SobreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>sobre a App</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Contatos" component={ContatosScreen} />
        <Tab.Screen name="Ajuda" component={AjudaScreen} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
