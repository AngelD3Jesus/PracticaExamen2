import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import profileStyles from '../styles/profileStyles';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.card}>
        {/* Cambia la imagen aquí */}
        <Image source={require('../assets/profile.jpg')} style={profileStyles.image} />
        {/* Cambia el nombre aquí */}
        <Text style={profileStyles.name}>Angel de Jesus Avitia</Text>
        <Text style={profileStyles.info}>Correo: AngelD3Jesus@email.com</Text>
      </View>
      
      <TouchableOpacity style={profileStyles.button} onPress={() => navigation.goBack()}>
        <Text style={profileStyles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
