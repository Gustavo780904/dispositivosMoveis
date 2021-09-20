import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './components/Index';
import FormularioCep from './components/FormularioCep';
import FormularioRua from './components/FormularioRua';

// const Stack = createNativeStackNavigator();

const App = () => {

  return (
    // <NavigationContainer>
    {/* <StatusBar style='auto' /> */ }
    
    <View>
    <Text > teste</Text >
    </View>

    {/* <Stack.Navigator>
        <Stack.Screen name="Index" component={Index} options={{ title: 'Busca por CEP' }} />
        <Stack.Screen name="FormularioRua" component={FormularioRua} options={{ title: 'Resultado por Rua' }} />
        <Stack.Screen name="FormularioCep" component={FormularioCep} options={{ title: 'Resultado por CEP' }} />
      </Stack.Navigator>
    </NavigationContainer> */}
  )
}

export default App;