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

const disciplines = [
  {
    'id': 1,
    'name': 'Databases Design',
    'hours': 180,
    'credits': 6,
    'total': 48,
    'lect': 30,
    'pract': 15,
    'labs': 0,
    'indivWork': 3,
    'indepWork': 72,
    'exam': 1,
    'test': 1,
    'courseProj': 0
  },
  {
    'id': 2,
    'name': 'Computer Architecture',
    'hours': 150,
    'credits': 5,

    'total': 64,
    'lect': 30,
    'pract': 0,
    'labs': 30,
    'indivWork': 4,
    'indepWork': 86,
    'exam': 0,
    'test': 3,
    'courseProj': 0
  },
  {
    'id': 3,
    'name': 'Foreign Language',
    'hours': 90,
    'credits': 3,

    'total': 41,
    'lect': 0,
    'pract': 30,
    'labs': 0,
    'indivWork': 11,
    'indepWork': 49,
    'exam': 4,
    'test': 0,
    'courseProj': 0
  },
  {
    'id': 4,
    'name': 'Computer Discreet Mathematics',
    'hours': 120,
    'credits': 5,

    'total': 64,
    'lect': 30,
    'pract': 0,
    'labs': 30,
    'indivWork': 4,
    'indepWork': 86,
    'exam': 0,
    'test': 3,
    'courseProj': 0
  },
  {
    'id': 5,
    'name': 'Object-Oriented Programming',
    'hours': 360,
    'credits': 5,

    'total': 64,
    'lect': 30,
    'pract': 0,
    'labs': 30,
    'indivWork': 4,
    'indepWork': 86,
    'exam': 0,
    'test': 3,
    'courseProj': 0
  },
  {
    'id': 6,
    'name': 'Software Modeling and Analysis',
    'hours': 90,
    'credits': 5,

    'total': 64,
    'lect': 30,
    'pract': 0,
    'labs': 30,
    'indivWork': 4,
    'indepWork': 86,
    'exam': 0,
    'test': 3,
    'courseProj': 0
  },
  {
    'id': 7,
    'name': 'Operating Systems',
    'hours': 180,
    'credits': 5,

    'total': 64,
    'lect': 30,
    'pract': 0,
    'labs': 30,
    'indivWork': 4,
    'indepWork': 86,
    'exam': 0,
    'test': 3,
    'courseProj': 0
  },
  {
    'id': 8,
    'name': 'Computer Networks Organizing',
    'hours': 180,
    'credits': 5,

    'total': 64,
    'lect': 30,
    'pract': 0,
    'labs': 30,
    'indivWork': 4,
    'indepWork': 86,
    'exam': 0,
    'test': 3,
    'courseProj': 0
  },
  {
    'id': 9,
    'name': 'Intelligent Robotic Systems',
    'hours': 150,
    'credits': 5,

    'total': 64,
    'lect': 30,
    'pract': 0,
    'labs': 30,
    'indivWork': 4,
    'indepWork': 86,
    'exam': 0,
    'test': 3,
    'courseProj': 0
  },
  {
    'id': 10,
    'name': 'System Analysis and Design',
    'hours': 90,
    'credits': 5,

    'total': 64,
    'lect': 30,
    'pract': 0,
    'labs': 30,
    'indivWork': 4,
    'indepWork': 86,
    'exam': 0,
    'test': 3,
    'courseProj': 0
  },
  {
    'id': 11,
    'name': 'Software Economics',
    'hours': 120,
    'credits': 5,

    'total': 64,
    'lect': 30,
    'pract': 0,
    'labs': 30,
    'indivWork': 4,
    'indepWork': 86,
    'exam': 0,
    'test': 3,
    'courseProj': 0
  },
  {
    'id': 12,
    'name': 'Introduction to Software Engineering',
    'hours': 180,
    'credits': 5,

    'total': 64,
    'lect': 30,
    'pract': 0,
    'labs': 30,
    'indivWork': 4,
    'indepWork': 86,
    'exam': 0,
    'test': 3,
    'courseProj': 0
  }
];

const faculties = [
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

  disciplines = () => {
    return disciplines;
  }
}

export default new Firebase();
