import firebase from './config';

export default {
  signInFlow: 'redirect',
  signInSuccessUrl: '/new',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ]
}
