#Wallet Frontend
##Overview
Wallet Frontend is a React Native application that allows users to manage and edit user information. It leverages React, React Native, and Axios for efficient communication with a backend server.

##Features
Display a list of users with their names and email addresses.
Edit user information such as name and email.
Update user information via the backend server.
A navigation bar (SearchAppBar) that provides easy navigation to different sections of the application.
Authentication pages for signing in (SignIn) and signing up (SignUp).
A home page (home) that showcases the application's main content.
##Getting Started
###Prerequisites
Node.js (version x.x.x)
Expo CLI
React Native
Backend server running on http://localhost:3000 (Refer to your backend documentation for setup)
###Installation
1.Clone the repository:

bash
Copy code
git clone https://github.com/your-username/wallet-frontend.git
2.Navigate to the project directory:

bash
Copy code
cd wallet-frontend
3.Install dependencies:

bash
Copy code
npm install
###Usage
1.Start the development server:

bash
Copy code
npm start
2.Scan the QR code with the Expo Go app on your device or run on an emulator.

##Components
###SearchAppBar
The SearchAppBar component is a navigation bar that provides quick access to different sections of the application. It includes:

Menu button for navigation drawer.
Main page title.
Button group for navigation to different pages (e.g., Users).
More actions button for additional options.
###SignIn
The SignIn component provides a user interface for signing into the application. It includes:

Input fields for email and password.
Remember me checkbox.
Sign In button.
Links for forgot password and creating a new account.
###SignUp
The SignUp component offers a user interface for creating a new account. It includes:

Input fields for first name, last name, email, password, and confirm password.
Sign Up button.
Link for users who already have an account to Sign In.
###home
The home component represents the main content of the application. Currently, it includes the SearchAppBar component.

##Dependencies
@emotion/react
@emotion/styled
@expo/webpack-config
@mui/icons-material
@mui/material
@react-navigation/native
@react-navigation/native-stack
axios
cors
expo
expo-status-bar
react
react-native
react-native-web
##Contributing
If you want to contribute to this project, follow these steps:

Fork the project.
Create a new branch (git checkout -b feature/new-feature).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature/new-feature).
Open a pull request.
