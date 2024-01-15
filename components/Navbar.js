import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { useNavigation, useIsFocused } from '@react-navigation/native'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import ButtonGroup from '@mui/material/ButtonGroup'; 
import Button from '@mui/material/Button';
import SignIn from '../pages/SignIn';
//import SignUp from '../pages/SignUp';
import UsersList from '../pages/UsersList';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const navigation = useNavigation();
  //const isSignInFocused = useIsFocused(); 
  //const isSignUpFocused = navigation.isFocused() && navigation.getCurrentRoute()?.name === 'SignUp'; 
  return (
    
  
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ width: '100%'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Main Page
          </Typography>
          <ButtonGroup variant="contained"  >
             {/* <Button onClick={() =>navigation.navigate("SignIn")} 
             //variant={isSignInFocused ? 'contained' : 'outlined'}
             >signIn</Button>
             <Button onClick={() =>navigation.navigate("SignUp")}  
            //  variant={isSignUpFocused ? 'contained' : 'outlined'}
             >signUp</Button>  */}
             <Button onClick={() => navigation.navigate("UsersList")}>Users</Button>
          </ButtonGroup>
          
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
    </Box>
    
  );
}

