// app/(screens)/signup.tsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function SignupScreen() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create an Account</Text>

            <TextInput
                placeholder="Phone"
                placeholderTextColor="#aaa"
                keyboardType="phone-pad"
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
            />

            <TextInput
                placeholder="Password"
                placeholderTextColor="#aaa"
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('/confirm-number')}
            >
                <Text style={styles.buttonText}>Sign up</Text>
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#1e1e1e',
        color: '#fff',
        padding: 14,
        borderRadius: 8,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#3B82F6',
        padding: 14,
        borderRadius: 999,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
