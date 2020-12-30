import React from 'react';
import { Text , View, StyleSheet, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';   
import _ from "lodash";

const Tab = createBottomTabNavigator();
class Screen extends React.Component {
  state = {
    data:[],
    continent:"asia"
  };
  componentDidMount(){
    this.getAPIData();
  }
  getAPIData = (props) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow', 
    };
    return fetch('https://covid19-update-api.herokuapp.com/api/v1/world/continent/'+this.props.continent, requestOptions)
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({
          data:responseJSON.countries
        });
      });
  }; 
  render(){
    return(
      <View style={styles.container}>
        <ScrollView style={{width:"100%"}}>
            {
              this.state.data.map((item) => (
                <View style={{alignItems:'center', justifyContent:'center',borderBottomWidth:1, padding:20, borderColor:'#E8E7E7'}}>
                    <Text style={{fontWeight:'bold', fontSize:25, paddingBottom:10, }}> {item.name}</Text>
                    <View style={{flexDirection:'row'}}>
                    <View><Text style={{fontWeight:'bold', textDecorationLine:"underline"}}>Cases</Text><Text>{item.cases}</Text></View>  
                    <View style={{borderLeftWidth:1, marginLeft:25, paddingLeft:25,borderColor:'#E8E7E7'}}><Text style={{fontWeight:'bold', textDecorationLine:"underline"}}>Deaths</Text><Text>{item.deaths}</Text></View>
                    </View>
                </View>  
              ))}
              
        </ScrollView>
      </View>
    );
  }
}

function MyTabs() {
  return (
    <Tab.Navigator    
                    barStyle={{ backgroundColor: 'grey' }} shifting={false}
                    tabBarOptions={{
                        activeBackgroundColor:'black', activeTintColor:'white',
                        
                        labelStyle:{paddingBottom:15},
                        //style:{height:50}
                    }}
                    >
      <Tab.Screen name="Asia" children={()=><Screen continent="asia"/>}  />
      <Tab.Screen name="Africa" children={()=><Screen continent="africa"/>} />
      <Tab.Screen name="Australia" children={()=><Screen continent="australia"/>}/>
      <Tab.Screen name="Europe" children={()=><Screen continent="europe"/>}  />
      <Tab.Screen name="S America" children={()=><Screen continent="south america"/>} />
      <Tab.Screen name="N America" children={()=><Screen continent="north america"/>} />
      
    </Tab.Navigator>
  ); 
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //paddingTop:220
        },
    textS:{
        fontSize:32
    }
});

export default MyTabs;