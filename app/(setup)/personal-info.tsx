// app/(setup)/personal-info.tsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function PersonalInfoScreen() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [dob, setDob] = useState<Date | null>(null);
    const [showPicker, setShowPicker] = useState(false);

    const formattedDate = dob
        ? `${dob.getMonth() + 1}/${dob.getDate()}/${dob.getFullYear()}`
        : '';

    const isValid = name && username && dob;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add your personal info</Text>
            <Text style={styles.subtitle}>This info needs to be accurate with your ID document.</Text>

            <TextInput
                placeholder="Full Name"
                placeholderTextColor="#aaa"
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="@username"
                placeholderTextColor="#aaa"
                style={styles.input}
                value={username}
                onChangeText={setUsername}
            />
            <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.input}>
                <Text style={{ color: formattedDate ? '#fff' : '#aaa' }}>
                    {formattedDate || 'MM/DD/YYYY'}
                </Text>
            </TouchableOpacity>

            {/* Date Picker */}
            {showPicker && (
                <DateTimePicker
                    value={dob || new Date()}
                    mode="date"
                    display="spinner"
                    onChange={(event, selectedDate) => {
                        setShowPicker(false);
                        if (selectedDate) setDob(selectedDate);
                    }}
                />
            )}

            <TouchableOpacity
                style={[styles.button, !isValid && styles.buttonDisabled]}
                onPress={() => router.push('/email')}
                disabled={!isValid}
            >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        color: '#aaa',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#1e1e1e',
        padding: 14,
        borderRadius: 8,
        color: '#fff',
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#3B82F6',
        padding: 16,
        borderRadius: 999,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#333',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
