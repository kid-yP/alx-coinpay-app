// app/(screens)/welcome.tsx
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/welcome/image.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>Congratulations!{"\n"}Welcome to Coinpay</Text>
            <Text style={styles.subtitle}>We are happy to have you. It’s time to send, receive and track your expense</Text>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/homepage')}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center', padding: 20 },
    image: { width: 250, height: 250, marginBottom: 30 },
    title: { color: 'white', fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
    subtitle: { color: '#aaa', fontSize: 14, textAlign: 'center', marginVertical: 10 },
    button: { backgroundColor: '#2563EB', paddingVertical: 14, paddingHorizontal: 50, borderRadius: 999, marginTop: 20 },
    buttonText: { color: 'white', fontWeight: 'bold' }
});
