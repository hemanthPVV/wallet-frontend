import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';
// export default function UsersList({ persons }) {
//     // Ensure persons is an object before attempting to map over its keys
//     if (!persons || typeof persons !== 'object') {
//       // Handle the case where persons is not an object
//       return null; // or display an error message
//     }
// }
export default function UsersList() {
     const [users, setUsers] = useState([]);
     useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/users');
          setUsers(response.data || []); // Assuming the response has a 'users' property
          //const result = await response.json();
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once on component mount
  
    return (
      <View style={styles.container}>
        <ScrollView>
          {users.map((person) => (
            <View key={person.id}>
              <Text style={styles.item}>{person.name}</Text>
              <Text style={styles.item}>{person.email}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
// const response = await axios('http://localhost:3000/users');
// console.log({mlog: response});
// const { users = [] } = response.json();
// console.log({mlog: users});
//     return (
//       <View style={styles.container}>
//         <ScrollView>
    
//         {users.map((person) => (
//           <View key={person.id}>
//             <div>

//             </div>
//           </View>
//         ))}

//         </ScrollView>
//       </View>
//     );
//   }
  //styles to see the data more clearly
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
    },
    item: {
      padding: 20,
      fontSize: 15,
      marginTop: 5
    },
  })
