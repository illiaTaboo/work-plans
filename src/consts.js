import HomeView from 'routes/Home';
import AboutView from 'routes/About';
import LoginView from 'routes/Login';
import MajorDetailsView from 'routes/MajorDetails';
import DiscipineDetailsView from 'routes/DiscipineDetails';

export const HOME_URL = '/';
export const MAJOR_URL = '/major';
export const MAJOR_DETAILS_URL = `${MAJOR_URL}/:id`;
export const DISCIPLINE_URL = '/discipline';
export const DISCIPLINE_DETAILS_URL = `${DISCIPLINE_URL}/:id`;
export const ABOUT_URL = '/about';
export const LOGIN_URL = '/login';
export const UNSPECIFIED_URL = '*';

export const LOGO_URL = '/img/logo.png';

export const LOGIN_ROUTE = {
  name: 'Login',
  path: LOGIN_URL,
  component: LoginView,
  color: 'primary',
  variant: 'outlined'
};

export const TOP_LEVEL_ROUTES = [
  {
    name: 'Home',
    path: HOME_URL,
    component: HomeView,
    exact: true
  },
  {
    name: 'About',
    path: ABOUT_URL,
    component: AboutView
  }
];

export const CORE_ROUTES = [
  {
    path: HOME_URL,
    component: HomeView,
    exact: true
  },
  {
    path: ABOUT_URL,
    component: AboutView
  },
  {
    path: LOGIN_URL,
    component: LoginView
  },
  {
    path: MAJOR_DETAILS_URL,
    component: MajorDetailsView
  },
  {
    path: DISCIPLINE_DETAILS_URL,
    component: DiscipineDetailsView
  }
];
