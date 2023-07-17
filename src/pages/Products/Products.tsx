import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import Button from '../../components/Button/Button';

const Products = ({ navigation }: any) => {


    // const[error, setError]=useState(String);
    // const[loading, setLoading]=useState(true);
    // const[data,setData]=useState([]);

    // useEffect(() =>{
    //     fetchData();
    // }, []);

    // const fetchData = async() =>{
    //     try {
    //         const {data:productData} = await axios.get(Config.API_URL || '');
    //         //as String:Bu, hatayı ortadan kaldıracaktır, ancak herhangi bir şekilde bu bir dizi değilse, bir çalışma zamanı hatası alırsınız... 
    //         //türün eşleşmesini sağlamak ve bu tür hatalardan kaçınmak için TypeScript kullanmamızın nedenlerinden biri de budur.
    //         //Derleme hatasını önlemek için, Bu, hatayı ortadan kaldırabilir, ancak değişkenin gerçek türünü asla değiştirmez.
    //         //Ya bu bir dizi değil de nesneyse? Eğer bir nesne ise '' yerine {} olacaktır.
    //         // const {data} = await axios.get(Config.API_URL ?? '');
    //         // const {data} = await axios.get(Config.API_URL!);
    //         // const {data} = await axios.get(Config.API_URL as string);
    //         setData(productData);
    //         setLoading(false);    
    //     } catch (ex) {
    //         let errorMessage = "Failed to do something exceptional";
    //         if (ex instanceof Error) {
    //             errorMessage = ex.message;
    //           }
    //         setError(errorMessage);
    //         setLoading(false);
    //     }
    //     // catch(err:any){
    //     //     setError(err.messgae)
    //     // }
    // };

    const { loading, data, error } = useFetch(Config.API_PRODUCT_URL);

    const handleProductSelect = (id) => {
        navigation.navigate('DetailsPage', { id });
    };

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

            <FlatList data={data} renderItem={renderProduct} />
            {/* <FlatList  data={[1,2,3]} renderItem={data=><Text>{data.item}</Text>}  /> */}
            {/* Data propertisi ben ekrana ne basmak istiyorsam onun Array halidir */}
            {/* RenderItem propertisi biz ekrana componenti nasıl bamak istiyorsak, bize o noktada yardımcı olan bir callback function */}
            {/* Devcut data sayısı kadar RenderItem tetiklenir ve ekrana verileri basar */}

        </SafeAreaView>

    );
};

export default Products;