import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
  
})
export class DataService {
  apiUrl='http://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get<UserService[]>(this.apiUrl);
  }
}
