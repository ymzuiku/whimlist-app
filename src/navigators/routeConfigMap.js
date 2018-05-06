// 请按名称排序放置
import Example from '../screens/Example';
import ForgotPassword from '../screens/ForgotPassword';
import Home from '../screens/Home';
import Initialize from '../screens/Initialize';
import ListDetail from '../screens/ListDetail';
import ListNew from '../screens/ListNew';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Settings from '../screens/Settings';
import TaskDetail from '../screens/TaskDetail';
import TaskNew from '../screens/TaskNew';
import UserProfile from '../screens/UserProfile';
import UserProfileEdit from '../screens/UserProfileEdit';

const routeConfigMap = {
  Example: {
    screen: Example,
  },
  ForgotPassword: {
    screen: ForgotPassword,
  },
  Home: {
    screen: Home,
    path: '',
    navigationOptions: {
      header: null,
    },
  },
  Initialize: {
    screen: Initialize,
  },
  ListDetail: {
    screen: ListDetail,
  },
  ListNew: {
    screen: ListNew,
  },
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  Settings: {
    screen: Settings,
  },
  TaskDetail: {
    screen: TaskDetail,
  },
  TaskNew: {
    screen: TaskNew,
  },
  UserProfile: {
    screen: UserProfile,
  },
  UserProfileEdit: {
    screen: UserProfileEdit,
  },
};

export default routeConfigMap;
