import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from '../component/AppText/AppText';
import { useRoute } from '@react-navigation/native'
const ViewScreen = () => {
    const route = useRoute();
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>

            <AppText style={{fontWeight: 'bold',fontSize:20,textAlign: 'left'}}>Name: {route.params.name}</AppText>
            <AppText style={{fontWeight: 'bold',fontSize:20,textAlign: 'left'}}>Phone Number: {route.params.phone}</AppText>
            <AppText style={{fontWeight: 'bold',fontSize:20,textAlign: 'left'}}>Password: {route.params.password}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        marginTop:20
        
    },
    subcontainer:{
        margin:10,
        padding:20,
        borderRadius:15,
        borderWidth:2,
        borderColor:'green'
    }
})

export default ViewScreen;
