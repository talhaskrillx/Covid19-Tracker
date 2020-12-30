import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import _ from "lodash";
import { Row } from 'react-native-table-component';

class Screen extends React.Component {
  state = {
    nCases:"",
    tCases:"",
    nDeaths:"",
    tDeaths:"",
    nRecovered:"",
    tRecovered:"",
  };
  componentDidMount(){
    this.getAPIData();
  }
  
  getAPIData = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    return fetch('https://api.covid19api.com/summary', requestOptions)
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({
          nCases:responseJSON.Global.NewConfirmed,
          tCases:responseJSON.Global.TotalConfirmed,
          nDeaths:responseJSON.Global.NewDeaths,
          tDeaths:responseJSON.Global.TotalDeaths,
          nRecovered:responseJSON.Global.NewRecovered,
          tRecovered:responseJSON.Global.TotalRecovered,
        });
        console.log('h');
      });
  };
  render(){
    return(
      <View style={styles.container}>
        <View >
          <Text style={{fontSize:30, fontWeight:'bold', textDecorationLine:"underline", paddingLeft:70, paddingBottom:20}}>Global Stats</Text>
          <View style={{flexDirection:'row', paddingBottom:20, borderBottomWidth:1}}>
          <View style={styles.textss}><Text style={{fontSize:20,fontWeight:'bold'}}>New Confirmed </Text><Text> {this.state.nCases}</Text></View>
          <View style={{...styles.textss, paddingLeft:25}}><Text style={{fontSize:20,fontWeight:'bold'}}>Total Confirmed</Text><Text > {this.state.tCases}</Text></View>
          </View>
          <View style={{flexDirection:'row', paddingBottom:20, borderBottomWidth:1}}>
          <View style={styles.textss}><Text style={{fontSize:20, fontWeight:'bold'}}>New Recovered</Text><Text>{this.state.nRecovered}</Text></View>
          <View style={{...styles.textss, paddingLeft:25}}><Text style={{fontSize:20,fontWeight:'bold'}}> Total Recovered</Text><Text >{this.state.tRecovered}</Text></View>
          </View>
          <View style={{flexDirection:'row', paddingBottom:20, borderBottomWidth:1}}>
          <View style={styles.textss}><Text style={{fontSize:20,fontWeight:'bold'}}>New Deaths</Text><Text >{this.state.nDeaths}</Text></View>
          <View style={{...styles.textss, paddingLeft:60}}><Text style={{fontSize:20,fontWeight:'bold'}}> Total Deaths</Text><Text>{this.state.tDeaths}</Text></View>
          </View>
          
      </View>
      </View>
      
    );
  }
}

const Screen3=(props)=>{
    return(
      <Screen>></Screen>
    )
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
      flexDirection:'column',
      alignItems: 'center',
      justifyContent:'center',
    },
  });
module.exports = {
    Screen3: Screen3,
  }  