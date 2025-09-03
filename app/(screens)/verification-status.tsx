// app/(screens)/verification-status.tsx
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function VerificationStatusScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/acc-verification/image4.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.title}>Setting up your account</Text>
            <Text style={styles.subtitle}>We are analyzing your data to verify</Text>

            <View style={styles.list}>
                <View style={styles.listItem}>
                    <Text style={styles.stepNum}>1</Text>
                    <Text style={styles.stepText}>Phone verified</Text>
                    <Icon name="check-circle" size={20} color="#3B82F6" />
                </View>

                <View style={styles.listItem}>
                    <Text style={styles.stepNum}>2</Text>
                    <Text style={styles.stepText}>Checking up document ID</Text>
                    <Icon name="check-circle" size={20} color="#3B82F6" />
                </View>

                <View style={styles.listItem}>
                    <Text style={styles.stepNum}>3</Text>
                    <Text style={styles.stepText}>Verifying photo</Text>
                    <ActivityIndicator size="small" color="#3B82F6" />
                </View>
            </View>
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
        width: 280,
        height: 260,
        marginBottom: 30,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 6,
    },
    subtitle: {
        color: '#aaa',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
    },
    list: {
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 10,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#111',
        paddingVertical: 14,
        paddingHorizontal: 15,
        borderRadius: 12,
        marginBottom: 12,
        justifyContent: 'space-between',
    },
    stepNum: {
        color: '#aaa',
        fontSize: 14,
        marginRight: 10,
        fontWeight: 'bold',
    },
    stepText: {
        flex: 1,
        color: '#fff',
        fontSize: 15,
    },
});
