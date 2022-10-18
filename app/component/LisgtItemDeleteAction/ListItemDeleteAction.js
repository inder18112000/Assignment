import { View, StyleSheet,TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Colors from '../../config/Colors'

export default function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles}>
        <MaterialCommunityIcons
        name='trash-can'
        size={30}
        color={Colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({

    backgroundColor: Colors.danger,
    width:70,
    alignItems: 'center',
    justifyContent: 'center'
    
})