import { Inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';
import { getAuth, updateProfile } from 'firebase/auth';

import { from } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    @Inject (UtilsService) private utilsSvc: UtilsService
  ) { }

  // AUTENTICACION

  login(user: User): Promise<any> {
    return this.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  signUp(user: User): Promise<any> {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  updateUser(user: any){
    const auth = getAuth();
    return updateProfile(auth.currentUser, user)
  }

  getAuthState(){
    return this.auth.authState
  }

  async signOut(){
    await this.auth.signOut();
    this.utilsSvc.routerLink('/auth');
    localStorage.removeItem('user');
  }


//Base de Datos Firebase

getSubcollection(path: string, subcollectionName: string){
  return this.db.doc(path).collection(subcollectionName).valueChanges({ idField: 'id'})
}

}
