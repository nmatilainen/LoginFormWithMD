import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import MainAppbar from '../components/MainAppbar';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const validateAndSubmit = () => {
    const newErrors = {};

    // Validate username
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit the form data
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <MainAppbar title="Login" />
        <View style={styles.formContainer}>
        <TextInput
  label="Username"
  placeholder="Username"
  value={formData.username}
  onChangeText={(text) => setFormData({ ...formData, username: text })}
  error={errors.username}
  keyboardType="email-address"
  style={styles.input}
/>
{errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

<TextInput
  label="Password"
  placeholder="Password"
  value={formData.password}
  onChangeText={(text) => setFormData({ ...formData, password: text })}
  error={errors.password}
  secureTextEntry
  style={styles.input}
/>
{errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
          <Button title="Submit" onPress={validateAndSubmit} />
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    formContainer: {
      padding: 16,
    },
    input: {
      marginVertical: 8,
      backgroundColor: 'white', // Background color
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc', // Border color
      color: 'black', // Text color
    },
    errorText: {
      color: 'red',
      marginBottom: 8,
    },
  });
  

export default Login;
