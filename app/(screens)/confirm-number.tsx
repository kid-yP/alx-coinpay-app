// app/(screens)/confirmnumber.tsx
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ConfirmNumberScreen() {
    const router = useRouter();
    const phone = '+880 1999 86 74 05'

    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/registration/register1.png')}
                resizeMode="contain"
                style={styles.image}
            />

            <Text style={styles.title}>Verify your phone number before we send code</Text>
            <Text style={styles.subtitle}>Is this correct? {phone}</Text>

            <TouchableOpacity
                style={styles.primary}
                onPress={() => router.push('/verify-number')}
            >
                <Text style={styles.primaryText}>Yes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondary}>
                <Text style={styles.secondaryText}>No</Text>
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
        width: 180,
        height: 180,
        marginBottom: 30,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        color: '#ccc',
        textAlign: 'center',
        marginBottom: 30,
    },
    primary: {
        backgroundColor: '#3B82F6',
        width: '100%',
        padding: 14,
        borderRadius: 999,
        alignItems: 'center',
        marginBottom: 16,
    },
    primaryText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    secondary: {
        borderColor: '#3B82F6',
        borderWidth: 1,
        padding: 14,
        width: '100%',
        borderRadius: 999,
        alignItems: 'center',
    },
    secondaryText: {
        color: '#3B82F6',
        fontWeight: 'bold',
    },
});
