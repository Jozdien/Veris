import React from 'react';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './components/Main';
import News from './components/News';
import Events from './components/Events';
import Login from './components/Login';
import Profile from './components/Profile';
import Fees from './components/Fees';
import Registration from './components/Registration';
import Announcements from './components/Announcements';

const MainStack = createStackNavigator(
  {
    Main: Main,
  }
);

const NewsStack = createStackNavigator(
  {
    News: News,
  }
);

const EventsStack = createStackNavigator(
  {
    Events: Events,
  }
);

const LoginStack = createStackNavigator(
  {
    Login: Login,
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
  }
);

const FeesStack = createStackNavigator(
  {
    Fees: Fees,
  }
);

const RegistrationStack = createStackNavigator(
  {
    Registration: Registration,
  }
);

const AnnouncementsStack = createStackNavigator(
  {
    Announcements: Announcements,
  }
);

const UserAppNavigator = createStackNavigator({
  Main: Main,
  News: News,
  Events: Events,
  Login: Login,
  Profile: Profile,
  Fees: Fees,
  Registration: Registration,
  Announcements: Announcements
})

export default createAppContainer(createSwitchNavigator(
  {
    UserMain: { screen: UserAppNavigator },
  },
  {
    initialRouteName: 'UserMain',
  }
));