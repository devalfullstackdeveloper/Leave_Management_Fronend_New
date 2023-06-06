import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  openMessageBoxDetected = new BehaviorSubject(null);
  openMessageBox = this.openMessageBoxDetected.asObservable();

  constructor(
    private httpClient: HttpClient,
    private router: Router    
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser') || '{}') : null)
    this.currentUser = this.currentUserSubject.asObservable();
  }

  baseUrl: string = environment.baseUrl || "http://localhost:4002/api/";

  public httpHeader = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  
  //Sign In API
  public getSignin(req: any) {
    return this.httpClient.post<any>(this.baseUrl + 'auth/login', req)
      .pipe(map(data => {
        return data;
      }));
  }

// View Check

  public viewCheck() {
    return this.httpClient.get<any>(this.baseUrl + 'auth/showForm12BB', {})
      .pipe(map(data => {
        return data;
      }));
  }

  //Reset Password

  public resetPassword(req: any) {
    return this.httpClient.post<any>(this.baseUrl + 'auth/resetPassword', req).pipe(map(data => {
      return data;
    }))
  }
}



