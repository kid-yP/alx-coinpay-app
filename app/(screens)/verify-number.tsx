// app/(screens)/verifynumber.tsx
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function VerifyNumberScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Confirm your phone</Text>
            <Text style={styles.subtitle}>We sent a 6-digit code to +880 1720 84 57 57</Text>

            {/* Custom OTP input can go here. For now, placeholder */}
            <View style={styles.codeContainer}>
                {[...Array(6)].map((_, i) => (
                    <View key={i} style={styles.codeBox}>
                        <Text style={styles.codeText}>_</Text>
                    </View>
                ))}
            </View>

            <TouchableOpacity>
                <Text style={styles.resend}>Didn't get a code? <Text style={styles.link}>Resend</Text></Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.verifyBtn}>
                <Text style={styles.verifyText}>Verify Your Number</Text>
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
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        color: '#aaa',
        marginBottom: 30,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    codeBox: {
        borderBottomWidth: 2,
        borderColor: '#555',
        width: 40,
        alignItems: 'center',
        paddingVertical: 8,
    },
    codeText: {
        color: '#fff',
        fontSize: 18,
    },
    resend: {
        color: '#aaa',
        textAlign: 'center',
        marginBottom: 20,
    },
    link: {
        color: '#3B82F6',
    },
    verifyBtn: {
        backgroundColor: '#3B82F6',
        padding: 14,
        borderRadius: 999,
        alignItems: 'center',
    },
    verifyText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
