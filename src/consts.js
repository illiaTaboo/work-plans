import HomeView from 'routes/Home';
import TableView from 'routes/Table';
import AboutView from 'routes/About';
import LoginView from 'routes/Login';

export const HOME_URL = '/';
export const TABLE_URL = '/table';
export const ABOUT_URL = '/about';
export const LOGIN_URL = '/login';
export const UNSPECIFIED_URL = '*';

export const LOGO_URL = '/img/logo.png';

export const TOP_LEVEL_ROUTES = [
  {
    name: 'Home',
    path: HOME_URL,
    component: HomeView,
    exact: true
  },
  {
    name: 'Table',
    path: TABLE_URL,
    component: TableView
  },
  {
    name: 'About',
    path: ABOUT_URL,
    component: AboutView
  },
  {
    name: 'Login',
    path: LOGIN_URL,
    component: LoginView,
    color: 'primary',
    variant: 'outlined'
  }
];
