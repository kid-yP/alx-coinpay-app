// app/(screens)/capture-selfie.tsx
import { View, Image, StyleSheet } from 'react-native';

export default function CaptureSelfieScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/acc-verification/image3.png')}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000' },
    image: { flex: 1, width: '100%', height: '100%' },
});
