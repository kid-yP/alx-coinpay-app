// app/(screens)/register.tsx
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Top Illustration */}
            <Image
                source={require('@/assets/images/registration/register0.png')}
                resizeMode="contain"
                style={styles.image}
            />

            {/* Headline + Subtext */}
            <Text style={styles.title}>Create your Coinpay account</Text>
            <Text style={styles.subtitle}>
                Coinpay is a powerful tool that allows you to easily send, receive, and track all your transactions.
            </Text>

            {/* Sign Up Button */}
            <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => router.push('/signup')}
            >
                <Text style={styles.primaryButtonText}>Sign up</Text>
            </TouchableOpacity>

            {/* Log in Button */}
            <TouchableOpacity onPress={() => router.push('/login')}>
                <Text style={styles.secondaryButtonText}>Log in</Text>
            </TouchableOpacity>

            {/* Terms & Privacy */}
            <Text style={styles.terms}>
                By continuing you accept our{' '}
                <Text
                    style={styles.link}
                    onPress={() => Linking.openURL('https://example.com/terms')}
                >
                    Terms of Service
                </Text>{' '}
                and{' '}
                <Text
                    style={styles.link}
                    onPress={() => Linking.openURL('https://example.com/privacy')}
                >
                    Privacy Policy
                </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 80,
        paddingBottom: 24,
        justifyContent: 'space-between',
    },
    image: {
        width: '100%',
        height: 280,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 20,
    },
    subtitle: {
        color: '#ccc',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
    },
    primaryButton: {
        backgroundColor: '#3B82F6',
        width: '100%',
        paddingVertical: 14,
        borderRadius: 999,
        marginTop: 40,
        alignItems: 'center',
    },
    primaryButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    secondaryButtonText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 16,
    },
    terms: {
        color: '#999',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20,
    },
    link: {
        color: '#3B82F6',
        textDecorationLine: 'underline',
    },
});
