/* eslint-disable max-len */
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
    'majorId': 1,
    'code': '5-1',
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
    'courseProj': 0,
    'semester': 4,
    'ukrName': 'Проектування Баз Данних',
    'lang': 'Ukrainian',
    'lector': 'Spilchuk V. M.',
    'teacher': 'Spilchuk V. M.',
    'objective': 'To give students general knowledge in the field of database systems.To present methodology of data modeling and database designing.To describe query processing in the relational data model',
    'outcome': 'To describe the architecture of the database management system. To design a logical structure of the database according to user requirements. To write queries by means of algebraic operators and SQL. To identify dependencies between the attributes and to design relations in respective normal forms. To analyze algorithms of concurrent transaction executions. To describe main systems of file organization',
    'materials': 'Elmasri R., Navathe S.: Fundamentals of Database Systems. (7th edition) Pearson, 2015. Ullman J., Widom J.: A First Course in Database Systems. (3th edition) Pearson, 2014. Garcia-Molina H., Ullman J., Widom J.: Database systems: The complete book. (2th edition)',
    'workload': 50
  },
  {
    'id': 2,
    'majorId': 1,
    'code': '5-2',
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
    'courseProj': 0,
    'semester': 3
  },
  {
    'id': 3,
    'majorId': 1,
    'code': '5-3',
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
    'courseProj': 0,
    'semester': 4
  },
  {
    'id': 4,
    'majorId': 1,
    'code': '5-4',
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
    'courseProj': 0,
    'semester': 4
  },
  {
    'id': 5,
    'majorId': 1,
    'code': '5-5',
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
    'courseProj': 0,
    'semester': 2
  },
  {
    'id': 6,
    'majorId': 1,
    'code': '5-6',
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
    'courseProj': 0,
    'semester': 2
  },
  {
    'id': 7,
    'majorId': 1,
    'code': '5-7',
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
    'courseProj': 0,
    'semester': 3
  },
  {
    'id': 8,
    'majorId': 1,
    'code': '5-8',
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
    'courseProj': 0,
    'semester': 6
  },
  {
    'id': 9,
    'majorId': 1,
    'code': '5-9',
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
    'courseProj': 0,
    'semester': 4
  },
  {
    'id': 10,
    'majorId': 1,
    'code': '5-10',
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
    'courseProj': 0,
    'semester': 4
  },
  {
    'id': 11,
    'majorId': 1,
    'code': '5-11',
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
    'courseProj': 0,
    'semester': 4
  },
  {
    'id': 12,
    'majorId': 1,
    'code': '5-12',
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
    'courseProj': 0,
    'semester': 4
  }
];

const faculties = [
  {
    'id': 1,
    'name': 'Faculty of Computer Information Technology',
    'majors': [
      {
        'id': 1,
        'firstCycle': true,
        'fullTime': true,
        'name': 'Computer Science'
      },
      {
        'id': 2,
        'firstCycle': true,
        'fullTime': true,
        'name': 'Computer Engineering'
      },
      {
        'id': 3,
        'firstCycle': true,
        'fullTime': true,
        'name': 'Software Engineering'
      },
      {
        'id': 4,
        'firstCycle': true,
        'fullTime': true,
        'name': 'Economic Cybernetics'
      },
      {
        'id': 5,
        'firstCycle': true,
        'fullTime': true,
        'name': 'System Analysis'
      },
      {
        'id': 6,
        'firstCycle': true,
        'fullTime': true,
        'name': 'Cyber Security'
      }
      // {
      //   'id': 7,
      //   'firstCycle': false,
      //   'fullTime': true,
      //   'name': 'Software Engineering'
      // },
      // {
      //   'id': 8,
      //   'firstCycle': true,
      //   'fullTime': false,
      //   'name': 'Software Engineering'
      // },
      // {
      //   'id': 9,
      //   'firstCycle': false,
      //   'fullTime': true,
      //   'name': 'Computer Science'
      // },
      // {
      //   'id': 10,
      //   'firstCycle': true,
      //   'fullTime': false,
      //   'name': 'Computer Science'
      // },
      // {
      //   'id': 11,
      //   'firstCycle': false,
      //   'fullTime': false,
      //   'name': 'Software Engineering'
      // }
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

  userSession = (action, email, password) =>
    this.auth[`${action}WithEmailAndPassword`](email, password);

  getCurrentUser = () =>
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
