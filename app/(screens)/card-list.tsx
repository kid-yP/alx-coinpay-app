// app/(screens)/take-selfie.tsx
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function CardListScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Card list</Text>
            <View style={styles.card}>
                <Text style={styles.cardText}>💳 Account: ************3064</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/verify-card')}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryBtn}>
                <Text style={styles.secondaryText}>+ Add another card</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000', padding: 20, justifyContent: 'center' },
    title: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
    card: { backgroundColor: '#1e1e1e', padding: 20, borderRadius: 10, marginBottom: 20 },
    cardText: { color: '#fff', fontSize: 16 },
    button: { backgroundColor: '#2563EB', padding: 14, borderRadius: 999, alignItems: 'center' },
    buttonText: { color: '#fff', fontWeight: 'bold' },
    secondaryBtn: { marginTop: 10, alignItems: 'center' },
    secondaryText: { color: '#2563EB', fontWeight: 'bold' }
});
