// app/(screens)/qr-receive.tsx
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function QrReceiveScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.qrBox}>
                <Image
                    source={require('@/assets/images/receive/image.png')}
                    style={styles.qrImage}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Scan to get Paid</Text>
                <Text style={styles.subtitle}>
                    Hold the code inside the frame, it will be scanned automatically
                </Text>
            </View>

            <TouchableOpacity style={styles.primaryBtn}>
                <Text style={styles.primaryBtnText}>Request for Payment</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryBtn}>
                <Feather name="send" size={18} color="#C7C9D9" />
                <Text style={styles.secondaryBtnText}>Share to Receive Money</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    qrBox: {
        backgroundColor: '#1A1A1A',
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 40,
        width: '100%',
    },
    qrImage: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    subtitle: {
        color: '#C7C9D9',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 20,
    },
    primaryBtn: {
        width: '100%',
        backgroundColor: '#3B82F6',
        borderRadius: 40,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 16,
    },
    primaryBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    secondaryBtn: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#C7C9D9',
        borderRadius: 40,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    secondaryBtnText: {
        color: '#C7C9D9',
        fontSize: 16,
        fontWeight: '600',
    },
});
