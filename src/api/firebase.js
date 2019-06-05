import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

// mock

const faculties =
  [
    {
      'id': 1,
      'name': 'Faculty of Computer Information Technology',
      'majors': [
        {
          'id': 1,
          'name': 'Computer Science'
        },
        {
          'id': 2,
          'name': 'Computer Engineering'
        },
        {
          'id': 3,
          'name': 'Software Engineering'
        },
        {
          'id': 4,
          'name': 'Economic Cybernetics'
        },
        {
          'id': 5,
          'name': 'System Analysis'
        },
        {
          'id': 6,
          'name': 'Cyber Security'
        }
      ]
    },
    {
      'id': 2,
      'name': 'Faculty of Economics and Management',
      'majors': [
        {
          'id': 7,
          'name': 'Managment'
        },
        {
          'id': 8,
          'name': 'Marketing'
        },
        {
          'id': 9,
          'name': 'Economics and Management'
        },
        {
          'id': 10,
          'name': 'Public Management'
        },
        {
          'id': 11,
          'name': 'Entrepreneurship, Trade and Stock-taking activity'
        }
      ]
    }
  ];

class Firebase {
  constructor () {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  isInitialized = () => {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  login = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  logout = () => this.auth.signOut();

  getCurrentUsername = () =>
    this.auth.currentUser;

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  // mock

  faculties = () => {
    return faculties;
  };
}

export default new Firebase();
