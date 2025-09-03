// app/(screens)/id-verification-progress.tsx
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

export default function IDVerificationProgressScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/acc-verification/image1.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.title}>ID verification in progress</Text>
            <Text style={styles.subtitle}>Hold tight, it won’t take long</Text>
            <ActivityIndicator size="large" color="#3B82F6" style={{ marginTop: 20 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', padding: 20 },
    image: { width: 300, height: 300, marginBottom: 40 },
    title: { color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
    subtitle: { color: '#aaa', fontSize: 14, textAlign: 'center' },
});
