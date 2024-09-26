import React from 'react';
import {Text, View, Button, Image, TouchableOpacity } from 'react-native';

const YourApp = () => {
  return (
    // mac dinh la column , alignItems la ngang, justifyContent la doc
    // la row , alignItems la doc, justifyContent la ngang
    <View style={{flex: 1, backgroundColor:'#00CCF9',}}>
      <View style = {{flex:2, alignItems:'center', justifyContent:'center'}}>
        <Image source={require('./assets/Ellipse-8.png')} style={{height: 140 , width:140}}/>
      </View>
      <View style = {{flex:1,alignItems:'center'}}>
       <Text style={{fontSize:32, fontWeight:'bold'}}>GROW</Text>
       <Text style={{fontSize:32, fontWeight:'bold'}}>YOUR BUSINESS</Text>
      </View>
      <View style = {{flex:1,alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontWeight:'bold'}}> We will help you to grow your business using</Text>
        <Text style={{fontWeight:'bold'}}>online server</Text>
      </View>
      <View style = {{flex:1, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
       <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = {
  button: {
    backgroundColor: '#E3C000',
    borderRadius: 10,
    paddingVertical: 15, // Tăng chiều cao nút
    paddingHorizontal: 30, // Tăng chiều rộng nút
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
};
export default YourApp;
