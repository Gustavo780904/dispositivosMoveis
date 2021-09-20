import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

const Index = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity>
                <Button
                    onPress={() => navigation.navigate('FormularioCep')}
                    title='Busca por CEP'
                />

                <Button onPress={'FormularioRua'}/>

            </TouchableOpacity>
        </View>
    )
}
export default Index;