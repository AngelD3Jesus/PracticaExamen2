import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import homeStyles from '../styles/homeStyles';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.title}>Bienvenido a mi aplicación</Text>
      
      <TouchableOpacity style={homeStyles.button} onPress={() => navigation.navigate('Savings')}>
        <Text style={homeStyles.buttonText}>Ir a Ahorros</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={homeStyles.button} onPress={() => navigation.navigate('Profile')}>
        <Text style={homeStyles.buttonText}>Ver Perfil</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={homeStyles.button} onPress={() => navigation.navigate('Settings')}>
        <Text style={homeStyles.buttonText}>Configuraciones</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
