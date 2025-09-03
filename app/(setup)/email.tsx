// app/(setup)/email.tsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function EmailScreen() {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const isValid = email.includes('@') && email.includes('.');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add your email</Text>
            <Text style={styles.subtitle}>This info needs to be accurate with your ID document.</Text>

                <TextInput
                    placeholder="name@example.com"
                    placeholderTextColor="#aaa"
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

            <TouchableOpacity
                style={[styles.button, !isValid && styles.buttonDisabled]}
                onPress={() => router.push('/address')}
                disabled={!isValid}
            >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    ...require('./personal-info').defaultStyles,
});
