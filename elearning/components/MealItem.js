import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

const MealItem = props => {
  return (
    <TouchableOpacity onPress={props.onSelectMeal}>
      <View style={styles.mealItem}>
        <View style={{...styles.mealRow, ...styles.mealHeader}}>
        <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
          <Text style={styles.title} /*numberOfLines={1} causes missing text*/>{props.title}</Text>
          </ImageBackground>
        </View>
        <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    mealItem:{
        height:200,
        width:'100%',
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        overflow:'hidden'
    },
    mealRow:{
        flexDirection:'row'
    },
    mealHeader:{
        height:"85%",
    },
    mealDetail:{
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',
        height:'15%'
    },
    bgImage:{
        height:'100%',
        width:'100%',
        justifyContent:'flex-end',
    },
    title:{
        fontSize:'OpenSans-bold',
        fontSize:20,
        color:'white',
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5,
        paddingHorizontal:12,
        textAlign:'center'
    }
});

export default MealItem;
