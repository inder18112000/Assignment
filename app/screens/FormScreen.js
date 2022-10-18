import {StyleSheet,Image} from 'react-native'
import React from 'react'
import Screen from '../component/Screen/Screen'

import { Formik } from 'formik'
import * as Yup from 'yup'
import YupPassword from 'yup-password'
YupPassword(Yup)

// import AppText from '../component/AppTextInput/AppTextInput'
import SubmitButton from '../component/SubmitButton/SubmitButton'
import AppFormField from '../component/AppFormField/AppFormField'

export default function FormScreen({navigation}) {
 
const validationschema = Yup.object().shape(
    {
        name:Yup.string().required().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").label("name"),
        password:Yup.string().required().min(8).minLowercase(1,"Minimum 1 lowercase is required").minNumbers(1,"Number value is required...").minUppercase(1,"Minimum 1 uppercase is required...").minSymbols(1,"Minimum 1 symbols is required...").label("Password"),
        phone:Yup.string().required().matches(/^[0-9]+$/, "Only numbers are allowed for this field ").label("PhoneNo")
    }
);
  return (

    <Screen style={styles.container}>
        
            <Formik
            initialValues={{name:"",password:""}}
            onSubmit={values=>navigation.navigate("Third Page",values)}
            validationSchema = {validationschema}
            >
                {()=>(
                    <>
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            label="Enter your Name"                        
                            iconName="user"
                            name="name">
                        </AppFormField>

                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            iconName="phone"
                            label="Phone Number"
                            keyboardType="number"
                           
                           
                            name="phone">
                        </AppFormField>

                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            iconName="lock"
                            label="Enter Password"
                            secureTextEntry
                            textContentType="password"
                            name="password">
                        </AppFormField>
                        
                       
                        <SubmitButton
                            title="Submit - View"
                        />
                       

                    </>
                )}
            </Formik>
    </Screen>
  )
}

const styles = StyleSheet.create({
    container:{padding:10},
   
  
})