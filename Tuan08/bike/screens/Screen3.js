import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const getImage = (imagePath) => {
  switch (imagePath) {
    case 'xe1.png':
      return require('../assets/xe1.png');
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
const Screen3 = ({navigation, route}) => {
  const { item } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
          <Image style={styles.img} source={getImage(item.image)} />
      </View>
      <View style={styles.center}>
        <Text style={{fontSize:30,fontWeight:'bold'}}>{item.name}</Text>
      <View style={{flexDirection:'row'}}>
        <Text style={{fontWeight:30, marginRight:20}}>15% OFF I {item.price}</Text>
        <Text style={{fontWeight:30, textDecorationLine: 'line-through'}}>{item.originalPrice}</Text>
      </View>
      <Text style={{fontSize:20,fontWeight:'bold',marginVertical:20}}>Description</Text>
      <Text>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
      </View>
      <View style={{flexDirection:'row', alignItems:'center' ,justifyContent:'space-between', margin: 10}}>
      <TouchableOpacity>
                     <MaterialIcons
                     name = {'favorite'}
                     size= {40}
                     color={item.heart ? 'red' :'gray'}
                     />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={()=>alert('Add Success')}>
          <Text style={{textAlign:'center',fontSize:20, color:'white'}}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  top:{
    flex:2,
    backgroundColor:'#E941411A',
    margin: 10,
    alignItems:'center',
  },
  img : {
    width :'90%',
    height :'90%',
    resizeMode :'contain',
  },
  center: {
    flex: 1.5,
    margin:10
  },
  btn:{
    backgroundColor:'red',
    width:'80%',
    borderRadius:20,
    margin:10,
    height:40,
    justifyContent:'center',
  },
});
export default Screen3;