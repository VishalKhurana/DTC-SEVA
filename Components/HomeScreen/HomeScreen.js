import React, { Component } from "react";
import { StatusBar, TouchableOpacity, View, StyleSheet } from "react-native";
import { DrawerActions } from 'react-navigation-drawer';
import * as Font from 'expo-font';
import Firebase1 from '../firebase/firebase';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base";
export default class HomeScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: ''

    }
  }
    //this.fetchData=this.fetchData.bind(this);

    
  
   fetchData = async() => {
    var ref = await Firebase1.database().ref('Users');
    if (this.props.navigation.state.params.isEmail == true) {
      var f = this.props.navigation.state.params.email.toString();
      await ref.orderByChild('email').equalTo(this.props.navigation.state.params.email).on("value",  (snapshot)=> {
        var key;
        snapshot.forEach((function (child) {
          key = child.key;
        }));
        console.log(key);
        //console.log((snapshot.child(key + '/age')).val());
            let getName=(snapshot.child(key + '/name')).val();
        this.setState({ name: getName });
        // console.log((snapshot.child(key+'/name')).val()); 
      });
    }
    else {
      var s = this.props.navigation.state.params.email.toString();
     await ref.orderByChild('username').equalTo(this.props.navigation.state.params.email).on("value", (snapshot)=>{
        //console.log(snapshot.child(s+'/name').val())
        let getName=(snapshot.child(s + '/name')).val();

        this.setState({ name: getName });
       
      })
    }



  }
  componentWillMount() {
    this.fetchData();


  }


  // }

  render() {





    return (

      <View >
        <StatusBar barStyle="dark-content" hidden={true} backgroundColor="black" />
        <Header style={{ backgroundColor: 'black' }}>
          <Left>
            <Button
              transparent
              onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()) }}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body style={{ backgroundColor: 'black' }}>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Card>
          <CardItem>
            <Text>Hi {this.state.name}</Text>
            {/* {this.props.navigation.state.params.email} */}
          </CardItem>
        </Card>
        <TouchableOpacity style={styles.fbBtn}
          onPress={() => { this.props.navigation.navigate('QR') }}><Text style={styles.fbText}>Generate General Ticket</Text></TouchableOpacity>
        <TouchableOpacity style={styles.fbBtn_2}><Text style={styles.fbText_2}>Generate Pink Ticket</Text></TouchableOpacity>
      </View>







    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  ticketBtn: {
    marginTop: '5%',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: 'white',
    width: '40%',
    height: '10%',
    marginLeft: '34%',
    textAlign: 'center',
    borderWidth: 1,
    //backgroundColor:'white',
    borderEndColor: 'black',
  },
  ticketTxt: {
    marginTop: '5%',
    padding: 2

  },
  fbBtn: {
    marginTop: '40%',
    // backgroundColor:'#3b5998',
    backgroundColor: 'black',
    height: 'auto',
    textAlign: 'center',
    marginHorizontal: '15%',
    padding: '2%',
    borderRadius: 10

  },
  fbText: {
    color: 'white',
    textAlign: 'center',
    //alignContent:'center',
    justifyContent: 'center'
  },
  fbBtn_2: {
    marginTop: '40%',
    // backgroundColor:'#3b5998',
    backgroundColor: 'white',
    height: 'auto',
    textAlign: 'center',
    marginHorizontal: '15%',
    padding: '2%',
    borderRadius: 10,
    // borderColor:'black'
    //backgroundColor:'white',
    borderEndColor: 'black',
    borderWidth: 1

  },
  fbText_2: {
    color: 'black',
    textAlign: 'center',
    //alignContent:'center',
    justifyContent: 'center'
  }
})

