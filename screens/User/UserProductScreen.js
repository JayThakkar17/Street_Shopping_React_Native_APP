import React from 'react';

import { FlatList, Button, Platform } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from "../../components/shop/ProductItem";
import Colors from "../../constants/Colors";
import HeaderButton from '../../components/UI/HeaderButton';
import * as productAction from "../../store/action/product";

const UserProductScreen = props => {
    const userProducts = useSelector(state => state.products.userProduct);
    const dispatch = useDispatch();

    const editProductHandler = (id) => {
        props.navigation.navigate('EditProduct', { productId: id });
    };

    return (
        <FlatList
            data={userProducts}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onSelect={() => {
                        editProductHandler(itemData.item.id);
                    }}
                >
                    <Button
                        color={Colors.primary}
                        title="Edit"
                        onPress={() => {
                            editProductHandler(itemData.item.id);
                        }}
                    />
                    <Button
                        color={Colors.primary}
                        title="Delete"
                        onPress={() => {
                            dispatch(productAction.deleteProduct(itemData.item.id));
                        }}
                    />
                </ProductItem>
            )}
        />
    );
};

UserProductScreen.navigationOptions = navdata => {
    return {
        headerTitle: 'Your Products',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Menu"
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => {
                    navdata.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Add"
                    iconName={Platform.OS === 'android' ? 'add-outline' : 'ios-create'}
                    onPress={() => {
                        navdata.navigation.navigate('EditProduct');
                    }}
                />
            </HeaderButtons>
        )
    }
};

export default UserProductScreen;

