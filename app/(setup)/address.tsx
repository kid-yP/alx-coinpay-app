// app/(setup)/address.tsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';


export default function AddressScreen() {
    const [line, setLine] = useState('');
    const [city, setCity] = useState('');
    const [postcode, setPostcode] = useState('');
    const router = useRouter();

    const isValid = line && city && postcode;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home address</Text>
            <Text style={styles.subtitle}>This info needs to be accurate with your ID document.</Text>

            <TextInput
                placeholder="Address Line"
                placeholderTextColor="#aaa"
                style={styles.input}
                value={line}
                onChangeText={setLine}
            />
            <TextInput
                placeholder="City, State"
                placeholderTextColor="#aaa"
                style={styles.input}
                value={city}
                onChangeText={setCity}
            />
            <TextInput
                placeholder="Ex: 00000"
                placeholderTextColor="#aaa"
                style={styles.input}
                value={postcode}
                onChangeText={setPostcode}
                keyboardType="numeric"
            />

            <TouchableOpacity
                style={[styles.button, !isValid && styles.buttonDisabled]}
                onPress={() => router.push('/scan-id')}
                disabled={!isValid}
            >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    ...require('./personal-info').defaultStyles, // reuse same layout
});
