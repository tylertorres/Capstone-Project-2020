import firebase from 'firebase';

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyAj5mfd9eMZmvcSfZyNav9fjCe1i_v17GM',
        authDomain: 'indesyn-3fb48.firebaseapp.com',
        databaseURL: 'https://indesyn-3fb48.firebaseio.com',
        projectId: 'indesyn-3fb48',
        storageBucket: 'indesyn-3fb48.appspot.com',
        messagingSenderId: '929469838203',
        appId: '1:929469838203:web:68a15f4b6a9aec735a03de',
        measurementId: 'G-W7VEZCJPC1',
      });
    }
  };

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get database() {
    // database/messages
    return firebase.database().ref('messages');
  }

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  // parse message and format correctly for Gifted Chat
  parse = message => {
    const { user, text, timestamp, image } = message.val(); // json representation of the message
    // Unique id created from the database
    const { key: _id } = message;
    const createdAt = new Date(timestamp);
    return {
      _id,
      createdAt,
      text,
      user,
      image,
    };
  };

  on = callback =>
    this.database.on('child_added', snapshot => callback(this.parse(snapshot)));

  // send the message to the Backend, Firebase work
  send = (messages, image) => {
    messages.forEach(item => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
        image: item.image || '',
        // url passed in by react native image picker
      };
      this.database.push(message);
    });
  };

  // close the connection to the Backend
  off() {
    this.database.off();
  }
}

Fire.shared = new Fire();
export default Fire;
