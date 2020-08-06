import React from 'react';

import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ImageBackground, KeyboardAvoidingView,ActivityIndicator } from 'react-native';

import Firebase from './firebase/firebase';


class Signup extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            isFocus_name:false,
            // isFocus_age:false,
            // isFocus_phone:false,
            // isFocus_email:false,
            // isFocus_password:false,
            email:'',
            password:'',
            isLogin:false,
            name:'',
            phoneNumber:'',
            age:'',
            errorMessage:'',
            address:'',
            userName:'',
            isLoading:false


        }

    }
    signUpUser=async(email,password)=>{
        try{
            if(this.state.name==''||this.state.age=='')
            {
                alert('please make a valid entry');
                return;
            }
            if(this.state.password.length<6)
            {
                alert('password length cannot be less than 6');
                return ;
            }
            if(this.state.phoneNumber.length>10||this.state.phoneNumber.length<10)
            {
                alert('Please Enter Valid Phone Number');
                return ;
            }
                this.setState({isLoading:true});
                var ref=Firebase.database().ref().child('Users').child(this.state.userName);
                // ref.child('email').set(this.state.email);
                ref.child("name").set(this.state.name);
                ref.child("email").set(this.state.email);
                ref.child("age").set(this.state.age);
                ref.child("phoneNumber").set(this.state.phoneNumber);
                ref.child("address").set(this.state.address);
                ref.child("password").set(this.state.password);
                ref.child('username').set(this.state.userName);
            await Firebase.auth().createUserWithEmailAndPassword(email,password).catch(error => this.setState({ errorMessage: error.message }));
     
            //  ref.child()

            this.setState({isLoading:false});
            this.setState({isLogin:true});


        }
        catch(error)
        {
            console.log(error);
        }

    }
    handleFocus_name = () => this.setState({isFocus_name: true})
    handleFocus_age = () => this.setState({isFocus_age: true})
    handleFocus_phone = () => this.setState({isFocus_phone: true})
    handleFocus_email = () => this.setState({isFocus_email: true})
    handleFocus_password = () => this.setState({isFocus_password: true})
    handleFocus_address = () => this.setState({isFocus_address: true})
    handleFocus_userName= () => this.setState({isFocus_userName: true})

 handleBlur_name = () => this.setState({isFocus_name: false})
 handleBlur_age = () => this.setState({isFocus_age: false})
 handleBlur_phone = () => this.setState({isFocus_phone: false})
 handleBlur_email = () => this.setState({isFocus_email: false})
 handleBlur_password = () => this.setState({isFocus_password: false})
 handleBlur_address = () => this.setState({isFocus_address: false})
 handleBlur_userName = () => this.setState({isFocus_userName: false})
    render()
    {
        if(this.state.isLogin==true)
        {
            this.props.navigation.navigate('Account',{email:this.state.email,password:this.state.password,phoneNumber:this.state.phoneNumber,
            name:this.state.name,isEmail:true})
        }
        return (
            
            <View style={styles.container}>
               <View>
                <Text style={styles.library}>Sign Up</Text>
            </View>
            <View style={styles.MainContainer}>
                <TextInput
                 
                    placeholder="Name"
                    //style={styles.textInput_Style}
                    underlineColorAndroid='transparent'
                    onFocus={this.handleFocus_name}
                    onBlur={this.handleBlur_name}
                    onChangeText={(name)=>this.setState({name})}
         
         style={[styles.textInput_Style, {
            borderWidth: this.state.isFocus_name
                 ? 2
                 : 1,
             
         }]}
                />
            </View>
            <View style={styles.MainContainer}>
                <TextInput
                    placeholder="UserName"
                    style={styles.textInput_Style}
                    underlineColorAndroid='transparent'
                    onFocus={this.handleFocus_userName}
                    onBlur={this.handleBlur_userName}
                    onChangeText={(userName)=>this.setState({userName})}
                   
                    style={[styles.textInput_Style, {
                       borderWidth: this.state.isFocus_userName
                            ? 2
                            : 1,
                        
                    }]}
                />
            </View>
            <View style={styles.MainContainer}>
                <TextInput
                    placeholder="Age"
                    style={styles.textInput_Style}
                    underlineColorAndroid='transparent'
                    onFocus={this.handleFocus_age}
                    onBlur={this.handleBlur_age}
                    onChangeText={(age)=>this.setState({age})}
                    
                    style={[styles.textInput_Style, {
                       borderWidth: this.state.isFocus_age
                            ? 2
                            : 1,
                        
                    }]}
                />
            </View>
            <View style={styles.MainContainer}>
                <TextInput
                    placeholder="Phone Number"
                    style={styles.textInput_Style}
                    underlineColorAndroid='transparent'
                    onFocus={this.handleFocus_phone}
                    onBlur={this.handleBlur_phone}
                    onChangeText={(phoneNumber)=>this.setState({phoneNumber})}
                  
                    style={[styles.textInput_Style, {
                       borderWidth: this.state.isFocus_phone
                            ? 2
                            : 1,
                        
                    }]}
                />
            </View>
            <View style={styles.MainContainer}>
                <TextInput
                   // secureTextEntry={true}
                    placeholder="Address"
                    style={styles.textInput_Style}
                    underlineColorAndroid='transparent'
                    onFocus={this.handleFocus_address}
                    onBlur={this.handleBlur_address}
                    onChangeText={(address)=>this.setState({address})}
                    style={[styles.textInput_Style, {
                       borderWidth: this.state.isFocus_address
                            ? 2
                            : 1,
                        
                    }]}
                />
            </View>
            <View style={styles.MainContainer}>
                <TextInput
                    placeholder="Email Address"
                    style={styles.textInput_Style}
                    underlineColorAndroid='transparent'
                    onFocus={this.handleFocus_email}
                    onBlur={this.handleBlur_email}
                    onChangeText={(email)=>this.setState({email})}
                   
                    style={[styles.textInput_Style, {
                       borderWidth: this.state.isFocus_email
                            ? 2
                            : 1,
                        
                    }]}
                />
            </View>
            <View style={styles.MainContainer}>
                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    style={styles.textInput_Style}
                    underlineColorAndroid='transparent'
                    onFocus={this.handleFocus_password}
                    onBlur={this.handleBlur_password}
                    onChangeText={(password)=>this.setState({password})}
                    style={[styles.textInput_Style, {
                       borderWidth: this.state.isFocus_password
                            ? 2
                            : 1,
                        
                    }]}
                />
            </View>
            <View style={{ flexDirection: "row" ,textAlign:'center',justifyContent:'center'}}>
                <TouchableOpacity style={styles.submit}
                onPress={()=>this.signUpUser(this.state.email,this.state.password)}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
                < ActivityIndicator animating={this.state.isLoading} />
                <TouchableOpacity style={styles.cancel}  onPress={() => {this.props.navigation.navigate('Login')}} >
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
            </View>
            
            </View>
        )
    }

}
const styles=StyleSheet.create(
    {
        container:{
            backgroundColor:'white',
            marginTop:'0%',
            // flex:4
        },
        library:
        {
            margin:'2%',
            textAlign: 'center',
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontSize: 20,
            fontSize:35
    
        },
        MainContainer:
        {
    
            justifyContent: 'center',
            alignItems: 'center'
        },
        textInput_Style:
        {
            margin: 5,
            width: '75%',
            height: 42,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 1,
            backgroundColor: 'rgba(0,0,0,0)',
            textAlign: 'center',
            borderRadius: 0,
            borderBottomColor:'black',
            
          
        },
        submit:{
            alignContent:'center',
            textAlign:'center',
            margin:25,
            marginTop:'5%',
            //justifyContent: 'center',
            borderRadius: 6,
            backgroundColor: 'black',
            width: '20%',
            height: '46%',
            //marginLeft: '34%',
            textAlign:'center',
            borderWidth: 1,
        //backgroundColor:'white',
        borderEndColor:'black',
            

        },
        cancel:{
            alignContent:'center',
            textAlign:'center',
            margin:25,
            marginTop:'5%',
            //justifyContent: 'center',
            borderRadius: 6,
            backgroundColor: 'white',
            width: '20%',
            height: '46%',
            //marginLeft: '34%',
            textAlign:'center',
            borderWidth: 1,
        //backgroundColor:'white',
        borderEndColor:'white',

        },
        submitText:{
            color:'white',
            marginTop:'4%',
            textAlign:'center'
        },
        cancelText:{
            color:'black',
            marginTop:'4%',
            textAlign:'center'
        }
    }
)
export default Signup;