// app/(screens)/take-selfie.tsx
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function TakeSelfieScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/acc-verification/image2.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.title}>Take selfie to verify your identity</Text>
            <Text style={styles.subtitle}>
                Quick and easy identification verification using your phone’s camera.
            </Text>
            <TouchableOpacity style={styles.button}
                onPress={() => router.push('/capture-selfie')}>
                <Text style={styles.buttonText}>Take a selfie</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', padding: 20 },
    image: { width: 280, height: 280, marginBottom: 30 },
    title: { color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
    subtitle: { color: '#aaa', fontSize: 14, textAlign: 'center', marginBottom: 30 },
    button: { backgroundColor: '#3B82F6', paddingHorizontal: 50, paddingVertical: 14, borderRadius: 30 },
    buttonText: { color: 'white', fontWeight: 'bold' },
});
