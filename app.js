var config = {
    apiKey: "AIzaSyDrD1nwbHa1nWLaR_AZq2f59VR7uRs2I0A",
    authDomain: "akashdodke-2aa6f.firebaseapp.com",
    databaseURL: "https://akashdodke-2aa6f.firebaseio.com",
    projectId: "akashdodke-2aa6f",
    storageBucket: "akashdodke-2aa6f.appspot.com",
    messagingSenderId: "341463044468"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  db.settings(settings);
  
