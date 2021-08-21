import React from 'react';
import { Image, StyleSheet } from 'react-native';

const BG_IMG =
  "https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

export function BackgroundImage() {
  return (
    <Image 
      source={{ uri: BG_IMG }}
      style={StyleSheet.absoluteFillObject}
      blurRadius={1}
    />
  );
}