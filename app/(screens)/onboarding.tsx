// app/(screens)/onboarding.tsx
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Dimensions, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const slides = [
    {
        id: '1',
        image: require('@/assets/images/onboarding/onboarding0.png'),
        text: 'Trusted by millions of people, part of one part',
    },
    {
        id: '2',
        image: require('@/assets/images/onboarding/onboarding1.png'),
        text: 'Spend money abroad, and track your expense',
    },
    {
        id: '3',
        image: require('@/assets/images/onboarding/onboarding2.png'),
        text: 'Receive Money From Anywhere In The World',
    },
];

export default function OnboardingScreen() {
    const [index, setIndex] = useState(0);
    const router = useRouter();

    const handleNext = () => {
        if (index === slides.length - 1) {
            router.push('/register');
        } else {
            setIndex(index + 1);
        }
    };

    const progressPercentage = ((index + 1) / slides.length) * 100;

    return (
        <View style={styles.container}>
            <Image
                source={slides[index].image}
                resizeMode="contain"
                style={styles.image}
            />

            {/* Custom progress bar indicator */}
            <View style={styles.indicatorContainer}>
                {slides.map((_, i) => (
                    <View
                        key={i}
                        style={[
                            styles.pill,
                            index === i ? styles.pillActive : styles.pillInactive,
                        ]}
                    />
                ))}
            </View>

            <Text style={styles.text}>{slides[index].text}</Text>

            <TouchableOpacity onPress={handleNext} style={styles.buttonWrapper}>
                <LinearGradient
                    colors={['#3B82F6', '#2563EB']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    image: {
        width: width * 0.9,
        height: width * 0.9,
        marginBottom: 20,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    progressBarBackground: {
        width: '60%',
        height: 6,
        backgroundColor: '#333',
        borderRadius: 3,
        overflow: 'hidden',
        marginBottom: 30,
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#3B82F6',
    },
    buttonWrapper: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        width: '90%',
        paddingVertical: 14,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        gap: 8,
    },
    pill: {
        height: 8,
        borderRadius: 4,
    },
    pillActive: {
        width: 20,
        backgroundColor: '#3B82F6',
    },
    pillInactive: {
        width: 10,
        backgroundColor: '#E5E7EB',
    },

});
