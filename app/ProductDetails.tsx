import React from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router'; 
import { useProductStore } from '../products/ProductStore'; 
import { TouchableOpacity } from 'react-native';

export default function ProductDetailsScreen() {
  // Get the product ID from the URL params
  const { id } = useLocalSearchParams();
  
  // Find the product from the store based on the ID
  const product = useProductStore(state => state.products.find(p => p.id === id));

  // If product is not found, show an error message
  if (!product) {
    return <Text style={styles.errorText}>Product not found</Text>;
  }

  // Handle Buy Now action
  const handleBuyNow = () => {
    Alert.alert('Success', `You've purchased the ${product.name}!`);
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
      
      {/* Buy Now Button */}
      <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
        <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0f7fa',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#4CAF50',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: '#43a047',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
  },
});
