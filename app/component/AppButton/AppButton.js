import React from 'react';
import { View,TouchableOpacity,Text } from 'react-native';
import styles from './Styles';
import color from '../../config/Colors';

function AppButton({title,onPress,Color="primary"}) {
    return (
        
        <TouchableOpacity style = {[styles.Button,{backgroundColor:color[Color]}]} onPress={onPress}>
        <Text style= {styles.Text}>
         {title}
        </Text>
 
        </TouchableOpacity>
        
    );
}

export default AppButton;

