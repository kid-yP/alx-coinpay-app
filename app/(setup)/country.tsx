// app/(setup)/country.tsx
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function CountryScreen() {
    const [country, setCountry] = useState('');
    const router = useRouter();

    const isValid = country !== '';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Country of residence</Text>
            <Text style={styles.subtitle}>This info needs to be accurate with your ID document.</Text>

            <View style={styles.dropdown}>
                <Picker
                    selectedValue={country}
                    onValueChange={(value) => setCountry(value)}
                    style={{ color: '#fff' }}
                    dropdownIconColor="#fff"
                    mode="dropdown"
                >
                    <Picker.Item label="Select your country" value="" color="#999" />
                    <Picker.Item label="🇧🇩 Bangladesh" value="Bangladesh" />
                    <Picker.Item label="🇺🇸 United States" value="United States" />
                    <Picker.Item label="🇸🇬 Singapore" value="Singapore" />
                    <Picker.Item label="🇮🇳 India" value="India" />
                </Picker>
            </View>

            <TouchableOpacity
                style={[styles.button, !isValid && styles.buttonDisabled]}
                onPress={() => router.push('/personal-info')}
                disabled={!isValid}
            >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        color: '#aaa',
        marginBottom: 20,
    },
    dropdown: {
        backgroundColor: '#1e1e1e',
        borderRadius: 8,
        marginBottom: 40,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        backgroundColor: '#3B82F6',
        padding: 16,
        borderRadius: 999,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#333',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
