import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
            <Text>id: {props.route.params.itemId}, title: {props.route.params.itemTitle}</Text>
            <Button title="Go to Meal Detail!" onPress={() => props.navigation.navigate('Meal Detail')} />
            <Button title="Go Back" onPress={props.navigation.goBack} />
        </View>);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default CategoryMealsScreen;