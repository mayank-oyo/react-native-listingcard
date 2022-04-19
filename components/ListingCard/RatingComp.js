import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

export default function RatingComp({ rating, ratingOnClick }) {
  return (
    <View style={styles.ratingContainer} onClick={ratingOnClick}>
      <View style={styles.ratingInner}>
        <Text style={styles.valueClass}>★ {rating.value}</Text>
        <Text style={styles.countClass}> ({rating.count})</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingContainer: {
    position: 'absolute',
    top: '116px',
    left: '16px',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '4px',
  },
  ratingInner: {
    borderRadius: '4px',
    paddingLeft: '8px',
    paddingRight: '8px',
    backgroundColor: 'rgb(255, 255, 255)',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '24px',
    flexDirection: 'row',
  },
  valueClass: {
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.2px',
  },
  countClass: {
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.2px',
    color: 'rgba(0, 0, 0, 0.5)',
  },
});
