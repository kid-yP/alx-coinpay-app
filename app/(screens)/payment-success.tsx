// app/(screens)/payment-success.tsx
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

export default function PaymentSuccess() {
    return (
        <View className="flex-1 bg-black px-4 justify-center items-center">
            <Text className="text-green-500 text-sm mb-3">
                Transaction Completed • 01 Jan 2023 at 5:00pm
            </Text>
            <TouchableOpacity><Feather name="user" size={22} color="#fff" /></TouchableOpacity>
            <Text className="text-white font-bold">Mehedi Hasan</Text>
            <Text className="text-neutral-400 mb-4">hellyouthmind@gmail.com</Text>

            <View className="bg-neutral-800 p-4 rounded w-full mb-6">
                <Text className="text-white">🇯🇵 Account •••• 9394</Text>
            </View>

            <TouchableOpacity className="bg-blue-600 w-full py-3 rounded-full mb-4">
                <Text className="text-white text-center font-bold">Back to Homepage</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border border-white w-full py-3 rounded-full">
                <Text className="text-white text-center">Make another Payment</Text>
            </TouchableOpacity>
        </View>
    );
}
