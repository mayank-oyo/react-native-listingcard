import React, { useState } from 'react';
import { StyleSheet, View, Button, Image, FlatList } from 'react-native';

// import { data } from './components/ListingCard/hotelData';
import ListingCard from './components/ListingCard'


export default function App(props) {

  const {
    data,
    listingCardOnClick,
    ratingOnClick,
    widgetViewGa,
    primaryCta,
    secondaryCta,
    primaryCtaHandler,
    secondaryCtaHandler
  } = props;

  const renderItem = (item) => {
    return (
      <ListingCard
        data={item}
        listingCardOnClick={listingCardOnClick}
        ratingOnClick={ratingOnClick}
        widgetViewGa={widgetViewGa}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        primaryCtaHandler={primaryCtaHandler}
        secondaryCtaHandler={secondaryCtaHandler}
      />
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
