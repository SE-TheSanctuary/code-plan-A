import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBgTp39-s1M6uIqx3bxzczzoPLIp2qxWqg",
  authDomain: "santuary-e70d2.firebaseapp.com",
  databaseURL: "https://santuary-e70d2.firebaseio.com",
  projectId: "santuary-e70d2",
  storageBucket: "santuary-e70d2.appspot.com",
  messagingSenderId: "833121657303"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
