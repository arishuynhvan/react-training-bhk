import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Icon}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor  }
    />
  );
};

export default CustomHeaderButton;
