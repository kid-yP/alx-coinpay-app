// app/(screens)/enter-amount.tsx
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function EnterAmount() {
    return (
        <View className="flex-1 bg-black px-4 justify-center items-center">
            <TouchableOpacity><Feather name="user" size={22} color="#fff" /></TouchableOpacity>
            <Text className="text-white text-lg font-bold mb-1">Mehedi Hasan</Text>
            <Text className="text-neutral-400 mb-6">hellyouthmind@gmail.com</Text>
            <TextInput
                placeholder="500"
                keyboardType="numeric"
                className="text-white text-4xl font-bold text-center w-full mb-6"
            />
            <TouchableOpacity className="bg-blue-600 px-6 py-3 rounded-full">
                <Text className="text-white font-bold">Continue</Text>
            </TouchableOpacity>
        </View>
    );
}
