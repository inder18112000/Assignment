import React from 'react';
import { SafeAreaView, StyleSheet, View} from 'react-native';
import Constants from 'expo-constants'

function Screen({children,style})
{
    return (
        <SafeAreaView style={[styles,style]}>
        <View style = {style}>
        {children}
        </View>
        </SafeAreaView>
    );
}

export default Screen;

const styles = StyleSheet.create({
    paddingTop:Constants.statusBarHeight,
    flex: 1
})