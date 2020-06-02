import React from 'react';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './components/Main';
import News from './components/News';
import Events from './components/Events';
import Login from './components/Login';
import Profile from './components/Profile';
import Attendance from './components/Attendance';
import Blogs from './components/Blogs';
import Fees from './components/Fees';
import Marks from './components/Marks';
import Notifications from './components/Notifications';

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

const AttendanceStack = createStackNavigator(
  {
    Attendance: Attendance,
  }
);

const BlogsStack = createStackNavigator(
  {
    Blogs: Blogs,
  }
);

const FeesStack = createStackNavigator(
  {
    Fees: Fees,
  }
);

const MarksStack = createStackNavigator(
  {
    Marks: Marks,
  }
);

const NotificationsStack = createStackNavigator(
  {
    Notifications: Notifications,
  }
);

const UserAppNavigator = createStackNavigator({
  Main: Main,
  News: News,
  Events: Events,
  Login: Login,
  Profile: Profile,
  Attendance: Attendance,
  Blogs: Blogs,
  Fees: Fees,
  Marks: Marks,
  Notifications: Notifications
})

export default createAppContainer(createSwitchNavigator(
  {
    UserMain: { screen: UserAppNavigator },
  },
  {
    initialRouteName: 'UserMain',
  }
));