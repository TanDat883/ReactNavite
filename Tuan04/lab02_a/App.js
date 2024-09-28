import React from 'react';
import {Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
const YourApp = () => {
  return (
    <View style={{flex: 1, backgroundColor:'yellow',}}>
      <View style = {{flex:2, alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:32, fontWeight:'bold'}}>LOGIN</Text>
      </View>
      <View style = {{flex:1,alignItems:'center'}}>
       <TextInput style={styles.input} placeholder="Name"/>
       <TextInput style={styles.input} placeholder="Password"/>
      </View>
      <View style = {{flex:1,alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style = {{flex:2, flexDirection:'row', justifyContent:'center', alignItems:'flex-start'}}>
       <Text style={{fontSize:25, fontWeight:'bold'}}>Forgot your password</Text>
      </View>
    </View>
  );
}
const styles = {
  input: {
    width: '80%',
    height: 50,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 15, // Tăng chiều cao nút
    paddingHorizontal: 130, // Tăng chiều rộng nút
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
