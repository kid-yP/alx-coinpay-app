// app/(screens)/select-purpose-receive.tsx
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SelectPurposeReceiveScreen() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-black px-6 pt-32">
            <Text className="text-white text-xl font-bold mb-4">Select a Purpose</Text>
            <TouchableOpacity
                className="flex-row items-center justify-between bg-[#111] p-4 rounded-lg border border-blue-600 mb-3"
                onPress={() => router.push('/choose-recipient-receive')}
            >
                <Text className="text-white">Personal</Text>
                <Text className="text-gray-400 text-xs">Pay your friends and family.</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between bg-[#111] p-4 rounded-lg">
                <Text className="text-white">Business</Text>
                <Text className="text-gray-400 text-xs">Pay your employee</Text>
            </TouchableOpacity>
        </View>
    );
}
