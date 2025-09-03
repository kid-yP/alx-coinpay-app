// app/(screens)/verify-card.tsx
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function VerifyCardScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verify your card</Text>
            <Text style={styles.subtitle}>We sent a 6-digit code to yourname@example.com</Text>
            <TextInput style={styles.input} placeholder="------" placeholderTextColor="#999" keyboardType="numeric" maxLength={6} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000', padding: 20, justifyContent: 'center' },
    title: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    subtitle: { color: '#aaa', fontSize: 14, marginBottom: 20 },
    input: { backgroundColor: '#1e1e1e', color: '#fff', padding: 14, fontSize: 20, borderRadius: 10, textAlign: 'center', letterSpacing: 10 },
    button: { backgroundColor: '#666', padding: 14, borderRadius: 999, alignItems: 'center', marginTop: 20 },
    buttonText: { color: '#fff', fontWeight: 'bold' }
});
