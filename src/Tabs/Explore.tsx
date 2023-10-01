import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Explore({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Explorar</Text>
            <Button
                title="Explorar"    
            />
        </View>
    );
}