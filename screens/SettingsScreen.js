import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import settingsStyles from '../styles/settingsStyles';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const showAlert = (setting) => {
    Alert.alert('Configuración', `Has seleccionado: ${setting}`);
  };

  return (
    <View style={settingsStyles.container}>
      <Text style={settingsStyles.title}>Configuraciones</Text>
      
      <TouchableOpacity style={settingsStyles.option} onPress={() => showAlert('Cambiar Tema')}>
        <MaterialIcons name="color-lens" size={30} color="#FF9800" />
        <Text style={settingsStyles.optionText}>Cambiar Tema</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={settingsStyles.option} onPress={() => showAlert('Cambiar Idioma')}>
        <MaterialIcons name="language" size={30} color="#03A9F4" />
        <Text style={settingsStyles.optionText}>Cambiar Idioma</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={settingsStyles.option} onPress={() => showAlert('Notificaciones')}>
        <MaterialIcons name="notifications" size={30} color="#4CAF50" />
        <Text style={settingsStyles.optionText}>Notificaciones</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={settingsStyles.backButton} onPress={() => navigation.goBack()}>
        <Text style={settingsStyles.backButtonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;