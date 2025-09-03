// app/(screens)/login.tsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function LoginScreen() {
    const router = useRouter();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log in to Coinpay</Text>
            <TextInput style={styles.input} placeholder="Phone" placeholderTextColor="#999" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#999" secureTextEntry value={password} onChangeText={setPassword} />
            <TouchableOpacity style={styles.button} onPress={() => router.push('/homepage')}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000', padding: 20, justifyContent: 'center' },
    title: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    input: { backgroundColor: '#1e1e1e', color: '#fff', borderRadius: 10, padding: 14, marginBottom: 15 },
    button: { backgroundColor: '#2563EB', padding: 14, borderRadius: 999, alignItems: 'center' },
    buttonText: { color: 'white', fontWeight: 'bold' }
});
