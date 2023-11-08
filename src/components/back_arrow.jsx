import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'
import Icon, { Icons } from './icons'

export default function Back_Arrow() {
  return (
    <TouchableOpacity
    style={styles.itemContainer}
    activeOpacity={0.8}
    onPress={onPress}>
    <Icon
      name={'left'}
      type={Icons.AntDesign}
      color={COLORS.BLACK}
      size={rf(2.5)}
    />
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
})