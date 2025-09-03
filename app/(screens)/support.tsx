// app/(screens)/support.tsx
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

const messages = [
    { id: '1', text: 'Welcome to Coinpay support! How can we assist you today?', from: 'bot' },
    { id: '2', text: 'I need help regarding my account. I can’t send money.', from: 'user' },
    { id: '3', text: 'Have you tried troubleshooting steps we provided in FAQ?', from: 'bot' },
];

export default function SupportScreen() {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/support/image.png')} style={styles.image} />

            <Text style={styles.title}>CoinPay Support</Text>
            <Text style={styles.subtitle}>
                Our team is here to assist you with questions or issues.
            </Text>

            <TouchableOpacity style={styles.startButton}>
                <Text style={styles.buttonText}>Start Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.faqButton}>
                <Text style={styles.faqText}>View FAQ</Text>
            </TouchableOpacity>

            {/* Chat bubbles */}
            <FlatList
                data={messages}
                style={styles.chatContainer}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.chatBubble, item.from === 'user' ? styles.userBubble : styles.botBubble]}>
                        <Text style={styles.chatText}>{item.text}</Text>
                    </View>
                )}
            />

            <View style={styles.inputContainer}>
                <TextInput placeholder="Type a message" placeholderTextColor="#aaa" style={styles.input} />
                <TouchableOpacity>
                    <Feather name="send" size={24} color="#3B82F6" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000', padding: 20 },
    image: { height: 180, resizeMode: 'contain', marginVertical: 10 },
    title: { fontSize: 20, color: '#fff', fontWeight: 'bold', marginBottom: 4 },
    subtitle: { fontSize: 14, color: '#ccc', marginBottom: 20 },
    startButton: {
        backgroundColor: '#3B82F6',
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 10,
    },
    faqButton: {
        borderColor: '#3B82F6',
        borderWidth: 1,
        padding: 12,
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonText: { color: '#fff', fontWeight: 'bold' },
    faqText: { color: '#3B82F6' },
    chatContainer: { marginTop: 20, flex: 1 },
    chatBubble: {
        padding: 12,
        borderRadius: 16,
        marginBottom: 10,
        maxWidth: '80%',
    },
    userBubble: {
        backgroundColor: '#3B82F6',
        alignSelf: 'flex-end',
    },
    botBubble: {
        backgroundColor: '#1f1f1f',
        alignSelf: 'flex-start',
    },
    chatText: { color: '#fff' },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: '#1a1a1a',
        borderRadius: 30,
        padding: 12,
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        color: '#fff',
        marginRight: 10,
    },
});
