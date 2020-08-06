import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  StatusBar, TextInput,TouchableOpacity
} from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Card, CardItem } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';


export default class Go extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Source: '',
      Destination: '',
      Driver_Name:'',
      Conductor_Name:'',
      vehicle_Number:'',
      Route:''

    }
    this.set_state=this.set_state.bind(this);

  }
  openDrawer = () => {
    this.props.navigation.navi(DrawerActions.openDrawer());
  }
  // async componentDidMount() {
  //   await Font.loadAsync({
  //     Roboto: require('native-base/Fonts/Roboto.ttf'),
  //     Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  //   });
  //   this.setState({ loading: false });
  // }
    async componentDidMount()
    {
      await this.set_state;
    }
  set_state=async()=>{
    await this.setState({Driver_Name:this.props.navigation.state.params.Driver_Name,vehicle_Number:this.props.navigation.state.params.Vehicle_Number,Conductor_Name:this.props.navigation.state.params.Conductor_Name,Route:this.props.navigation.state.params.Route})
  }
  clickme = () => {
    var data_Source = this.state.Source;
    var data_Destination = this.state.Destination;
    console.log(data_Source);
    console.log(data_Destination);
    var vno=this.props.navigation.state.params.Vehicle_Number;
    var dn=this.props.navigation.state.params.Driver_Name;
    var cn=this.props.navigation.state.params.Conductor_Name;
    var route=this.props.navigation.state.params.Route;

    if (data_Source == "") {
      alert("Please Select a Source");
      return;
    }
    if (data_Destination == "") {
      alert("Please Select a Destination")
      return;

    }
    if (data_Source == data_Destination) {
      alert("Source and Destination cannot be same")
      return;
    }
   
     //console.log(this.state.Conductor_Name);
    this.props.navigation.navigate('Ticket',{Driver_Name:dn,Route:route,Vehicle_Number:vno,Conductor_Name:cn,Source:data_Source,Destination:data_Destination});

  }

  render() {
    this.set_state;

   
    //console.log(this.props.navigation.state.params.keys)
    return (<View>
      <StatusBar barStyle="dark-content" hidden={true} backgroundColor="black" />
      <Header style={{ backgroundColor: 'black' }}>
        <Left>
          <Button
            transparent
            onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()) }}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body style={{ backgroundColor: 'black' }}>
    <Title>{this.props.navigation.state.params.Route}</Title>
        </Body>
        <Right />
      </Header>
      <View style={{marginTop:'40%'}}>
      <Text style={styles.welcome}>
        DTC E-Ticketing
        </Text>
      <Picker
        style={{ width: '80%',alignSelf:'center' }}
        mode="dropdown"
        selectedValue={this.state.Source}
        onValueChange={(itemValues, itemIndex) => this.setState({ Source: itemValues })}
       >
        <Picker.Item label="Select Source" value="" />
        {this.props.navigation.state.params.keys.slice(1).map((item, index) => {
          return (<Picker.Item label={item} value={item} key={index+1} />)
        })}
      </Picker>
      <Picker
        style={{ width: '80%',alignSelf:'center' }}
        mode="dropdown"
        selectedValue={this.state.Destination}
        onValueChange={(itemValues, itemIndex) => this.setState({Destination: itemValues })}
        >
        <Picker.Item label="Select Destination" value="" />
        {this.props.navigation.state.params.keys.slice(1).map((item, index) => {
          //console.log(index)
          return (<Picker.Item label={item} value={item} key={index+1} />)
        })}
      </Picker>
      {/* <TextInput placeholder="Enter Number of Tickets"></TextInput> */}
    
      <TouchableOpacity  style={{backgroundColor:'black',color:'white',height:'17%',margin:'5%'}}onPress={this.clickme} ><Text style={{color:'white',alignSelf:'center',alignContent:'center',marginTop:'2%'}}>Click Here</Text></TouchableOpacity>
</View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});