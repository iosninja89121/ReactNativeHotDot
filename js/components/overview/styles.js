
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

  content: {
    paddingLeft:20,
    paddingRight:20,
  },

  additionalContent: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'space-between'
  },

  footer: {
    height:40, 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },

  tvDescription: {
    color: '#4A4A4A', 
    fontSize: 14, 
  },

  mt10: {marginTop:10},
  mt20: {marginTop:20},
});
