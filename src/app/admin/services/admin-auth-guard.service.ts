import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private auth: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .map(appUser => appUser.isAdmin);
  }
}
