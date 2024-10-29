import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react';

const DATA=[
  {
    id: 1,
    image : require('../assets/donut_yellow1.png'),
    title: "Tasty Donut",
    body: "Spice tasty donut family.",
    price: "10$",
    button: "plus_button.png",
    category:['Donut','Pink Donut']
  },
  {
    id: 2,
    image : require('../assets/tasty_donut1.png'),
    title: "Pink Donut",
    body: "Spice tasty donut family.",
    price: "20$",
    button: "plus_button.png",
    category:['Donut','Pink Donut']
  },
  {
    id: 3,
    image : require('../assets/green_donut1.png'),
    title: "Floating Donut",
    body: "Spice tasty donut family.",
    price: "30$",
    button: "plus_button.png",
    category:['Donut','Floating']
  },
  {
    id: 4,
    image : require('../assets/donut_red1.png'),
    title: "Floating Donut",
    body: "Spice tasty donut family.",
    price: "40$",
    button: "plus_button.png",
    category:['Donut','Floating']
  }
]

const Item = ({item , navigation}) => {
  return(
    <TouchableOpacity style={styles.donutCart} onPress={() => navigation.navigate('DetailPortrait',{item})}>
      <Image style={styles.image} source={item.image}/>
      <View style={{marginLeft:20}}>
      <Text style={{fontSize:25, fontWeight:'bold'}}>{item.title}</Text>
      <Text>{item.body}</Text>
      <Text style={{fontSize:20, fontWeight:'bold'}}>{item.price}</Text>
      </View>
      <Image style={styles.image} source={item.button}/>
    </TouchableOpacity>
  );
}



const MasterPortrait = ({navigation}) => {
  const categories =['Donut','Pink Donut','Floating'];
  const [selectedCategory, setSelectedCategory] = useState('Donut');
  
  /*filter :dùng để lọc mảng */
 const filteredData =
       (selectedCategory === 'All' ? DATA : DATA.filter(item => item.category.includes(selectedCategory)));
  return (
    <View style={styles.container}>
        <Text style={{fontSize:15, color:'#000000A6', fontWeight:'bold'}}>Welcome, Jala!</Text>
         <Text style={{fontSize:20, fontWeight:'bold'}}>Choice you Best food</Text>
         <TextInput style={styles.input} placeholder="Search food"></TextInput>
         <View style={styles.containerBtn}>
          {categories.map((category)=>(
          <TouchableOpacity key={category} style={styles.btn} onPress={() => setSelectedCategory(category)}>
          <Text style={[styles.btnText, selectedCategory === category && styles.activeBtn,]}>{category}</Text>
          </TouchableOpacity>
          ))}
      </View>
      <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={({item})=><Item item={item} navigation={navigation}></Item>}
          contentContainerStyle={{ rowGap: 5}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input:{
    width: "70%",
    borderWidth:1,
    height: 40,
    marginTop:20,
  },
  containerBtn:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop: 15,
    marginBottom: 30,
  },
  btn : {
    width: 80,
    height: 25,
    borderWidth:1,
    borderRadius:5,
  },
   btnText:{
    textAlign:'center',
    color: '#BEB6B6',
    fontSize: 15,
  },
  activeBtn:{
   backgroundColor: 'yellow',
   color:'black',
  },
  donutCart:{
    flex:1,
    flexDirection:'row',
    margin:10,
    backgroundColor: 'pink',
    borderRadius:15,
    padding:10,
    alignItems:'center',
    position:'relative',
  },
});

export default MasterPortrait;