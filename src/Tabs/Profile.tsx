import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Profile({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Perfil</Text>
            <Button
                title="Perfil"    
            />
        </View>
    );
}