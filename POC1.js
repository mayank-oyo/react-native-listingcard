import React, { useState } from 'react';
import { StyleSheet, View, Button, Image, FlatList } from 'react-native';

import { data } from './components/ListingCard/hotelData';
import ListingCard from './components/ListingCard'


export default function App() {

  const renderItem = (item) => {
    return (
      <ListingCard data={item}/>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
}
