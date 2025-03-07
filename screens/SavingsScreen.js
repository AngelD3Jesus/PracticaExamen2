import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import savingsStyles from '../styles/savingsStyles';
import { useNavigation } from '@react-navigation/native';

const SavingsScreen = () => {
  const [savings, setSavings] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={savingsStyles.container}>
      <Text style={savingsStyles.title}>Ahorros</Text>
      <Text style={savingsStyles.savingsText}>${savings}</Text>
      
      <View style={savingsStyles.buttonContainer}>
        <TouchableOpacity style={savingsStyles.button} onPress={() => setSavings(savings + 10)}>
          <MaterialIcons name="add-circle" size={50} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity style={savingsStyles.button} onPress={() => setSavings(0)}>
          <MaterialIcons name="refresh" size={50} color="#F44336" />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={savingsStyles.backButton} onPress={() => navigation.goBack()}>
        <Text style={savingsStyles.backButtonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SavingsScreen;

