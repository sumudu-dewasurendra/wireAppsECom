import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import ItemView from '../components/ItemView';
import { useNavigation } from '@react-navigation/native';
import { useGetAllProductsQuery } from '../reducers/api/productsAPI';

const HomeScreen = () => {

    const { data, isLoading } = useGetAllProductsQuery();

    const [searchText, setSearchText] = useState('')
    const [products, setProducts] = useState(data?.data || [])

    const navigation = useNavigation();

    useEffect(() => {
        if (searchText === '') {
            setProducts(data?.data || [])
            return
        }
        const filteredProducts = data?.data.filter(product => product.brandName.toLowerCase().includes(searchText.toLowerCase()))
        setProducts(filteredProducts)
    }, [searchText])

    useEffect(() => {
        setProducts(data?.data || [])
    }, [data])

    function navigateToItemDetailedView(product) {
        navigation.navigate('ItemDetailedView',  {
            product: product
        })
    }
    
    return (
        <View
            className={"bg-primary flex h-full items-center pt-[100px] pl-4 pr-4"}>
        <TextInput
            placeholder="Search Product by brand name"
            className={ "h-[50px] p-3 bg-primaryLight w-full border border-solid border-gray-300 rounded-lg" }
            onChangeText={(txt) => setSearchText(txt)}
        />
        <Text 
            className="mt-6 mb-4 text-4xl text-white font-bold self-start">
            Featured
        </Text>
        <FlatList
            className={"flex h-full w-full"}
            data={products || []}
            extraData={products || []}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => 
                <ItemView
                    product={item}
                    onPress={() => navigateToItemDetailedView(item)}
                />}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        />
        </View>
    );
}

export default HomeScreen;