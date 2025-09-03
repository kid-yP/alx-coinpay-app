// app/index.tsx
import { View, Image, Text, ImageBackground, StyleSheet } from 'react-native';

export default function SplashScreen() {
    return (
        <ImageBackground
            source={require('@/assets/images/image.png')}
            resizeMode="cover"
            style={styles.background}
        >
            <View style={styles.overlay}>
                <Image
                    source={require('@/assets/icons/image.png')}
                    resizeMode="contain"
                    style={styles.logo}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#0052cc', // deep blue fallback
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
