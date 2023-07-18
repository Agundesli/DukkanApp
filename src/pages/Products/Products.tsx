import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Button, View } from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';


const Products = ({ navigation }: any) => {

    const { loading, data, error } = useFetch(Config.API_PRODUCT_URL);

    const handleProductSelect = (id) => {
        navigation.navigate('DetailsPage', { id });
    };

    function handleLogout() {
        navigation.navigate('LoginPage')
    }

    const renderProduct = ({ item }) => (
        <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
    );


    if (loading) {
        return <Loading />;

    }

    if (error) {
        return <Error />;
    }

    return (
        <SafeAreaView>
            <View>
                <Button title='logout' onPress={handleLogout} />
                <FlatList data={data} renderItem={renderProduct} />
                {/* <FlatList  data={[1,2,3]} renderItem={data=><Text>{data.item}</Text>}  /> */}
                {/* Data propertisi ben ekrana ne basmak istiyorsam onun Array halidir */}
                {/* RenderItem propertisi biz ekrana componenti nasıl bamak istiyorsak, bize o noktada yardımcı olan bir callback function */}
                {/* Devcut data sayısı kadar RenderItem tetiklenir ve ekrana verileri basar */}
            </View>


        </SafeAreaView>

    );
};

export default Products;