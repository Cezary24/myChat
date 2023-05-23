import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor() {}

  isLoggedIn(): boolean {
    return true;
  }

  getToken(): string {
    return '123';
  }
}
