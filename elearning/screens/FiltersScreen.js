import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Switch, Platform} from 'react-native';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{true: Colors.primaryColor}}
        thumbColor={Platform.OS === 'ios' ? '' : Colors.primaryColor}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = props => {
  const {navigation} = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters=useCallback(()=> {
      const appliedFilters = {
          glutenFree:isGlutenFree,
          lactoseFree:isLactoseFree,
          vegan:isVegan,
          isVegetarian:isVegetarian
      }
      console.log(appliedFilters);
  }, [isGlutenFree,isLactoseFree,isVegan,isVegetarian]);

  // TODO: Fix warning about non-serializable values
  // https://reactnavigation.org/docs/troubleshooting/#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state
  useEffect(()=>{
      //save a pointer to the object (functor?) saveFilters but not executing this function
      props.navigation.setParams({save:saveFilters});
  },[saveFilters, navigation]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch label = 'Gluten-free' state ={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)}/>
      <FilterSwitch label = 'Lactose-free' state ={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)}/>
      <FilterSwitch label = 'Vegan' state ={isVegan} onChange={newValue => setIsVegan(newValue)}/>
      <FilterSwitch label = 'Vegetarian' state ={isVegetarian} onChange={newValue => setIsVegetarian(newValue)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 'OpenSans-Bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical:10
  },
});

export default FiltersScreen;
