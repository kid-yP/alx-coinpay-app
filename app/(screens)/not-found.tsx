// app/(screens)/not-found.tsx
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function NotFoundScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/not-found/image.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.title}>Error 404</Text>
            <Text style={styles.subtitle}>Page Not Found</Text>
            <Text style={styles.message}>
                Oops! It looks like the page you're looking for doesn't exist or has been moved.
                Please try again or go back to the home page.
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => router.push('/homepage')}>
                <Text style={styles.buttonText}>Back to Home</Text>
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
        alignItems: 'center',
    },
    image: {
        width: 280,
        height: 220,
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 10,
    },
    message: {
        color: '#aaa',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 20,
    },
    button: {
        backgroundColor: '#3B82F6',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
