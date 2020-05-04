import firebase from 'firebase';

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyDrEu4rcDoek8RkzeaE_fBPAqRvgrGb_Vo',
        authDomain: 'indesyndev.firebaseapp.com',
        databaseURL: 'https://indesyndev.firebaseio.com',
        projectId: 'indesyndev',
        storageBucket: 'indesyndev.appspot.com',
        messagingSenderId: '666199361952',
        appId: '1:666199361952:web:b230561d22cf65f1fa3cc5',
        measurementId: 'G-SSMQ0D7F4M',
      });
    }
  };

  observeAuth = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        try {
          firebase.auth().signInAnonymously();
        } catch ({ message }) {
          alert(message);
        }
      }
    });
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  get database() {
    return firebase.database().ref('messages');
  }

  on = callback => this.database.on('child_added', snapshot => callback(this.parse(snapshot)));

  off = () => {
    this.database.off();
  };

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

  // send the message to the Backend, Firebase work
  send = messages => {
    //console.log(messages);
    messages.forEach(item => {
      const message = {
        text: item.text || '',
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
        image: item.image.path || '',
        // url passed in by react native image picker
      };
      this.database.push(message);
    });
  };
}

Fire.shared = new Fire();
export default Fire;
