// app/(screens)/send-request.tsx
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SendRequestScreen() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-black justify-center items-center px-6">
            <Feather name="user" size={60} color="white" className="mb-4" />
            <Text className="text-white text-lg mb-1">Mehedi Hasan</Text>
            <Text className="text-gray-400 mb-6">healyouthmind@gmail.com</Text>

            <TouchableOpacity
                className="bg-blue-600 px-6 py-3 rounded-full w-full"
                onPress={() => router.push('/enter-amount-receive')}
            >
                <Text className="text-white text-center font-bold">Request $500</Text>
            </TouchableOpacity>
        </View>
    );
}
