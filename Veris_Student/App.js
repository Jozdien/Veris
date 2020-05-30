import React from 'react';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './app/components/Main';
import News from './app/components/News';
import Events from './app/components/Events';
import Login from './app/components/Login';
import Profile from './app/components/Profile';
import Attendance from './app/components/Attendance';
import Blogs from './app/components/Blogs';
import Fees from './app/components/Fees';
import Marks from './app/components/Marks';
import Notifications from './app/components/Notifications';

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