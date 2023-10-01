import React from 'react';
import { View, Text, Button } from 'react-native';

export default function MainScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Main Screen</Text>
            <Button
                title="Main screen"    
            />
        </View>
    );
}