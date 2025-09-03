// app/(screens)/pin-setup.tsx
import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

export default function PinSetupScreen() {
    const [pin, setPin] = useState('');
    const inputRef = useRef<TextInput>(null);

    const handleChange = (value: string) => {
        if (value.length <= 4) {
            setPin(value);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={styles.inner}>
                <Text style={styles.title}>Create passcode</Text>
                <Text style={styles.subtitle}>
                    This info needs to be accurate with your ID document.
                </Text>

                <View style={styles.dotsContainer} onTouchStart={() => inputRef.current?.focus()}>
                    {[0, 1, 2, 3].map((i) => (
                        <View
                            key={i}
                            style={[
                                styles.dot,
                                pin.length > i && styles.filledDot,
                            ]}
                        />
                    ))}
                </View>

                <TextInput
                    ref={inputRef}
                    style={styles.hiddenInput}
                    keyboardType="number-pad"
                    value={pin}
                    onChangeText={handleChange}
                    maxLength={4}
                    secureTextEntry
                    autoFocus
                />
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    inner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        color: '#aaa',
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 40,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        marginBottom: 20,
    },
    dot: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#555',
        backgroundColor: 'transparent',
    },
    filledDot: {
        backgroundColor: '#fff',
        borderColor: '#fff',
    },
    hiddenInput: {
        position: 'absolute',
        width: 1,
        height: 1,
        opacity: 0,
    },
});
