
const React = require('react-native');

const { StyleSheet } = React;

import theme from '../../themes/base-theme';

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },

  headerView: theme.headerViewStyle,
  headerText: theme.haderTextStyle,

  content: {
    paddingLeft:20,
    paddingRight:20,
  },

  tvDescription: {
    color: '#4A4A4A', 
    fontSize: 14, 
    marginTop:20
  },
});
