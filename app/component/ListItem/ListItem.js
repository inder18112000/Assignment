import { View,Image,StyleSheet, TouchableHighlight} from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import colors from '../../config/Colors'
import {Swipeable,GestureHandlerRootView} from 'react-native-gesture-handler';

function ListItem({title,subTitle,image,onPress,renderRightActions, ImageComponent}) {
  return (
    <GestureHandlerRootView>
 
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
            {ImageComponent}
            {image && <Image source={image} style={styles.image}/>}
            <View style= {styles.subcontainer}>
                <AppText style={styles.title}>{title}</AppText>
                {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
      
    </View>
    </TouchableHighlight>
    </Swipeable>
   </GestureHandlerRootView>
  );
}
export default ListItem;
const styles = StyleSheet.create({
    subcontainer:{
        marginLeft:10,
        justifyContent: "center",
    },
    container:{
        flexDirection:"row",
        paddingTop:10, 
        paddingStart:10,
        backgroundColor:colors.white,
        
    },
    image: {
        width:70,
        height:70,
        borderRadius:35,
        

    },
    subTitle: {
        color:colors.medium
    },
    title: {
        fontWeight:"500",


    }
});