import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const URL = environment.URL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  signup(userDetails:any): Observable<any> {
    return this.http.post(URL + 'auth',userDetails);
  }
  authenticate(loginDetails: any): Observable<any> {
    return this.http.post(URL + 'auth' , loginDetails);
  }

}