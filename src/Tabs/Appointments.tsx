import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Appointment({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>COnsultas</Text>
            <Button
                title="Consultas"    
            />
        </View>
    );
}