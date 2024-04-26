import { Injectable } from "@angular/core";

@Injectable(
  {
    providedIn: 'root'
  }
)

export class AuthService {
  private token = 'My Fake Token';

  getToken(): string {
    return this.token;
  }
}

