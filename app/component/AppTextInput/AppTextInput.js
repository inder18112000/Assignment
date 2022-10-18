import { View, Text, TextInput ,StyleSheet,Platform} from 'react-native'
import React,{useRef} from 'react'
import {FontAwesome} from '@expo/vector-icons'
import { Fumi } from 'react-native-textinput-effects';

import defaultStyle from './../../config/Style'
import Colors from '../../config/Colors'


export default function AppTextInput({icon,...otherProps}) {
  const input = useRef();
  return (
  
    <View style={styles.container}>
    <Fumi
      // label={label}
      iconClass={FontAwesome}
      // iconName={'email'}
      inputStyle={{color:Colors.dark}}
      iconColor={Colors.primary}
      iconSize={26}
      iconWidth={40}
      inputPadding={12}
      style={{flex: 1,margin:0,}}
      {...otherProps}
  />

     {/* {icon && <MaterialCommunityIcons
      name = {icon}
      size = {20}
      color = {defaultStyle.Colors.medium}
      style = {styles.icon} 
      ></MaterialCommunityIcons>}
      <TextInput ref={input} style={[defaultStyle.text,{flex:1}]} {...otherProps}/> */}

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      alignItems:"center",
        backgroundColor:defaultStyle.Colors.light,
        borderRadius:5,
        flexDirection:"row",
        borderWidth:2,
        borderColor:defaultStyle.Colors.medium,
        width:"95%",
        margin:"2.5%",
        overflow:"hidden",
    },
    icon:{
        marginRight:10  
    }

})