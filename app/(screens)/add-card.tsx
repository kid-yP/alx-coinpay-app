// app/(screens)/add-card.tsx
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function AddCardScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/card-list/image.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>Let’s add your card</Text>
            <Text style={styles.subtitle}>Experience the power of financial organization with our platform.</Text>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/card-list')}>
                <Text style={styles.buttonText}>+ Add your card</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000', padding: 20, justifyContent: 'center', alignItems: 'center' },
    image: { width: 300, height: 300, marginBottom: 30 },
    title: { color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
    subtitle: { color: '#aaa', fontSize: 14, textAlign: 'center', marginBottom: 20 },
    button: { backgroundColor: '#2563EB', paddingVertical: 14, paddingHorizontal: 40, borderRadius: 999 },
    buttonText: { color: 'white', fontWeight: 'bold' }
});
