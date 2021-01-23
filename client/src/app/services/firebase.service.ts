import { Injectable } from '@angular/core';
import Firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor() {}

  firebaseConfig = {
    apiKey: 'AIzaSyBIW2bdR8rPBhxzh80XuT4CLGzDX3f6FGs',
    authDomain: 'erp-crm-b27aa.firebaseapp.com',
    databaseURL: 'https://erp-crm-b27aa.firebaseio.com',
    projectId: 'erp-crm-b27aa',
    storageBucket: 'erp-crm-b27aa.appspot.com',
    messagingSenderId: '361264961305',
    appId: '1:361264961305:web:cb277e056ecce295d25788',
    measurementId: 'G-TN62XJZ73F',
  };

  app = Firebase.initializeApp(this.firebaseConfig);

  initilaze() {
    return this.app;
  }
  identity() {
    return this.app.auth();
  }
  db() {
    return this.app.database();
  }
}
