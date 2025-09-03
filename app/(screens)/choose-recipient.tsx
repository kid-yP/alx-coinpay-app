// app/(screens)/choose-recipient.tsx
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const users = Array(5).fill({
    name: 'Mehedi Hasan',
    email: 'hellyouthmind@gmail.com',
    amount: '-$100',
});

export default function ChooseRecipient() {
    return (
        <View className="flex-1 bg-black px-4 pt-20">
            <Text className="text-white text-xl font-bold mb-2">Choose Recipient</Text>
            <Text className="text-white mb-4">Please select your recipient to send money.</Text>
            <TextInput
                placeholder="Search – Recipient Email"
                placeholderTextColor="#888"
                className="bg-neutral-800 text-white p-3 rounded mb-4"
            />
            <FlatList
                data={users}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item }) => (
                    <View className="flex-row justify-between items-center py-2 border-b border-neutral-700">
                        <View className="flex-row items-center space-x-3">
                            <TouchableOpacity><Feather name="user" size={22} color="#fff" /></TouchableOpacity>
                            <View>
                                <Text className="text-white">{item.name}</Text>
                                <Text className="text-neutral-400 text-sm">{item.email}</Text>
                            </View>
                        </View>
                        <Text className="text-red-500">{item.amount}</Text>
                    </View>
                )}
            />
        </View>
    );
}
