import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import { Platform } from "react-native";

import UserProductScreen from "../screens/User/UserProductScreen";
import ProductOverviewScreen from '../screens/Shop/ProductOverviewScreen';
import Colors from "../constants/Colors";
import CartScreen from "../screens/Shop/CartScreen";
import OrdersScreen from "../screens/Shop/OrdersScreen";
import ProductDetailScreen from "../screens/Shop/ProductDetailScreen";
import EditProductScreen from "../screens/User/EditProductScreen";

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}

const ProductNavigator = createStackNavigator(
    {
        ProductsOverview: ProductOverviewScreen,
        ProductDetail: ProductDetailScreen,
        Cart: CartScreen
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => <Ionicons name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                size={23}
                color={drawerConfig.tintColor}
            />
        },
        defaultNavigationOptions: defaultNavOptions
    }
);

const OrdersNavigator = createStackNavigator({
    Orders: OrdersScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
            size={23}
            color={drawerConfig.tintColor}
        />
    },
    defaultNavigationOptions: defaultNavOptions
});

const AdminNavigator = createStackNavigator({
    UserProduct: UserProductScreen,
    EditProduct: EditProductScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
            size={23}
            color={drawerConfig.tintColor}
        />
    },
    defaultNavigationOptions: defaultNavOptions
});

const ShopNavigator = createDrawerNavigator({
    Products: ProductNavigator,
    Orders: OrdersNavigator,
    Admin : AdminNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.primary
    }
});

export default createAppContainer(ShopNavigator);