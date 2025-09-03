// app/(screens)/profile.tsx
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Feather name="user" size={40} color="#fff" />
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.profileName}>Mehedi Hasan</Text>
                    <Text style={styles.profileEmail}>helloyouthmind@gmail.com</Text>
                    <Text style={styles.profilePhone}>+918019567905</Text>
                </View>
            </View>

            <View style={styles.section}>
                <View style={styles.row}>
                    <Feather name="moon" size={20} color="#fff" />
                    <Text style={styles.rowText}>Dark Mode</Text>
                    <Switch value={true} />
                </View>

                {[
                    { icon: 'user', label: 'Personal Info' },
                    { icon: 'credit-card', label: 'Bank & Cards' },
                    { icon: 'list', label: 'Transaction' },
                    { icon: 'settings', label: 'Settings' },
                    { icon: 'shield', label: 'Data Privacy' },
                ].map((item, i) => (
                    <View key={i} style={styles.row}>
                        <Feather name={item.icon as any} size={20} color="#fff" />
                        <Text style={styles.rowText}>{item.label}</Text>
                        <Feather name="chevron-right" size={20} color="#fff" />
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000', padding: 20 },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    profileName: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    profileEmail: { color: '#ccc', fontSize: 14 },
    profilePhone: { color: '#999', fontSize: 14 },
    section: {},
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomColor: '#333',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
    },
    rowText: {
        flex: 1,
        color: '#fff',
        marginLeft: 10,
        fontSize: 16,
    },
});
