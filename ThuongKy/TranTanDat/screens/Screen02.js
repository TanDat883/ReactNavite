import { AntDesign, Feather, FontAwesome6, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import { Tooltip } from 'react-native-elements';
import { useRecoilState, useRecoilValue } from 'recoil';
import { tasksState, filteredTasksState, searchState } from '../tasksState'; // Import atoms and selectors

export default function Screen02({ navigation, route }) {
  const { name } = route.params;
  const [tooltipVisible, setTooltipVisible] = React.useState(false);
  const [tasks, setTasks] = useRecoilState(tasksState);
  const [search, setSearch] = useRecoilState(searchState);
  const filteredTasks = useRecoilValue(filteredTasksState);

  useEffect(() => {
    // Fetch tasks from API
    const fetchTasks = async () => {
      try {
        const response = await fetch("https://671107fc4eca2acdb5f34d5b.mockapi.io/test/tasks");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, [setTasks]);

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  const handleEditTodo = (id) => {
    const task = tasks.find((task) => task.id === id);
    navigation.navigate("Screen03", { task, name });
  };

  const renderItem = ({ item }) => (
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#40A263",
      borderRadius: 5,
      marginVertical: 5,
    }}>
      <MaterialCommunityIcons
        name="clipboard-check-outline"
        size={24}
        color="#40A263"
        style={{ marginHorizontal: 10 }}
      />
      <Text>{item.name}</Text>
      <View style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
      }}>
        <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
          <AntDesign name="delete" size={24} color="#E06F70" style={{ paddingVertical: 10, paddingHorizontal: 6 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEditTodo(item.id)}>
          <Feather name="edit-3" size={24} color="#E06F70" style={{ paddingVertical: 10, paddingHorizontal: 6 }} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, marginTop: 50, marginHorizontal: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10 }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Image source={require('../assets/Avatar31.png')} style={{ width: 50, height: 50 }} />
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hi {name},</Text>
          <Text style={{ fontSize: 14 }}>Have a great day ahead</Text>
        </View>
      </View>

      <Tooltip
        popover={<Text>Search for your tasks here</Text>}
        isVisible={tooltipVisible}
        onClose={() => setTooltipVisible(false)}
        withOverlay={false}
      >
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderWidth: 1,
          borderColor: "#666",
          borderRadius: 5,
          marginVertical: 20,
        }}>
          <Ionicons name="search" size={24} color="#555" style={{ marginRight: 10 }} />
          <TextInput
            placeholder="Search"
            style={{ fontSize: 16, padding: 10, flex: 1 }}
            placeholderTextColor={"#777"}
            onFocus={() => setTooltipVisible(true)}
            onChangeText={(text) => setSearch(text)}
          />
        </View>
      </Tooltip>

      <FlatList
        data={filteredTasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View style={{
        position: "absolute",
        height: 200,
        width: "100%",
        bottom: 0,
        alignItems: "center",
      }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#25C3D9",
            width: 60,
            height: 60,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Screen03", { name })}>
          <FontAwesome6 name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}