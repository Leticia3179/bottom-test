import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './styles';  

// Tela inicial do app
function HomeScreen() {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>Home</Text> 
    </View>
  );
}

// Tela de contatos
function ContatosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contatos</Text>
    </View>
  );
}

// Tela de ajuda
function AjudaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ajuda</Text>
    </View>
  );
}

// Tela sobre o app
function SobreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>sobre o App</Text>
    </View>
  );
}

// Cria o componente de navegação por abas
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // Envolve as telas para habilitar navegação
    <NavigationContainer>
      {/* Configura o navegador de abas */}
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          tabBarActiveTintColor: '#007AFF', 
          tabBarInactiveTintColor: 'gray',   
          tabBarStyle: styles.tabBar,         
          tabBarIcon: () => null,             
          tabBarLabelStyle: {                
            fontSize: 14,      
            lineHeight: 24,    
            textAlign: 'center',
            marginTop: -20                  
          },
        }}
      >
        {/* Definição das abas e suas telas */}
        <Tab.Screen name="🏠 Home" component={HomeScreen} />
        <Tab.Screen name="📇 Contatos" component={ContatosScreen} />
        <Tab.Screen name="❓ Ajuda" component={AjudaScreen} />
        <Tab.Screen name="ℹ️ Sobre" component={SobreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
