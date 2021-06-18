import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Form from './src/form'
import ProgressDashboard from './src/progressBar';

const App = () => {
  return (
    <SafeAreaView >
      <Form />
      <ProgressDashboard />
    </SafeAreaView>
  );
};


export default App;
