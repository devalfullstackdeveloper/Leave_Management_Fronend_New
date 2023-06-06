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
  imageUrl:string = environment.docUrl;

  public httpHeader = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  //Get all user

public getEmployees() {
  return this.httpClient.get<any>(this.baseUrl + 'user/allusers').pipe(map(data => {
    return data;
  }));
}
}
