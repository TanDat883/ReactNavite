import { Text, StyleSheet, View, TouchableOpacity, FlatList, Image, ScrollView,ActivityIndicator } from 'react-native';
import React, {useState} from 'react';
import { MaterialIcons } from '@expo/vector-icons';

/*Call API */
import useFetch from '../hooks/useAPI'; 
import { useFocusEffect } from '@react-navigation/native';

const API_URL = 'https://6459ebf065bd868e930ba426.mockapi.io/bikes';

const getImage = (imagePath) => {
  switch (imagePath) {
    case 'xe5.png':
      return require('../assets/xe5.png');
    case 'xe2.png':
      return require('../assets/xe2.png');
    case 'xe3.png':
      return require('../assets/xe3.png');
    case 'xe4.png':
      return require('../assets/xe4.png');
    default:
      return require('../assets/xe4.png');
  }
};
const Item = ({item , navigation}) => {
  return(
    <TouchableOpacity style={styles.bikeCart} onPress={() => navigation.navigate('Screen3',{item})}>
    <MaterialIcons
              name="favorite"
              size={24}
              color={item.heart ? 'red' : 'gray'}
              style={styles.heartIcon}
            />
      <Image style={styles.image} source={getImage(item.image)}/>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </TouchableOpacity>
  );
}

const Screen2 = ({navigation}) => {
  const categories =['All','Roadbike','Mountain'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { data: bikes, loading, error, refetch } = useFetch(API_URL); 

  useFocusEffect(
    React.useCallback(() => {
      refetch();  
    }, [refetch])
  );
  if (loading) {
    return <ActivityIndicator size="large" color="blue" />; 
  }

  if (error) {
    return <Text>Error fetching data...</Text>; 
  }
  /*filter :dùng để lọc mảng */
 const filteredBikes = bikes.filter(bike => 
    selectedCategory === 'All' ? true : bike.type === selectedCategory
  );

  return (
    <ScrollView 
      showsHorizontalScrollIndicator={true}
      showsVerticalScrollIndicator={true}>
    <View  style={styles.container}>
      <Text style={styles.header}>The world’s Best Bike</Text>
      <View style={styles.containerBtn}>
          {categories.map((category)=>(
          <TouchableOpacity key={category} style={styles.btn} onPress={() => setSelectedCategory(category)}>
          <Text style={[styles.btnText, selectedCategory === category && styles.activeBtn,]}>{category}</Text>
          </TouchableOpacity>
          ))}
      </View>
      <FlatList
          data={filteredBikes}
          keyExtractor={item => item.id}
          renderItem={({item})=><Item item={item} navigation={navigation}></Item>}
          numColumns={2}
          showsHorizontalScrollIndicator={true}
           showsVerticalScrollIndicator={true}
          columnWrapperStyle={{gap: 5}}
          contentContainerStyle={{ rowGap: 5}}
      />
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
  },
  header:{
    color:'#E94141',
    fontSize:20,
    marginTop:20,
    fontWeight: 'bold',
    marginLeft:15,
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
    borderColor: 'red',
    borderWidth:1,
    borderRadius:5,
  },
  btnText:{
    textAlign:'center',
    color: '#BEB6B6',
    fontSize: 15,
  },
  activeBtn:{
    color:'red',
  },
  bikeCart:{
    flex:1,
    margin:10,
    backgroundColor: '#F7BA8326',
    borderRadius:15,
    padding:10,
    alignItems:'center',
    position:'relative',
  },
  image:{
   width: 120,
   height:150,
   resizeMode:'contain',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
});
export default Screen2;
