import React from 'react';
import {Text, View, Button, Image, FlatList, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

const DATA = [
  {
    id: '1',
    image: require('./assets/ca_nau_lau.png'),
    title: 'Cá nấu lẩu, nấu mì mini',
    shop: 'Shop Devang',
  },
  {
    id: '2',
    image: require('./assets/ga_bo_toi.png'),
    title: '1Kg khô gà bơ tỏi',
    shop: 'Shop LTD food',
  },
  {
    id: '3',
    image: require('./assets/xa_can_cau.png'),
    title: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
  },
  {
    id: '4',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
    title: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
  },
  {
    id: '5',
    image: require('./assets/lanh_dao_gian_don.png'),
    title: 'Lãnh đạo giản đơn',
    shop: 'Minh Long Book',
  },
  {
    id: '6',
    image: require('./assets/hieu_long_con_tre.png'),
    title: 'Hiểu lòng con trẻ',
    shop: 'Minh Long Book',
  },
];

type ItemProps = {
  image: any; // Update type to accept image
  title: string;
  shop: string;
};

const Item = ({image, title, shop}: ItemProps) => (
  <View style={styles.item}>
   <View style={styles.row}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.shop, shop === 'Shop LTD food' || shop ==='Shop Devang'  ? styles.redText : null}>{shop}</Text>
      </View>
      <Button title="Chat" color='#F31111'/>
    </View>
  </View>
);

const YourApp = () => {
  return (
    // mac dinh la column , alignItems la ngang, justifyContent la doc
    // la row , alignItems la doc, justifyContent la ngang

      <View style = {{flex:1}}>
        <View style={{flex:0.4, flexDirection:'row', justifyContent:'space-around',alignItems:'center' , backgroundColor:'#00CCF9'}}>
          <Image source={require('./assets/ant-design_arrow-left-outlined.png')} style={{height: 30, width:30}}/>
          <Text style={{fontSize:20, color:'white'}}>Chat</Text>
           <Image source={require('./assets/bi_cart-check.png')} style={{height: 30, width:30}}/>
        </View>
         <View style={{flex:4}}>
            <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Item image={item.image} title={item.title} shop={item.shop} />}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
      <View style={{flex:0.4, flexDirection:'row', justifyContent:'space-around',alignItems:'center' , backgroundColor:'#00CCF9'}}>
          <Image source={require('./assets/Group 10.png')} style={{height: 30, width:30}}/>
           <Image source={require('./assets/Vector.png')} style={{height: 30, width:30}}/>
            <Image source={require('./assets/Vector 1 (Stroke).png')} style={{height: 30, width:30}}/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    paddingVertical: 10,
    marginVertical: 1,
    padding: 20,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically centered
    justifyContent: 'flex-start', // Space between elements
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center', // Center text vertically
  },
  title: {
    fontSize: 15,
  },
  redText: {
    color: 'red', // Change the color to red
  },
});
export default YourApp;
