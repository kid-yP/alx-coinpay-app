// app/(screens)/spending.tsx
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

export default function SpendingScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Spending</Text>

            <View style={styles.stats}>
                <View style={styles.statBox}>
                    <Text style={styles.statLabel}>Total Spend</Text>
                    <Text style={styles.statValue}>$500.00</Text>
                </View>
                <View style={[styles.statBox, { backgroundColor: '#FFD700' }]}>
                    <Text style={styles.statLabel}>Available Balance</Text>
                    <Text style={styles.statValue}>$20,000.00</Text>
                </View>
            </View>

            {/* Chart placeholder */}
            <View style={styles.chart}>
                <Text style={styles.chartText}>[Chart Here]</Text>
            </View>

            <View style={styles.filterBar}>
                {['Spending', 'Income', 'Bills', 'Savings'].map((label, idx) => (
                    <View key={idx} style={styles.filterItem}>
                        <Feather name="dollar-sign" size={20} color="#fff" />
                        <Text style={styles.filterText}>{label}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.spendingList}>
                <Text style={styles.sectionTitle}>Spending list</Text>
                {[
                    { name: 'Netflix', date: 'Jan 01 at 7:20pm', amount: '-$15.99' },
                    { name: 'Google', date: 'Jan 03 at 4:10pm', amount: '-$10' },
                ].map((item, index) => (
                    <View key={index} style={styles.transaction}>
                        <FontAwesome name="circle" size={24} color="#fff" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.transactionName}>{item.name}</Text>
                            <Text style={styles.transactionDate}>{item.date}</Text>
                        </View>
                        <Text style={styles.transactionAmount}>{item.amount}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000', padding: 20 },
    header: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    stats: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
    statBox: {
        backgroundColor: '#3B82F6',
        padding: 15,
        borderRadius: 12,
        width: '48%',
    },
    statLabel: { color: '#ddd', fontSize: 12 },
    statValue: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    chart: {
        backgroundColor: '#1a1a1a',
        height: 150,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chartText: { color: '#555' },
    filterBar: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
    filterItem: { alignItems: 'center' },
    filterText: { color: '#fff', marginTop: 4 },
    spendingList: { marginTop: 30 },
    sectionTitle: { color: '#fff', fontSize: 18, marginBottom: 10 },
    transaction: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        justifyContent: 'space-between',
    },
    transactionName: { color: '#fff', fontSize: 16 },
    transactionDate: { color: '#aaa', fontSize: 12 },
    transactionAmount: { color: '#f87171', fontSize: 16 },
});
