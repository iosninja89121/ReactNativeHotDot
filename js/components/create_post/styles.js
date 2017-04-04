
const React = require('react-native');

const { StyleSheet } = React;

import theme from '../../themes/base-theme';

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },

  headerView: theme.headerViewStyle,
  headerText: theme.haderTextStyle,

  additionalHeaderViw: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },

  tvDescription: {
    color: '#4A4A4A', 
    fontSize: 14, 
  },

  tvNumber: {
    color: 'red', 
    fontSize: 14, 
  }
});
