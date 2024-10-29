import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const DetailPortrait = ({navigation, route}) => {
  const { item } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
          <Image style={styles.img} source={item.image} />
      </View>
      <View style={styles.center}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>{item.title}</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:15,fontWeight:'bold', color: '#0000008A'}}>{item.body}</Text>
        <Text style={{fontSize:15,fontWeight:'bold'}}>{item.price}</Text>
         </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20, marginBottom:10}}>
           <Text style={{fontSize:15,fontWeight:'bold', color: '#0000008A'}}>Delivery {'\n'} 30 min</Text>
         </View>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Restaurants info</Text>
           <Text style={{fontSize:15,fontWeight:'bold',color: '#0000008A'}}>
Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
      </View>
      <View style={{alignItems:'center'}}>
     <TouchableOpacity style={styles.btn}>
      <Text style={{textAlign:'center', fontSize:20,color:'white'}}>Add To Cart</Text>
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
    margin:20
  },
  btn:{
    backgroundColor:'#F1B000',
    width:'80%',
    borderRadius:10,
    margin:10,
    height:60,
    justifyContent:'center',
    alignItems:'center,'
  },
});
export default DetailPortrait;