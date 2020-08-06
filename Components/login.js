import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Switch, KeyboardAvoidingView,AsyncStorage, StatusBar, ActivityIndicator } from 'react-native';
import { Button } from 'native-base';
import Firebase from './firebase/firebase';
//import ToggleSwitch from 'toggle-switch-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { withNavigation } from 'react-navigation';

const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwV4vT8BeWdTDAjr0z-9yDks-XzOr5Gqtmg2ma9DbAngo7PjQq&usqp=CAU" };
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            isLoading: false,
            isToggle: false,
            switchValue: false,
            userName: '',
            isLogin:false



        }
    this.handleLogin=this.handleLogin.bind(this);
        



    }

    handleLogin = async () => {
    if(this.state.switchValue==true)
    {
        this.state.userName=this.state.email;
    }

        var isLogin_user=false;

        this.setState({ isLoading: true });
        const { email, password } = this.state;
        console.log(this.state.switchValue);
        if (this.state.switchValue == false) {
            console.log(email);
            console.log(password);
            await Firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => this.props.navigation.navigate('Account', { email: email,isEmail:true }))
                .catch(() => alert('Please Enter Valid Email/Password'));
                
                // const details=[['emailed',JSON.stringify(email)]['passworded',JSON.stringify(password)]];
                // AsyncStorage.multiSet(details, () => {
                //     console.log('saved');
                // });
            this.setState({ isLoading: false });
            this.setState({isLogin:true});




        }

        else {
          

            var s = this.state.userName.toString();
            var ref = Firebase.database().ref('Users/');
           await ref.once('value', function (snapshot) {
                //console.log(this.props);
                //console.log(snapshot.child(s + '/email').val());
                if ((snapshot.child(s + '/email')).val() == undefined) {
                   
                    alert('Wrong UserName');

                  
                }
                else {
                    //console.log(this.props);
                    var p = password.toString();
                   // console.log(p);
                    if ((snapshot.child(s + '/password')).val() == p) {
                        isLogin_user=true;
                        console.log('into')
                      
                        //this.props.navigation.navigate('Account');
                    }
                    else {
                        alert('Wrong Password');
                        return;
                    }

                }


            });
        }
            // console.log('mujhe bhi toh lo');
            // console.log(this.props);
        if(isLogin_user==true)
        {
           console.log('pooo');
            this.setState({isLogin:true});
            this.props.navigation.navigate('Account',{email: email,isEmail:false});
        }
        this.setState({ isLoading: false });
        
        
    }

    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
        console.log(value);
    }

    // getAllData=async()=>{
    //     AsyncStorage.getAllKeys((err, keys) => {
    //         AsyncStorage.multiGet(keys, (err, stores) => {
    //           stores.map((result, i, store) => {
    //             // get at each store's key/value so you can work with it
    //             let key = store[i][0];
    //             let value = store[i][1];
    //             console.log(key+':'+value);
    //           });
    //         });
    //       });
    // }
    

    render() {
    //     const keys = await AsyncStorage.getAllKeys()
    // const items = await AsyncStorage.multiGet(keys)
    // console.log(items);
        // console.log(props.navigation)
        //this.getAllData()
        return (


            <View style={styles.container}>
                <KeyboardAwareScrollView
                    style={{ backgroundColor: '#4c69a5' }}
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    contentContainerStyle={styles.container}
                    scrollEnabled={false}
                >
                    {/* <ImageBackground source={image} style={styles.image}> */}
                    <View>
                        <Text style={styles.library}>Welcome !</Text>
                    </View>
                    <StatusBar barStyle="dark-content" hidden={true} backgroundColor="black" />


                    <View style={styles.MainContainer}>
                        <TextInput
                            placeholder="Email Address/ username"
                            style={styles.textInput_Style}
                            onChangeText={(email) => this.setState({ email })}
                            underlineColorAndroid='transparent'
                        />
                    </View>

                    <View style={styles.MainContainer}>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Password"
                            style={styles.textInput_Style}
                            onChangeText={(password) => this.setState({ password })}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <Text style={{ alignSelf: 'center' }}>(Toggle to login using userName)</Text>
                    <Switch
                        style={{ alignSelf: 'center', borderColor: 'black' }}
                        onValueChange={this.toggleSwitch}
                        value={this.state.switchValue} />

                    <View>
                        <TouchableOpacity
                             onPress={() => this.handleLogin()}
                        //    onPress={()=>{this.props.navigation.navigate('Home')}}
                            style={styles.loginBtn}
                        >
                            <Text style={styles.loginText}>LOGIN</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.forgotBtn}>
                            <Text style={styles.forgotText}>Forgot Password</Text>
                        </TouchableOpacity>
                        < ActivityIndicator animating={this.state.isLoading} />
                        {/* <Text style={styles.forgot}>
                    Forgot Password?
     </Text> */}
                        <Text style={styles.or}>
                            OR
         </Text>
                        <Text style={styles.accountColor}>
                            Don't have an account?
         </Text>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('Signup') }}    >
                            <Text style={styles.signup}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.fbBtn}><Text style={styles.fbText}>Login With FaceBook</Text></TouchableOpacity>






                    {/* </ImageBackground> */}
                </KeyboardAwareScrollView>
            </View>


        );


    }
}
const styles = StyleSheet.create({
    containered: {
        flex: 1
    },
    signup: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    Maincontainer: {
        flex: 1,

        backgroundColor: 'white',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    googleButton: {
        backgroundColor: 'black',
        borderRadius: 16,
        width: '50%',
        height: '25%'

    },
    accountColor: {
        alignContent: 'center',
        textAlign: 'center'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    or: {
        marginTop: '6%',
        alignItems: 'center',
        justifyContent: 'center',
        //marginLeft: '45%',
        textAlign: 'center'
    },

    loginBtn: {

        marginTop: '1%',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: 'black',
        width: '32%',
        height: 'auto',
        marginLeft: '34%',
        textAlign: 'center',
        borderWidth: 1,
        //backgroundColor:'white',
        borderEndColor: 'black',
    },
    loginText: {

        padding: 2,
        color: 'white',
        textAlign: 'center'



    },
    forgotBtn: {
        marginTop: '1%',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: 'white',
        width: '32%',
        height: 'auto',
        marginLeft: '34%',
        textAlign: 'center',
        borderWidth: 1,
        //backgroundColor:'white',
        borderEndColor: 'black',

    },
    forgotText: {
        padding: 2
    },
    container: {
        flex: 1,

        backgroundColor: 'white',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    forgot: {

        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        //marginLeft: '35%',
        marginTop: '2%',
        color: 'blue'
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
        borderBottomColor: 'black'
    },
    library:
    {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
        marginBottom: '1%'

    },
    fbBtn: {
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
    }

});
// import React from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Switch, KeyboardAvoidingView, StatusBar, ActivityIndicator } from 'react-native';
// import { Button } from 'native-base';
// import Firebase from './firebase/firebase';
// //import ToggleSwitch from 'toggle-switch-react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { withNavigation } from 'react-navigation';

// const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwV4vT8BeWdTDAjr0z-9yDks-XzOr5Gqtmg2ma9DbAngo7PjQq&usqp=CAU" };
// export default class Home extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//             errorMessage: '',
//             isLoading: false,
//             isToggle: false,
//             switchValue: false,
//             userName: '',
//             isLogin:false



//         }
//     this.handleLogin=this.handleLogin.bind(this);
        



//     }

//     handleLogin = async () => {
//     if(this.state.switchValue==true)
//     {
//         this.state.userName=this.state.email;
//     }

//         var isLogin_user=false;

//         this.setState({ isLoading: true });
//         const { email, password } = this.state;
//         console.log(this.state.switchValue);
//         if (this.state.switchValue == false) {
//             console.log(email);
//             console.log(password);
//             await Firebase
//                 .auth()
//                 .signInWithEmailAndPassword(email, password)
//                 .then(() => this.props.navigation.navigate('Account', { email: email,isEmail:true }))
//                 .catch(() => alert('Please Enter Valid Email/Password'));
//             this.setState({ isLoading: false });
//             this.setState({isLogin:true});


//         }

//         else {
          

//             var s = this.state.userName.toString();
//             var ref = Firebase.database().ref('Users/');
//            await ref.on('value', function (snapshot) {
//                 //console.log(this.props);
//                 //console.log(snapshot.child(s + '/email').val());
//                 if ((snapshot.child(s + '/email')).val() == undefined) {
                   
//                     alert('Wrong UserName');

                  
//                 }
//                 else {
//                     //console.log(this.props);
//                     var p = password.toString();
//                    // console.log(p);
//                     if ((snapshot.child(s + '/password')).val() == p) {
//                         isLogin_user=true;
//                         console.log('into')
                      
//                         //this.props.navigation.navigate('Account');
//                     }
//                     else {
//                         alert('Wrong Password');
//                         return;
//                     }

//                 }


//             });
//         }
//             console.log('mujhe bhi toh lo');
//             console.log(this.props);
//         if(isLogin_user==true)
//         {
//            // console.log('pooo');
//             this.setState({isLogin:true});
//             this.props.navigation.navigate('Account',{email: email,isEmail:false});
//         }
//         this.setState({ isLoading: false });
        
        
//     }
//     toggleSwitch = (value) => {
//         this.setState({ switchValue: value })
//         console.log(value);
//     }
//     render() {
//         // console.log(props.navigation)
//         return (


//             <View style={styles.container}>
//                 <KeyboardAwareScrollView
//                     style={{ backgroundColor: '#4c69a5' }}
//                     resetScrollToCoords={{ x: 0, y: 0 }}
//                     contentContainerStyle={styles.container}
//                     scrollEnabled={false}
//                 >
//                     {/* <ImageBackground source={image} style={styles.image}> */}
//                     <View>
//                         <Text style={styles.library}>Welcome !</Text>
//                     </View>
//                     <StatusBar barStyle="dark-content" hidden={true} backgroundColor="black" />


//                     <View style={styles.MainContainer}>
//                         <TextInput
//                             placeholder="Email Address/ username"
//                             style={styles.textInput_Style}
//                             onChangeText={(email) => this.setState({ email })}
//                             underlineColorAndroid='transparent'
//                         />
//                     </View>

//                     <View style={styles.MainContainer}>
//                         <TextInput
//                             secureTextEntry={true}
//                             placeholder="Password"
//                             style={styles.textInput_Style}
//                             onChangeText={(password) => this.setState({ password })}
//                             underlineColorAndroid='transparent'
//                         />
//                     </View>
//                     <Text style={{ alignSelf: 'center' }}>(Toggle to login using userName)</Text>
//                     <Switch
//                         style={{ alignSelf: 'center', borderColor: 'black' }}
//                         onValueChange={this.toggleSwitch}
//                         value={this.state.switchValue} />

//                     <View>
//                         <TouchableOpacity
//                             onPress={() => this.handleLogin()}
//                             style={styles.loginBtn}
//                         >
//                             <Text style={styles.loginText}>LOGIN</Text>
//                         </TouchableOpacity>


//                         <TouchableOpacity
//                             style={styles.forgotBtn}>
//                             <Text style={styles.forgotText}>Forgot Password</Text>
//                         </TouchableOpacity>
//                         < ActivityIndicator animating={this.state.isLoading} />
//                         {/* <Text style={styles.forgot}>
//                     Forgot Password?
//      </Text> */}
//                         <Text style={styles.or}>
//                             OR
//          </Text>
//                         <Text style={styles.accountColor}>
//                             Don't have an account?
//          </Text>
//                         <TouchableOpacity
//                             onPress={() => { this.props.navigation.navigate('Signup') }}    >
//                             <Text style={styles.signup}>Sign Up</Text>
//                         </TouchableOpacity>
//                     </View>
//                     <TouchableOpacity style={styles.fbBtn}><Text style={styles.fbText}>Login With FaceBook</Text></TouchableOpacity>






//                     {/* </ImageBackground> */}
//                 </KeyboardAwareScrollView>
//             </View>


//         );


//     }
// }
// const styles = StyleSheet.create({
//     containered: {
//         flex: 1
//     },
//     signup: {
//         textAlign: 'center',
//         fontWeight: 'bold'
//     },
//     Maincontainer: {
//         flex: 1,

//         backgroundColor: 'white',
//         // alignItems: 'center',
//         justifyContent: 'center',
//     },
//     googleButton: {
//         backgroundColor: 'black',
//         borderRadius: 16,
//         width: '50%',
//         height: '25%'

//     },
//     accountColor: {
//         alignContent: 'center',
//         textAlign: 'center'
//     },
//     image: {
//         flex: 1,
//         resizeMode: "cover",
//         justifyContent: "center"
//     },
//     or: {
//         marginTop: '6%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         //marginLeft: '45%',
//         textAlign: 'center'
//     },

//     loginBtn: {

//         marginTop: '1%',
//         justifyContent: 'center',
//         borderRadius: 6,
//         backgroundColor: 'black',
//         width: '32%',
//         height: 'auto',
//         marginLeft: '34%',
//         textAlign: 'center',
//         borderWidth: 1,
//         //backgroundColor:'white',
//         borderEndColor: 'black',
//     },
//     loginText: {

//         padding: 2,
//         color: 'white',
//         textAlign: 'center'



//     },
//     forgotBtn: {
//         marginTop: '1%',
//         justifyContent: 'center',
//         borderRadius: 6,
//         backgroundColor: 'white',
//         width: '32%',
//         height: 'auto',
//         marginLeft: '34%',
//         textAlign: 'center',
//         borderWidth: 1,
//         //backgroundColor:'white',
//         borderEndColor: 'black',

//     },
//     forgotText: {
//         padding: 2
//     },
//     container: {
//         flex: 1,

//         backgroundColor: 'white',
//         // alignItems: 'center',
//         justifyContent: 'center',
//     },
//     forgot: {

//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign: 'center',
//         //marginLeft: '35%',
//         marginTop: '2%',
//         color: 'blue'
//     },

//     MainContainer:
//     {

//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     textInput_Style:
//     {
//         margin: 5,
//         width: '75%',
//         height: 42,
//         borderColor: 'rgba(0,0,0,0)',
//         borderWidth: 1,
//         backgroundColor: 'rgba(0,0,0,0)',
//         textAlign: 'center',
//         borderRadius: 0,
//         borderBottomColor: 'black'
//     },
//     library:
//     {
//         textAlign: 'center',
//         fontWeight: 'bold',
//         fontStyle: 'italic',
//         fontSize: 20,
//         marginBottom: '1%'

//     },
//     fbBtn: {
//         // backgroundColor:'#3b5998',
//         backgroundColor: 'black',
//         height: 'auto',
//         textAlign: 'center',
//         marginHorizontal: '15%',
//         padding: '2%',
//         borderRadius: 10

//     },
//     fbText: {
//         color: 'white',
//         textAlign: 'center',
//         //alignContent:'center',
//         justifyContent: 'center'
//     }

// });