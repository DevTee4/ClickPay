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
import Profile from '../Screens/Profile/Profile';
import Card from '../Screens/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChartSimple, faHome, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard, faUser } from '@fortawesome/free-regular-svg-icons';
import ExpenseDetails from '../Screens/Home/ExpenseDetails';
import Transactions from '../Screens/Home/Transactions';
import Dashboard from '../Screens/History/Dashboard';
import NewCard from '../Screens/Card/NewCard';
import CardDetails from '../Screens/Card/CardDetails';
import Transfer from '../Screens/Transfer/Transfer';
import AmountTransfer from '../Screens/Transfer/AmountTransfer';
import ConfirmTransfer from '../Screens/Transfer/ConfirmTransfer';
import Preferences from '../Screens/Profile/Preferences';
import EditInfo from '../Screens/Profile/EditInfo';
import InviteFriends from '../Screens/Profile/InviteFriends';
import CardSettings from '../Screens/Card/CardSettings';


const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const CardStack = createNativeStackNavigator();
const TransferStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
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
              size={focused ? 30 : 22}
              color={focused ? '#004852' : '#CBCBCB'}
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
              size={focused ? 30 : 22}
              color={focused ? '#004852' : '#CBCBCB'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TransferScreens"
        component={TransferScreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faMoneyBillTransfer}
              size={focused ? 30 : 22}
              color={focused ? '#004852' : '#CBCBCB'}
            />
          )
        }}
      />
      <Tab.Screen
        name="CardScreens"
        component={CardScreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faCreditCard}
              size={focused ? 30 : 22}
              color={focused ? '#004852' : '#CBCBCB'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreens"
        component={ProfileScreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faUser}
              size={focused ? 30 : 22}
              color={focused ? '#004852' : '#CBCBCB'}
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
  )
}
const CardScreens = () => {
  return (
    <CardStack.Navigator>
      <CardStack.Screen
        name="Card"
        component={Card}
        options={{
          headerShown: false
        }}
      />
      <CardStack.Screen
        name="NewCard"
        component={NewCard}
        options={{
          headerShown: false
        }}
      />
      <CardStack.Screen
        name="CardDetails"
        component={CardDetails}
        options={{
          headerShown: false
        }}
      />
      <CardStack.Screen
        name="CardSettings"
        component={CardSettings}
        options={{
          headerShown: false
        }}
      />
    </CardStack.Navigator>
  )
}
const TransferScreens = () => {
  return (
    <TransferStack.Navigator>
      <TransferStack.Screen
        name="Transfer"
        component={Transfer}
        options={{
          headerShown: false
        }}
      />
      <TransferStack.Screen
        name="AmountTransfer"
        component={AmountTransfer}
        options={{
          headerShown: false
        }}
      />
      <TransferStack.Screen
        name="ConfirmTransfer"
        component={ConfirmTransfer}
        options={{
          headerShown: false
        }}
      />
    </TransferStack.Navigator>
  )
}
const ProfileScreens = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false
        }}
      />
      <ProfileStack.Screen
        name="Preferences"
        component={Preferences}
        options={{
          headerShown: false
        }}
      />
      <ProfileStack.Screen
        name="EditInfo"
        component={EditInfo}
        options={{
          headerShown: false
        }}
      />
      <ProfileStack.Screen
        name="InviteFriends"
        component={InviteFriends}
        options={{
          headerShown: false
        }}
      />
    </ProfileStack.Navigator>
  )
}
export default Router;