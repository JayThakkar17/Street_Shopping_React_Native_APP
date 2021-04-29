import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../../constants/Colors';
import CartItem from "./CartItem";

const OrderItem = props => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <View style={styles.orderItem}>
            <View style={styles.details}>
                <Text style={styles.amount}>₹ {props.amount.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button
                color={Colors.primary}
                title={showDetails ? 'Hide Details' : "Show Details"}
                onPress={() => {
                    setShowDetails(prevState => !prevState);
                }}
            />
            {showDetails && (
                <View style={styles.detailItems}>
                    {props.items.map(cartItem => (
                        <CartItem
                            key={cartItem.productId}
                            quantity={cartItem.quantity}
                            amount={cartItem.sum}
                            title={cartItem.productTitle}
                        />
                    ))}
                </View>
            )}
        </View>
    )
};

const styles = StyleSheet.create({
    orderItem: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    amount: {
        fontSize: 16
    },
    detailItems: {
        width: '100%'
    },  
    date: {
        fontSize: 16,
        color: '#888'
    }
});

export default OrderItem;