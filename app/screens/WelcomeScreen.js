import {Text,Image,StatusBar,StyleSheet,ImageBackground,Platform,View} from 'react-native';
import React,{useState} from 'react'
import AppButton from '../component/AppButton/AppButton'
import colors from '../config/Colors';




function WelcomeView({navigation}) 
{
   const [isShow,setShow] = useState(false);
    return (
       
         <View style={styles.BtnContainer}>
            <AppButton  title="Button 1" onPress={()=>setShow(true)} />
            {isShow && <AppButton  title="Action 1" onPress={()=>console.log("Please press Action 2 button")} Color="secondary"/>}
            {isShow && <AppButton  title="Action 2" onPress={()=>navigation.navigate("Second Page")} Color="secondary"/>}
            {isShow && <AppButton  title="Action 3" onPress={()=>console.log("Please press Action 2 button")} Color="secondary"/>}
         </View>
   
       
          
      );
}

export default WelcomeView;

const styles = StyleSheet.create({
   BtnContainer: {
      width: '100%',
   
      padding:10
   }
   ,
    background: {
        flex: 1,
        
        alignItems: "center",
       
        marginTop: Platform.OS ==='android'?StatusBar.currentHeight:0,
        
    },
    Text:{
      position: "absolute",
      fontSize:25,
      fontWeight:"600",
      top: 190
    }
 })