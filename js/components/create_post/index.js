
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Button, View, Text, InputGroup, Input, Icon, Image, List, ListItem, Thumbnail } from 'native-base';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const sankhadeep = require('../../../img/contacts/bicycle.png');

class CreatePost extends Component { //eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={[styles.headerView, styles.additionalHeaderViw]}>
          <Button transparent onPress={this.props.openDrawer} style={{justifyContent: 'center'}}>
              <Icon name="md-arrow-round-back" style={{color: 'white' }} />
          </Button>
          <Text style={styles.headerText}>CREATE POST</Text>
          <Button transparent >
            <Text style={{color:'orange'}}>Save</Text>
          </Button>
        </View>

        <Content>
          <View style={{flexDirection:'row', flex:1, margin:10}}>
            <Thumbnail square size={100} source={sankhadeep} />
            <View style={{flex:1, flexDirection:'column', marginLeft:15}}>
              <Text style={styles.tvDescription}>"Personally I blame @lamSteveHarvey for this."</Text>
              <Text style={styles.tvDescription}>- jimmy #Kimmel #Oscars.</Text>
              <Text style={styles.tvDescription}>I cant believe that they found my bike</Text>
              <Text style={styles.tvNumber}>209</Text>
            </View>
          </View>
          {/*<List>
            <ListItem>
              
            </ListItem>
          </List>*/}
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(CreatePost);
