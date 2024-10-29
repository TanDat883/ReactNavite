import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const Screen1 = ({ navigation }) => {
  // const handleNavigation = () => {
  //   navigation.navigate('Screen2'); // Sửa từ navigation.navigation thành navigation.navigate
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        A premium online store for {'\n'}sporter and their stylish choice
      </Text>
      <View style={styles.containerImage}>
        <Image source={require('../assets/xe1.png')} />
      </View>
      <Text style={styles.text}>POWER BIKE {'\n'} SHOP</Text>
      <View style={styles.buttonContainer}> {/* Thêm một View để chứa button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen2')}>
          <Text style={styles.textButton}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 50,
    marginBottom: 15,
  },
  containerImage: {
    backgroundColor: '#E941411A',
    borderRadius: 30,
    justifyContent: 'center',
    padding: 20,
    marginBottom: 20,
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    alignItems: 'center', // Căn giữa theo chiều ngang
    justifyContent: 'center', // Căn giữa theo chiều dọc
  },
  button: {
    backgroundColor: '#E94141',
    width: '80%', // Chiều rộng của button
    height: 50, // Chiều cao của button
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textButton: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen1;