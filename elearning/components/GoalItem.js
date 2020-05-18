import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const GoalItem = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onDeleteGoal(props.id)}>
            <View  key={props.id} style={styles.goalListItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    goalListItem: {
        padding: 10,
        marginTop: 5,
        backgroundColor: "#fcc",
        borderColor: "#f55",
        borderWidth: 1,
        width: "80%",
        alignSelf: "center",
    },
});

export default GoalItem;
