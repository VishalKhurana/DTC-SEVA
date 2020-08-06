import React from "react";
import { AppRegistry, Image, StatusBar,Card,CardItem ,StyleSheet,View,TouchableOpacity} from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import { Button } from 'react-native-elements';

import { Avatar } from 'react-native-elements';
const routes = ["Home", "Chats", "Profile"];
export default class SideBar extends React.PureComponent {
  state={
    first:false

  }
    

      handleImageChange = (response) => {

    };
    toLogin=()=>{
      this.props.navigation.navigate('Login');
    }

  render() {
    if(this.state.first==false)
    {
  //console.log(this.props.navigation.state.params.isEmail);
    this.setState({first:true})
    }
    var name=(this.props.navigation.state.params.email);
    return (
      <Container style={{backgroundColor:'rgb(242,242,242'}}>
        <Content>
        <Avatar
        rounded
        source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
  size="large"
  title="BP"
  interactive
  onChange={this.handleImageChange}
  containerStyle={{flex: 1, marginLeft: 30, marginTop: 10}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
        

<TouchableOpacity
          style={styles.btn}
          onPress={() => navigate('HomeScreen')}
          >
          <Text style={styles.txt}>Hello, {name}</Text>
 </TouchableOpacity>
 <TouchableOpacity
          style={styles.btns}
          onPress={() => navigate('HomeScreen')}
          >
          <Text style={styles.txt}>History</Text>
 </TouchableOpacity>
 <TouchableOpacity
          style={styles.btns}
          onPress={this.toLogin}
          >
          <Text style={styles.txt}>Logout</Text>
 </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}
const styles=StyleSheet.create({
  btn:{
    color:'white',
    backgroundColor:'white',
    marginTop:'10%',
    //marginLeft:'15%',
    borderColor:'rgb(242, 242, 242)',
    borderWidth:1
  },
  btns:{
    color:'white',
    backgroundColor:'white',
    //marginTop:'10%',
    //marginLeft:'15%',
    borderColor:'rgb(242, 242, 242)',
    borderWidth:1
  },
  txt:{
    marginLeft:'0%',
    padding:15
  }
})