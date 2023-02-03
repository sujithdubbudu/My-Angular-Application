import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  addUser(user:UserService) {
    return this.http.post(`${this.baseUrl}/save`, user);
  }

  deleteUser(id:any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
