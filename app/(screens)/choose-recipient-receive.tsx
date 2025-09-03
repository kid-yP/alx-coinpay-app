// app/(screens)/choose-recipient-receive.tsx
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const data = Array(5).fill({
    name: 'Mehedi Hasan',
    email: 'healyouthmind@gmail.com',
    amount: '-$100',
});

export default function ChooseRecipientReceiveScreen() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-black pt-20 px-5">
            <Text className="text-white text-xl font-bold mb-2">Choose Recipient</Text>
            <Text className="text-gray-400 mb-4">Please select your recipient to receive money.</Text>

            <TextInput
                placeholder="Search - Recipient Email"
                placeholderTextColor="#999"
                className="bg-[#1c1c1e] text-white rounded-md px-4 py-3 mb-5"
            />

            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        className="flex-row justify-between items-center py-3 border-b border-gray-800"
                        onPress={() => router.push('/qr-receive')}
                    >
                        <View className="flex-row items-center gap-x-4">
                            <Feather name="user" size={24} color="white" />
                            <View>
                                <Text className="text-white">{item.name}</Text>
                                <Text className="text-gray-400 text-xs">{item.email}</Text>
                            </View>
                        </View>
                        <Text className="text-red-400">{item.amount}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
