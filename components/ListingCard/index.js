import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import HotelCarousel from './HotelCarousel';
import RatingComp from './RatingComp';

export default function ListingCard({ data }) {
  const {
    hotel_images,
    name,
    address,
    urgency_info: urgencyInfo,
    pricing: { bookingPrice, discountPercentage, slashedPrice },
    rating,
  } = data;
  return (
    <View style={styles.listingCard}>
      <HotelCarousel images={hotel_images} />
      <RatingComp rating={rating} />
      <View style={styles.innerWrapper}>
        <Text style={styles.textClass}>{name}</Text>
        <Text style={styles.addressClass}>{address}</Text>
        <Text style={styles.urgencyClass}>👉{urgencyInfo}</Text>
        <View style={styles.priceWrapperClass}>
          <Text style={styles.bookingPriceClass}>{bookingPrice}</Text>
          <Text style={styles.slashedPriceClass}>{slashedPrice}</Text>
          <Text style={styles.discountClass}>{discountPercentage}% off</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listingCard: {
    border: '1px solid rgba(0,0,0,0.12)',
    borderRadius: '6px',
    marginLeft: '16px',
    marginRight: '16px',
    overflow: 'hidden',
    marginBottom: '16px',
    marginTop: '16px',
  },
  innerWrapper: {
    paddingTop: '24px',
    paddingRight: '16px',
    paddingLeft: '16px',
    paddingBottom: '16px',
  },
  textClass: {
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
  },
  addressClass: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.2px',
    marginBottom: '8px',
  },
  urgencyClass: {
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.2px',
    color: 'rgb(223, 150, 65)',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  },
  priceWrapperClass: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookingPriceClass: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 'bold',
    marginRight: '8px',
  },
  slashedPriceClass: {
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.2px',
    marginRight: '8px',
    textDecoration: 'line-through',
  },
  discountClass: {
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.2px',
    color: 'rgb(0, 178, 138)',
  },
});
