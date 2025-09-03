// app/screens/SplashScreen.tsx
import { View, Image, Text } from 'react-native';

export default function SplashScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-blue-800">
            <Image
                source={require('@/assets/images/onboarding/onboarding0.png')}
                style={{ width: 128, height: 128 }}
            />
            <Text className="text-white text-xl mt-4 font-bold">CoinPay</Text>
        </View>
    );
}
