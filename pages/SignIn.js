//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import SearchAppBar from '../components/Navbar';
import { View, TextInput, Alert } from 'react-native';
import UsersList from './UsersList';
import Dashboard from './Dashboard';
import axios from 'axios';
import { loginUser } from '../redux/actions/authActions';

const defaultTheme = createTheme();

export default function SignIn() {
  const [user, setUser] = React.useState(null);
  const navigation=useNavigation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    checkForUser();
  }, []);

  const checkForUser = async () => {
    const storedUser = await AsyncStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      //navigation.navigate("Dashboard");
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const dataToSend = {
      email: data.get('email'),
      password: data.get('password'),
    };

    console.log('Entered Credentials:', dataToSend);

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', dataToSend);
       
      const token = response.data.token;
      console.log('Token:', token);

      await AsyncStorage.setItem('user', JSON.stringify({
        email: response.data.email,
        name:response.data.name,
        token: token,
      }));
      
      dispatch(loginUser({ user: { email: response.data.email, name: response.data.name, token: token } }));


      setUser({
        email: response.data.email,
        name:response.data.name,
        token: token,
      });

      navigation.navigate("Dashboard");
    } catch (error) {
      console.error('Error signing in:', error.message);
  
      // Display an alert or handle the error as needed
      Alert.alert('Sign In Failed', 'Invalid username or password');
    };
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  


  return (
    
    <ThemeProvider theme={defaultTheme}>
      
       <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onPress={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={()=>navigation.navigate("SignUp")}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    
    </ThemeProvider>
  );
}
