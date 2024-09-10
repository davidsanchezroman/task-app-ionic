import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class noAuthGuard implements CanActivate {
  constructor(
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree > | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      return this.firebaseSvc.getAuthState().pipe(map(auth =>{
        if (!auth) {
        return true;
      }else {
        this.utilsSvc.routerLink('/tabs/home')
        return false;
      }
      }))     
         
}

}
