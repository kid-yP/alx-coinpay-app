// app/(screens)/scan-id.tsx
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ScanIdScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/acc-verification/image0.png')}
                style={styles.image}
            />
            <Text style={styles.title}>Scan ID document to verify your identity</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Scan</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#3B82F6',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
