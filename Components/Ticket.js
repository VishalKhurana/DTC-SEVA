import React,{Component} from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import { Card} from 'react-native-elements';

// import { DangerZone } from 'expo';
// const  {Lottie}  = DangerZone;

//import Card

export default class Tickets extends Component {
  constructor(props)
  { super(props);
    this.state = {
      Source:'',
      Destination:'',
      Route:'',
      Vehicle_Number:''
        // animation: null
      };
    }
    componentWillMount()
    {
      this.setState({Source:this.props.navigation.state.params.Source,
        Destination:this.props.navigation.state.params.Destination,
        Route:this.props.navigation.state.params.Route,
      Vehicle_Number:this.props.navigation.state.params.Vehicle_Number})
    }
 
    render() {
      
      //console.log(this.props.navigation.state.params.Driver_Name);
      console.log(this.props.navigation.state.params.Vehicle_Number);
        return (
          <View>
            <Card title="DTC BUS TICKET" image={require('../assets/logo.png')} >
            <View>
        <Text style={{fontWeight:'bold'}}>{this.state.Route}</Text>
            </View>
            <View
             style={{flexDirection:'row'}}>
              
        <Text>{this.state.Source} ---> {this.state.Destination}</Text>
            
             </View>
            
             <View>
        <Text>Ticket Number:{this.state.Vehicle_Number}</Text>
             </View>
             <View>
               <Text>Number of passenger:</Text>
             </View>
             <View>
               <Text>Total Fare</Text>
             </View>
             <View>
               <Text style={{fontWeight:'bold'}}>Thank You For Travelling With DTC !</Text>
             </View>
   
            </Card>
          </View>
        );
    }
  }