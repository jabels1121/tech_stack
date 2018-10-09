// import libraries for making component
import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';


// Make a component
const Header = (props) => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{ props.headerText }</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    viewStyle: Platform.select(
        {
            ios: {
                height: 60,
                backgroundColor: '#f1f4ff',
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 2,
                position: 'relative',
                marginBottom: 15
            },
            android: {
                height: 60,
                backgroundColor: '#2e2f34',
                alignItems: 'flex-start',
                paddingLeft: '2%',
                justifyContent: 'center',
                elevation: 2,
                position: 'relative',
            }
        }
    ),
    textStyle: Platform.select({
        ios: {
            fontSize: 22.5,
            color: '#000000'
        },
        android: {
            fontSize: 22.5,
            color: '#ffffff'
        }
    })
});
// Make a component available to other parts of the app
export { Header };