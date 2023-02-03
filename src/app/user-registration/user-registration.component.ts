import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})

export class UserRegistrationComponent  {
  users: any;
  newUser = {};
  firstName: any;
  email: any;
  lastName: any;
  id:any;
 
  constructor(private http: HttpClient) { }


  onSubmit() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    const user = {
      firstName: this.firstName,
      email: this.email,
      lastName: this.lastName,
      id: this.id
    };
  
    this.http.post('http://localhost:8080/api/v1/save/users', JSON.stringify(user), { headers })
      .subscribe((response: any) => {
        console.log(response);
      });
}}



