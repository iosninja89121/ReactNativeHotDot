
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Button, View, Text, InputGroup, Input, Icon, Image, Footer, Title } from 'native-base';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const ic_back = require('../../../img/ic_back.png');

class Community extends Component { //eslint-disable-line

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
          <Text style={styles.headerText}>Community</Text>
          <Button transparent >
            <Text style={{color:'orange'}}>Follow</Text>
          </Button>
        </View>

        <View style={[styles.content, styles.additionalContent]}>
            <View>
              <Text style={[styles.tvDescription, styles.mt10]}>
                Services
              </Text>
              <Text style={[styles.tvDescription, styles.mt20]}>
                Honoring the Profession of Locksmithing, being just and generous to its memebers, and helping sustain them in their service tohumanit, fulfilling my obligation to those who entrust me with their safety and security, disclosing to all whom I serve, what they must know to maintain their security, and the means necessary to maintain that security practicing my art with integrity
              </Text>
            </View>
            <View style={styles.footer}>
              <Button transparent color="#4A4A4A">
                <Icon name="ios-arrow-back" style={{color: 'red'}} />
                Overview
              </Button>
              <Button iconRight transparent color="#4A4A4A">
                Portfolio
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

export default connect(mapStateToProps, bindAction)(Community);
