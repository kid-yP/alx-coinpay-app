// app/(screens)/select-purpose.tsx
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SelectPurpose() {
    return (
        <View className="flex-1 bg-black px-4 justify-center items-center">
            <TouchableOpacity><Feather name="user" size={22} color="#fff" /></TouchableOpacity>
            <Text className="text-white text-lg font-bold mb-1">Mehedi Hasan</Text>
            <Text className="text-neutral-400 mb-6">hellyouthmind@gmail.com</Text>
            <View className="w-full">
                <Text className="text-white mb-2">Choose Account</Text>
                <View className="bg-neutral-800 p-4 rounded mb-6">
                    <Text className="text-white">🇯🇵 Account •••• 9394</Text>
                </View>
                <TouchableOpacity className="bg-blue-600 px-6 py-3 rounded-full">
                    <Text className="text-white font-bold text-center">Pay $500</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
