import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView, FlatList, StatusBar, TextInput, Image } from 'react-native';
import { Checkbox } from 'react-native-paper'; // Ensure you have this package installed

const initialData = [
  {
    id: '1',
    title: 'To Check Email',
    image: require('./assets/edit.png'),
  },
  {
    id: '2',
    title: 'UI Task Web Page',
  },
  {
    id: '3',
    title: 'Learn Javascript Basic',
  },
  {
    id: '4',
    title: 'Learn HTML Advance',
  },
  {
    id: '5',
    title: 'Medical App UI',
  },
  {
    id: '6',
    title: 'Learn Java',
  },
];

type ItemProps = {
  title: string;
  image?: any; // Make image optional
  isChecked: boolean; // New prop to track checkbox state
  onCheck: () => void; // Function to handle checkbox toggle
};

const Item = ({ title, image, isChecked, onCheck }: ItemProps) => (
  <View s>
    <View style={{flexDirection:'row', alignItems:'center'}}>
      <Checkbox status={isChecked ? 'checked' : 'unchecked'} onPress={onCheck} />
      <Text style={styles.title}>{title}</Text>
      {image && <Image source={image} style={styles.image} />}
    </View>
  </View>
);

const Separator = () => <View style={styles.separator} />; // Define a separator component

const App = () => {
  const [data, setData] = useState(initialData); // State to manage the list of items
  const [inputTitle, setInputTitle] = useState(''); // State to manage user input

  const addItem = () => {
    if (inputTitle.trim()) {
      const newItem = {
        id: (data.length + 1).toString(), // Generate a new ID
        title: inputTitle,
        isChecked: false, // Initialize checkbox state
      };
      setData([...data, newItem]); // Add new item to the list
      setInputTitle(''); // Clear input field
    }
  };

  const toggleCheckbox = (id) => {
    setData(data.map(item => (
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    )));
  };

  const deleteSelectedItems = () => {
    setData(data.filter(item => !item.isChecked)); // Remove checked items from the list
  };

  return (
    <View style={{ flex: 1 }}>
    <View style={{flex:1}}></View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <TextInput
          style={styles.input}
          placeholder="Add a new item"
          value={inputTitle}
          onChangeText={setInputTitle}
        />
      </View>
      <View style={{ flex: 4 }}>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Item
                  title={item.title}
                  isChecked={item.isChecked}
                  onCheck={() => toggleCheckbox(item.id)}
                />
              </View>
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={Separator} // Use the Separator component
          />
        </SafeAreaView>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={deleteSelectedItems}>
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  button: {
    backgroundColor: '#00BDD6',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    height: 5, // Height of the space between items
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 16,
    flex: 1, // Allow title to take available space
    marginLeft: 10, // Space between checkbox and title
  },
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
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9095A0',
    width: '100%',
    height: 50,
    borderRadius: 20,
    marginBottom: 10,
  },
});