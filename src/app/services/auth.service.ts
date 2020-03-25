import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {User} from "../model/user";
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import 'rxjs/operator/filter';

@Injectable()
export class AuthService {
 // domain = ""; // Production
  domain = environment.domain;
  authToken: any;
  user: any;
  options;
  currentUser = {};
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(
    private http: HttpClient,
    public router: Router
  ) { 
   
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token); // Set token in local storage
    localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
    this.authToken = token; // Assign token to be used elsewhere
    this.user = user; // Set user to be used elsewhere
  }
  getToken() {
    return localStorage.getItem('id_token');
  }
  // Function to get token from client local storage
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token; // Get token and asssign to variable to be used elsewhere
  }

  // Function to register user accounts
  registerUser(user: User): Observable<any> {
    
    return this.http.post(this.domain + 'api/register', user).pipe(
      catchError(this.handleError)
    )
  }

  // Function to check if username is taken
  checkUsername(username) {
    return this.http.get(this.domain + 'api/checkUsername/' + username)
  }

  // Function to check if e-mail is taken
  checkEmail(email) {
    return this.http.get(this.domain + 'api/checkEmail/' + email)
  }

  // Function to login user
  login(user: User) {
    return this.http.post<any>(`${this.domain}api/login`, user)
  }
  // Function to logout
  logout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/login']);
    }
  }


  // Function to get user's profile data
  getProfile():Observable<any>{    
    let api = `${this.domain}api/profile/`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res  || {}; 
      }
     
      ),
      catchError(this.handleError)
    )
  }
  
  
  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
 
  // Function to check if user is logged in
  loggedIn() {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

}
