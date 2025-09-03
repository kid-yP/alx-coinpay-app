// app/(screens)/homepage.tsx
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, Entypo, Feather } from '@expo/vector-icons';

export default function HomePage() {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header Section */}
                <View style={styles.header}>
                    <View style={styles.headerTop}>
                        <Ionicons name="trophy-outline" size={20} color="#fff" />
                        <View style={styles.searchBar}>
                            <TextInput
                                placeholder='Search " Payments"'
                                placeholderTextColor="#ccc"
                                style={{ color: "#fff" }}
                            />
                        </View>
                        <Ionicons name="notifications-outline" size={20} color="#fff" />
                    </View>

                    <Text style={styles.currency}>🇺🇸 US Dollar</Text>
                    <Text style={styles.balance}>$20,000</Text>
                    <TouchableOpacity style={styles.addMoney}>
                        <FontAwesome5 name="wallet" size={16} color="#2563EB" />
                        <Text style={styles.addMoneyText}>Add Money</Text>
                    </TouchableOpacity>

                    {/* Action Buttons */}
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.actionBtn}>
                            <Text style={styles.iconWrap}><Entypo name="arrow-up" size={14} color="#2563EB" /></Text>
                            <Text style={styles.actionLabel}>Send</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionBtn}>
                            <Text style={styles.iconWrap}><Entypo name="arrow-down" size={14} color="#f59e0b" /></Text>
                            <Text style={styles.actionLabel}>Request</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionBtn}>
                            <Text style={styles.iconWrap}><FontAwesome5 name="university" size={14} color="#facc15" /></Text>
                            <Text style={styles.actionLabel}>Bank</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Transaction List */}
                <View style={styles.transactionContainer}>
                    <View style={styles.transactionHeader}>
                        <Text style={styles.transactionTitle}>Transaction</Text>
                        <Feather name="arrow-right" size={20} color="#fff" />
                    </View>

                    {[
                        { icon: "credit-card", label: "Spending", amount: "-$500", color: "#3b82f6", textColor: "#ef4444" },
                        { icon: "coins", label: "Income", amount: "$3000", color: "#22c55e", textColor: "#22c55e" },
                        { icon: "receipt", label: "Bills", amount: "-$800", color: "#eab308", textColor: "#ef4444" },
                        { icon: "piggy-bank", label: "Savings", amount: "$1000", color: "#f97316", textColor: "#facc15" },
                    ].map((item, index) => (
                        <View key={index} style={styles.transactionItem}>
                            <View style={[styles.circleIcon, { backgroundColor: item.color }]}>
                                <FontAwesome5 name={item.icon as any} size={14} color="#fff" />
                            </View>
                            <Text style={styles.transactionLabel}>{item.label}</Text>
                            <Text style={[styles.transactionAmount, { color: item.textColor }]}>{item.amount}</Text>
                            <Feather name="chevron-right" size={18} color="#aaa" />
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Bottom Nav (Mocked) */}
            <View style={styles.nav}>
                <TouchableOpacity><Entypo name="home" size={22} color="#2563EB" /></TouchableOpacity>
                <TouchableOpacity><Feather name="pie-chart" size={22} color="#fff" /></TouchableOpacity>
                <TouchableOpacity style={styles.navCenter}><MaterialIcons name="qr-code-scanner" size={24} color="white" /></TouchableOpacity>
                <TouchableOpacity><Feather name="message-circle" size={22} color="#fff" /></TouchableOpacity>
                <TouchableOpacity><Feather name="user" size={22} color="#fff" /></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000' },
    header: { backgroundColor: '#2563EB', padding: 20, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
    headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    searchBar: { backgroundColor: '#4f70ff', flex: 1, marginHorizontal: 10, paddingHorizontal: 15, borderRadius: 20, height: 36, justifyContent: 'center' },
    currency: { color: '#fff', fontSize: 12, marginBottom: 4 },
    balance: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
    addMoney: { backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 30, marginTop: 10 },
    addMoneyText: { color: '#2563EB', fontWeight: 'bold', marginLeft: 8 },
    actions: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 30, backgroundColor: '#1f1f1f', borderRadius: 20, paddingVertical: 20 },
    actionBtn: { alignItems: 'center' },
    iconWrap: { marginBottom: 6 },
    actionLabel: { color: '#fff', fontSize: 12 },
    transactionContainer: { padding: 20 },
    transactionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
    transactionTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    transactionItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1e1e1e', borderRadius: 12, padding: 15, marginBottom: 10 },
    circleIcon: { width: 30, height: 30, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginRight: 10 },
    transactionLabel: { flex: 1, color: '#fff' },
    transactionAmount: { marginRight: 10, fontWeight: 'bold' },
    nav: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 10, backgroundColor: '#1e1e1e', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, margin: 10 },
    navCenter: { backgroundColor: '#2563EB', padding: 14, borderRadius: 999 }
});
