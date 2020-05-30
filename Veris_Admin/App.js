import React from 'react';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './app/components/Main';
import News from './app/components/News';
import Events from './app/components/Events';
import Login from './app/components/Login';
import Profile from './app/components/Profile';
import Fees from './app/components/Fees';
import Registration from './app/components/Registration';
import Announcements from './app/components/Announcements';

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