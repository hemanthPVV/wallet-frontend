import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
} from "react-native";
import axios from "axios";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users");
        console.log(response);
        setUsers(response.data || []); // Assuming the response has a 'users' property
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const handleEdit = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
    setEditingUserId(userId);
    setEditedName(userToEdit.name);
    setEditedEmail(userToEdit.email);
  };

  const handleUpdate = async (userId) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/users/update/${userId}`,
        {
          name: editedName,
          //email: editedEmail,
        },
        {
          headers:{
            'Content-Type': 'application/json',
          }
        },
        { withCredentials: true }
      
      );

      // Assuming the server responds with the updated user data
      const updatedUser = response.data;

      // Update the state with the updated user
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === userId ? updatedUser : user))
      );

      // Reset editing state
      setEditingUserId(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {users.map((person) => (
          <View key={person.id}>
            <Text style={styles.item}>{person.name}</Text>
            <Text style={styles.item}>{person.email}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Edit" onPress={() => handleEdit(person.id)} />
              {editingUserId === person.id && (
                <View>
                  <TextInput
                    style={styles.editInput}
                    value={editedName}
                    onChangeText={(text) => setEditedName(text)}
                  />
                  <TextInput
                    style={styles.editInput}
                    value={editedEmail}
                    onChangeText={(text) => setEditedEmail(text)}
                  />
                  <Button
                    title="Update"
                    onPress={() => handleUpdate(person.id)}
                  />
                </View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  editInput: {
    padding: 10,
    fontSize: 15,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});
