import HomeView from 'routes/Home';
import MajorView from 'routes/Major';
import AboutView from 'routes/About';
import LoginView from 'routes/Login';

export const HOME_URL = '/';
export const MAJOR_URL = '/major';
export const MAJOR_DETAILS_URL = `${MAJOR_URL}/:id`;
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
    name: 'Major',
    path: MAJOR_URL,
    component: MajorView,
    exact: true
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
