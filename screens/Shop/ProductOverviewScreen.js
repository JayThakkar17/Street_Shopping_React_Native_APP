import React from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ProductItem from "../../components/shop/ProductItem";
import * as cartAction from '../../store/action/cart';
import HeaderButton from '../../components/UI/HeaderButton';

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProduct);
    const dispatch = useDispatch();

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => {
                        props.navigation.navigate('ProductDetail', {
                            productId: itemData.item.id,
                            productTitle: itemData.item.title
                        })
                    }}
                    onAddToCart={() => {
                        dispatch(cartAction.addToCart(itemData.item));
                    }}
                />
            )}
        />
    );
}

ProductOverviewScreen.navigationOptions = navdata => {
    return {
        headerTitle: 'All Products',
        
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
                    title="Cart"
                    iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                    onPress={() => {
                        navdata.navigation.navigate('Cart')
                    }}
                />

            </HeaderButtons>
        )
    }
}

export default ProductOverviewScreen;