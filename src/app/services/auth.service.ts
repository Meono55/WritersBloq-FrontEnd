import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../models/User.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Calls POST action on the /users api end point to create a new user
   * @param user to be created
   */
  register(user): Observable<User> {
    return this.http.post<User>(`${environment.p2ApiUrl}/users`, user)
  }


  /**
   * Calls POST action on the /auth api endpoint to retrieve a user from the database based on the credentials provided
   * @param email portion of the credentials
   * @param password portion of the credentials
   */
  login(email, password): Observable<User> {
    return this.http.post<User>(`${environment.p2ApiUrl}/auth`, {email, password})
  }
}
