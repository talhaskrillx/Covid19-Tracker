import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons, MaterialIcons,MaterialCommunityIcons,FontAwesome5,FontAwesome, Feather } from '@expo/vector-icons';
import {Screen1} from "./Screen1";
import {Screen2} from "./Screen2";
import {Screen3} from "./Screen3";
import MyTabs from "./Screen4"
const Drawer = createDrawerNavigator();
const Stack= createStackNavigator();


function MyDrawer(props) {
  return (
    <Drawer.Navigator drawerPosition='right' drawerContent={CustomDrawerContent} 
    drawerContentOptions={{activeTintColor:"white", inactiveTintColor:"black", activeBackgroundColor:"#383838"}} 
     drawerStyle={{backgroundColor:"white"}}>
        <Drawer.Screen name="Country Stats" component={StackNavigator12} 
        options={{drawerIcon:({color})=><Ionicons name="md-stats" size={26} color={color} />}}/>
        <Drawer.Screen name="Global Stats" component={StackNavigator3} 
        options={{drawerIcon:({color})=><FontAwesome name="globe" size={22} color={color} />}}/>
        <Drawer.Screen name="Continental Stats" component={StackNavigator4}
         options={{drawerIcon:({color})=><Feather name="map" size={22} color={color} />}}/>
    </Drawer.Navigator>
  );
}
const  CustomDrawerContent=(props)=> {
  return (
    <DrawerContentScrollView {...props} >
      <View style={{alignItems:"center", height:150}}> 
      <Image source={require('./corona.png')} style={{width:90, height:90}}/>  
      <Text style={{fontSize:30, fontWeight:"bold"}}>COVID-19</Text>
      </View>
      <DrawerItemList {...props}/>
      
    </DrawerContentScrollView>
  );}

const StackNavigator12=()=>{
  return(
    <Stack.Navigator  initialRouteName={Screen1}

      screenOptions={({navigation})=>({
        headerTintColor:"white",
        headerStyle:{
          
          backgroundColor:"black",
          height:80,
        },
        headerLeft:()=>
        <View style={{paddingLeft:20, flexDirection:"row", alignItems:'center'}}>
           <Image source={require('./corona.png')} style={{width:40, height:40}}/>  
        </View>,
        headerRight:()=>
        <View style={{paddingRight:10}}>
          <Feather name="menu" size={32} color="white" onPress={()=>navigation.toggleDrawer()}/>
        </View>
      })
    }>
      <Stack.Screen name="Covid-19" component ={Screen1} options={{title:"Country Stats"}}/>
      <Stack.Screen name="screen2"  component ={Screen2} options={{title:"Country Stats"}}/> 
    </Stack.Navigator>
 );
}
const StackNavigator3=()=>{
  return(
    <Stack.Navigator  initialRouteName={Screen1}
      screenOptions={({navigation})=>({
        headerTintColor:"white",
        headerStyle:{
          backgroundColor:"black",
          height:80,
        },
        headerLeft:()=>
        <View style={{paddingLeft:20, flexDirection:"row", alignItems:'center'}}>
           <Image source={require('./corona.png')} style={{width:40, height:40}}/>  
        </View>,
        headerRight:()=>
        <View style={{paddingRight:10}}>
          <Feather name="menu" size={32} color="white" onPress={()=>navigation.toggleDrawer()}/>
        </View>
      })
    }>
      
      <Stack.Screen name="screen3"  component ={Screen3} options={{title:"Global Stats"}}/> 
      

    </Stack.Navigator>
 );
}
const StackNavigator4=()=>{
  return(
    <Stack.Navigator  initialRouteName={Screen1}
      screenOptions={({navigation})=>({
        headerTintColor:"white",

        headerStyle:{
          backgroundColor:"black",
          height:80,
        },
        headerLeft:()=>
        <View style={{paddingLeft:20, flexDirection:"row", alignItems:'center'}}>
           <Image source={require('./corona.png')} style={{width:40, height:40}}/>  
        </View>,
        headerRight:()=>
        <View style={{paddingRight:10}}>
          <Feather name="menu" size={32} color="white" onPress={()=>navigation.toggleDrawer()}/>
        </View>
      })
    }>
      <Stack.Screen name="screen4"  component ={MyTabs} options={{title:"Continental Stats"}}/> 
    </Stack.Navigator>
 );
}


function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
