// app/(screens)/qr-scan.tsx
import { View, Image, Text } from 'react-native';

export default function QRScan() {
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(68, 90, 215, 1)', justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={require('@/assets/images/send/image.png')}
                style={{ width: 250, height: 250, marginBottom: 20 }}
                resizeMode="contain"
            />
            <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>
                Scan a QR to Pay{'\n'}Hold the code inside the frame, it will be scanned automatically
            </Text>
        </View>
    );
}
