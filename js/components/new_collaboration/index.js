
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Button, View, Text, InputGroup, Input } from 'native-base';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class NewCollaboration extends Component { //eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>NEW PROJECT</Text>
        </View>

        <Content padder style={styles.content}>
          <Text style={styles.tvDescription}>
            Create a new collaboration below by naming it and adding collaborators.
          </Text>
          <View style={{marginTop:40}}>
            <InputGroup borderType="regular">
              <Input placeholder="Project Name" style={{fontSize:14}} />
            </InputGroup>
            <InputGroup borderType="regular" style={{marginTop: -1}}>
              <Input placeholder="Invite Friends" style={{fontSize:14}} />
            </InputGroup>
          </View>

          <View style={{marginTop:20}}>
            <Button block style={{backgroundColor: '#CD0806'}}>CREATE</Button>
            <Button block transparent onPress={this.props.openDrawer}>
              <Text style={{color: 'gray', fontSize: 14 }}>
                Cancel
              </Text>
            </Button>
          </View>
          
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

export default connect(mapStateToProps, bindAction)(NewCollaboration);
