import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#e0f7fa', 
        },
        headerTintColor: '#000000', 
        tabBarStyle: {
          backgroundColor: '#e0f7fa', 
        },
        tabBarActiveTintColor: '#000000', 
        tabBarInactiveTintColor: '#000000', 
      }}
    >
      {/* Product List Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Products',
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />

      {/* Product Details Tab */}
      <Tabs.Screen
        name="ProductDetails"
        options={{
          title: 'Product Details',
          tabBarIcon: ({ color }) => <TabBarIcon name="information-circle" color={color} />,
        }}
      />
    </Tabs>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}
