import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';  
import firebase from 'firebase';
import db from "../config";

export default class LoginScreen extends Component {
  constructor(){
      super();
      this.state = {
          email: "",
          password: ""
      };
  } 

  handleSignUp = (email,password) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then(response => {
            Alert.alert("User Added Successfully");
            console.log("User Added Successfully");
        })
        .catch(error => {
            Alert.alert(error.message);
        });
  };

  
  handleLogin = (email,password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then(response => {
          Alert.alert("Successfully Login");
          console.log("Successfully Login");
      })
      .catch(error => {
          Alert.alert(error.message);
      });
};

    render(){
        var {email,password} = this.state;
    return (

<View style={styles.container}>
        <SafeAreaView />
        <View style={styles.upperContainer}>
          <Image source={require("../assets/santa.png")} style={styles.image} />
        </View>
        <View style={styles.middleContainer}>
          <CustomInput
            placeholder={"abc@example.com"}
            keyboardType={"email-address"}
            onChangeText={text => {
              this.setState({
                email: text
              });
            }}
          />
          <CustomInput
            secureTextEntry={true}
            placeholder={"Enter Password"}
            onChangeText={text => {
              this.setState({
                password: text
              });
            }}
          />
          <CustomButton
            title={"Login"}
            onPress={() => this.handleLogin(email, password)}
          />
          <CustomButton
            title={"SignUp"}
            onPress={() => this.handleSignUp(email, password)}
          />
        </View>
        <View style={styles.lowerContainer}>
          <Image
            source={require("../assets/book.png")}
            style={styles.bookImage}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
    backgroundColor: "#6fc0b8"
  },
  upperContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain"
  },
  middleContainer: {
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  lowerContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  bookImage: {
    width: "70%",
    height: "70%",
    resizeMode: "contain"
  }
});