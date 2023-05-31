import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient,
  ) { }
  baseUrl: string = environment.baseUrl || "http://localhost:4002/api/";

//Sign In
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
}
