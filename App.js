import React, { Component } from 'react';
import AppContainer from './Navigation/navigation';
import { Root } from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }
render() {
  console.disableYellowBox = true;
    
      return (
        <Root>
          <AppContainer />
        </Root>
      );
    }
  }
