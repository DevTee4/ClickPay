import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SplashScreen } from '../Screens/Onboarding/Splash';
import React from 'react';
import OnboardingScreen from '../Screens/Onboarding/Onboarding';
import Onboarding2Screen from '../Screens/Onboarding/Onboarding2';
import Onboarding3Screen from '../Screens/Onboarding/Onboarding3';
import SignUp from '../Screens/Auth/SignUp';
import SignIn from '../Screens/Auth/SignIn';
import ForgotPassword from '../Screens/Auth/ForgotPassword';
import VerifyEmail from '../Screens/Auth/VerifyEmail';
import ResetPassword from '../Screens/Auth/ResetPassword';
import SetPin from '../Screens/Auth/SetPin';
import VerifyIdentity from '../Screens/Auth/VerifyIdentity';
import YourPhoto from '../Screens/Auth/YourPhoto';
import ResidencyProof from '../Screens/Auth/ResidencyProof';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import Dashboard from '../Screens/Dashboard/Dashboard';
import Profile from '../Screens/Profile/Profile';
import Card from '../Screens/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChartSimple, faHome } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard, faUser } from '@fortawesome/free-regular-svg-icons';
import ExpenseDetails from '../Screens/Home/ExpenseDetails';
import Transactions from '../Screens/Home/Transactions';


const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainLayout = () => {
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: '#fff',
          elevation: 1,
          borderTopWidth: 1,
          borderTopColor: '#CBCBCB'
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
      >
      <Tab.Screen
        name="HomeScreens"
        component={HomeScreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faHome}
              size={24}
              color={focused ? 'black' : '#CBCBCB'}
            />
          ),
        }}
        />
      <Tab.Screen
        name="Dashboard" 
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faChartSimple}
              size={24}
              color={focused ? 'black' : '#CBCBCB'}
            />
          ),
        }}
        />
      <Tab.Screen
        name="Card"
        component={Card}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faCreditCard}
              size={24}
              color={focused ? 'black' : '#CBCBCB'}
            />
          ),
        }}
        />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faUser}
              size={24}
              color={focused ? 'black' : '#CBCBCB'}
            />
          ),
        }}
        />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Onboarding2"
        component={Onboarding2Screen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Onboarding3"
        component={Onboarding3Screen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="VerifyEmail"
        component={VerifyEmail}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="SetPin"
        component={SetPin}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="VerifyIdentity"
        component={VerifyIdentity}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="YourPhoto"
        component={YourPhoto}
        options={{
          title: 'Your Photo',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="ResidencyProof"
        component={ResidencyProof}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="MainLayout"
        component={MainLayout}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
const HomeScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <HomeStack.Screen
        name="ExpenseDetails"
        component={ExpenseDetails}
        options={{
          headerShown: false
        }}
      />
      <HomeStack.Screen
        name="Transactions"
        component={Transactions}
        options={{
          headerShown: false
        }}
      />
      </HomeStack.Navigator>
  )}
export default Router;