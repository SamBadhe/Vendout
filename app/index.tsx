import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; 
import { useProductStore } from '../products/ProductStore'; 
import ProductCard from '../screens/ProductCard'; 
import SearchBar from '../screens/Search'; 

export default function ProductListScreen() {
  // Get products from the zustand store
  const products = useProductStore(state => state.products);

  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Search Bar for filtering products */}
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />

      {/* Render filtered products in a FlatList */}
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <Link href={`/ProductDetails?id=${item.id}`} asChild>
            <ProductCard product={item} />
          </Link>
        )}
        keyExtractor={item => item.id}
        numColumns={1} 
        contentContainerStyle={styles.productList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2ebf2',
    padding: 20,
  },
  productList: {
    padding: 10,
  },
});
