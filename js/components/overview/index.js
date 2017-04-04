
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Container, Content, Button, View, Text, Input, Icon, Thumbnail } from 'native-base';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const atul = require('../../../img/contacts/atul.png');
const cardImage = require('../../../img/drawer-cover.png');
const ic_fb = require('../../../img/ic_fb.png');
const ic_dropbox = require('../../../img/ic_dropbox.png');
const ic_instagram = require('../../../img/ic_instagram.png');
const ic_twitter = require('../../../img/ic_twitter.png');
const ic_linkedin = require('../../../img/ic_linkedin.png');

class Overview extends Component { //eslint-disable-line

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
          <Text style={styles.headerText}>Overview</Text>
          <Button transparent >
            <Text style={{color:'orange'}}>Follow</Text>
          </Button>
        </View>

        <View style={styles.additionalContent}>

          <View style={{flexDirection:'column'}}>
            
            <View style={[styles.additionalHeaderViw, {flex: 1, margin:10}]}>
              <View style={{flexDirection:'row'}}>
                <Thumbnail source={atul} />
                <Text style={[styles.tvDescription, {marginLeft:10}]}>Sarah</Text>  
              </View>
              <Text style={styles.tvDescription}>Chicago, IL</Text>
            </View>
            
            <Image style={{ resizeMode: 'cover', width: null, height:200 }} source={cardImage} />
            
            <View style={[styles.additionalHeaderViw, {flex: 1, margin:10}]}>
              <Text style={styles.tvDescription}>Farmer and Builder</Text>
              <View style={{flexDirection:'row'}}>
                <Button transparent color="gray">
                  <Icon name="ios-heart" style={{color:'gray'}} />
                  10
                </Button>
                <Button transparent color="gray">
                  <Icon name="ios-text" style={{color:'gray'}}/>
                  5
                </Button>
              </View>
            </View>

            <Text style={[styles.tvDescription, {margin:10}]}>
              Honoring the Profession of Locksmithing, being just and generous to its members, and helping sustain them in their service to humanity, fulfilling my obligating to those who entrust me.
            </Text>

            <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around'}}>
              <Button transparent style={{width:50, height:50}}>
                <Thumbnail size={50} source={ic_fb} />
              </Button>
              <Button transparent style={{width:50, height:50}}>
                <Thumbnail size={50} source={ic_twitter} />
              </Button>
              <Button transparent style={{width:50, height:50}}>
                <Thumbnail size={50} source={ic_linkedin} />
              </Button>
              <Button transparent style={{width:50, height:50}}>
                  <Thumbnail size={50} source={ic_dropbox} />
              </Button>
              <Button transparent style={{width:50, height:50}}>
                  <Thumbnail size={50} source={ic_instagram} />
              </Button>
              
            </View>
          </View>

          <View style={styles.footer}>
            <Button transparent color="#4A4A4A">
              Credentials
            </Button>
            <Button transparent>
              <Icon name="ios-arrow-forward" style={{color: 'red'}} />
            </Button>
          </View>
        </View>
      
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

export default connect(mapStateToProps, bindAction)(Overview);
