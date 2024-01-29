import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser } from '../redux/actions/authActions'; // Use the correct action

const Dashboard = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(user.user);
  useEffect(() => {
    const loadStoredUser = async () => {
      try {
        const storedUserString = await AsyncStorage.getItem('user');
        if (storedUserString) {
          const parsedUser = JSON.parse(storedUserString);
          dispatch(loginUser({ user: parsedUser })); // Use the correct action
        }
      } catch (error) {
        console.error('Error loading stored user:', error);
      }
    };

    loadStoredUser();
  }, [dispatch]);

  return (
    <div>
      {user? (
        <h2>Welcome, {user.isAuthenticated && user.user.user.name}!</h2>
      ) : (
        <p>User not logged in</p>
      )}
    </div>
  );
};

export default Dashboard;