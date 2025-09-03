// app/(screens)/enter-amount-receive.tsx
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function EnterAmountReceiveScreen() {
    const [amount, setAmount] = useState('');
    const router = useRouter();

    return (
        <View className="flex-1 bg-black justify-center items-center px-6">
            <Feather name="user" size={60} color="white" />
            <Text className="text-white mt-4">Mehedi Hasan</Text>
            <Text className="text-gray-400 mb-6">healyouthmind@gmail.com</Text>

            <TextInput
                value={amount}
                onChangeText={setAmount}
                placeholder="500"
                keyboardType="numeric"
                placeholderTextColor="white"
                className="text-5xl text-white text-center mb-6"
            />
            <TouchableOpacity
                className="bg-blue-600 px-6 py-3 rounded-full w-full"
                onPress={() => router.push('/select-purpose-receive')}
            >
                <Text className="text-white text-center font-bold">Continue</Text>
            </TouchableOpacity>
        </View>
    );
}
