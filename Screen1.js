import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons,MaterialCommunityIcons,FontAwesome5,FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import _ from "lodash";


class Screen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      country:[],
      search:'',
      condition:false
    }
  } 
  getAPIData = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    return fetch('https://api.covid19api.com/countries', requestOptions)
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({
          data:responseJSON,
          country:responseJSON
        })
      });
  };
  componentDidMount(){
    this.getAPIData();
  }
  filterItemss=search=>{
    const data=_.filter(this.state.country,user=>{
      return user.Country.includes(search)});
    this.setState({ data });
  }
  // filterItems=(search)=>{
  //   const data=_.filter(this.state.country,user=>{
  //     return user.Country.includes(search)});
  //   this.setState({search:search, data });
  // }
  render(){
    const { navigation } = this.props;
  return (
    <View style={styles.container}>
            <Text>Search covid stats of any country here.</Text>
            <Text style={{marginTop:120, fontSize:50,}}>COVID-19</Text>
            <View style={{flexDirection:'row', borderBottomWidth:1, borderRadius:5,}}>
            <TextInput style={{ borderColor:"black",  width:300, padding:3}} 
            placeholder="Search country here..." 
            onChangeText={text=>{this.filterItemss(text);
               this.setState({search:text, condition:true}); console.log(this.state.search);}}
            />
            <Feather style={{paddingTop:10, paddingRight:5}} name="search" size={20} />
            </View>
            
            {this.state.search.length>0 ? <ScrollView style={{width:"85%",height:5, padding:5, paddingLeft:20,  borderRadius:0}}>
                {this.state.data.map((item)=>(
                      <TouchableOpacity onPress={()=>{navigation.navigate('screen2', item)}}
                            activeOpacity={0.5}>
                            <View><Text style={{borderBottomWidth:1, borderColor:'#E8E7E7', paddingBottom:5, marginTop:3,fontSize:20 }}>{item.Country}</Text></View>
                    </TouchableOpacity>
                
                ))}  
      </ScrollView>  : null}
              
     
    </View>
  );


}
}


const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
});
const Screen1=(props)=>{
  const navigation = useNavigation();
    return(
       <Screen {...props} navigation={navigation}></Screen>
    );
}

module.exports = {
  Screen1: Screen1,
  
}