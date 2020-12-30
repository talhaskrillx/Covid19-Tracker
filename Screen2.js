import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import _ from "lodash";


class Screen extends React.Component {
    state = {
      cName:"",
      firstCaseDate:"",
      noOfCasesDayOne:"",
      totalConfirm:"",
      deaths:"",
      recover:"",
      activeCases:"",
      data:[],
      fullData:[],
    };
    
    componentDidMount(){
      this.getAPIData();
      this.getAPIData2();
      console.log("check2")
    }
    getAPIData2 =  (  ) => {
      const { route } = this.props;
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      return fetch('https://api.covid19api.com/dayone/country/'+route.params.Slug+'/status/confirmed', 
        requestOptions)
        .then(response => response.json())
        .then(responseJSON => {
          this.setState({
            firstCaseDate:responseJSON[0].Date,
            noOfCasesDayOne:responseJSON[0].Cases,
            totalConfirm:responseJSON[responseJSON.length-1].Cases,
          }); 
        });
    };
    getAPIData =  (  ) => {
      const { route } = this.props;
      console.log("inside GetAPIData Screen2")
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      return fetch('https://api.covid19api.com/live/country/'+route.params.Slug+'/status/confirmed', 
        requestOptions)
        .then(response => response.json())
        .then(responseJSON => {
          this.setState({
            deaths:responseJSON[responseJSON.length-1].Deaths,
            recover:responseJSON[responseJSON.length-1].Recovered,
            activeCases:responseJSON[responseJSON.length-1].Active,
          });
          console.log("Check")
        });
    };
    render() {
      const { route } = this.props;
      const { navigation } = this.props;
      return (
        <View style={styles.container}>
        <View>
          <Text style={{fontSize:30, fontWeight:'bold', textDecorationLine:"underline"}}>{route.params.Country} Stats</Text>
          <View style={styles.textss}><Text style={{fontSize:20}}>Covid first case date: </Text><Text style={{color:"red", fontWeight:'bold'}}> {this.state.firstCaseDate.substring(0,10)}</Text></View>
          <View style={styles.textss}><Text style={{fontSize:20}}>Cases on first day: </Text><Text style={{color:"red", fontWeight:'bold'}}> {this.state.noOfCasesDayOne}</Text></View>
          <View style={styles.textss}><Text style={{fontSize:20}}>Total Cases:</Text><Text style={{color:"red", fontWeight:'bold'}}>{this.state.totalConfirm}</Text></View>
          <View style={styles.textss}><Text style={{fontSize:20}}>Deaths:</Text><Text style={{color:"red", fontWeight:'bold'}}>{this.state.deaths}</Text></View>
          <View style={styles.textss}><Text style={{fontSize:20}}>Recovered: </Text><Text style={{color:"red", fontWeight:'bold'}}>{this.state.recover}</Text></View>
          <View style={styles.textss}><Text style={{fontSize:20}}>Active Cases: </Text><Text style={{color:"red", fontWeight:'bold'}}>{this.state.activeCases}</Text></View>
          <View style={styles.textss}></View><Text></Text>
          
        </View>
        <View><Button title="Back"
        onPress={()=>navigation.goBack()}>
        </Button></View>
        </View>
        )
      }
  }
  
  const Screen2=(props)=>{
    const navigation = useNavigation();
    const route = useRoute();
    return(
      <Screen {...props} navigation={route,navigation}></Screen>
        
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop:30,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textss: {
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'space-between',
    },
  });
    module.exports = {
      Screen2: Screen2,
    }  