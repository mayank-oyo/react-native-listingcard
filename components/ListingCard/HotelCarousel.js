import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

export default function HotelCarousel({ images }) {
  const renderItem = (item) => {
    return (
      <View>
        <View style={styles.cardContainer}>
          <Image source={{ uri: item }} style={styles.image} />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      horizontal
      data={images}
      renderItem={({ item }) => renderItem(item)}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
  cardContainer: {
    width: 192,
    height: 128,
    overflow: 'scroll',
    marginRight: '4px',
  },
});
