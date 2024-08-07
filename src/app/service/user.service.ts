import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  basepath = 'http://localhost:8080/api/user'
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });


  constructor(
    private httpClient: HttpClient,
    
  ) { }

  getAllUsers(): Observable<any>{
    return this.httpClient.get(`${this.basepath}/all`);
  }
}
