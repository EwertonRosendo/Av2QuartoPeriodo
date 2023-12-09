import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

//import {LoginResponse } from 'login-response.interface'

@Injectable({
  providedIn: 'root'
})
export class PasswordsService {

  constructor(private http: HttpClient, private router: Router) { }


  public email:string = '';

  postPassword(lengthPassword: number) {
    this.http.post('http://127.0.0.1:8000/password/', { lenghtPassword: lengthPassword, email:this.email })
      .subscribe(
        (response) => {
          console.log('Requisição enviada com sucesso', response);
        },
        (error) => {
          console.error('Erro ao enviar a requisição', error);
        }
      );
  }

  getPassword(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/password/');
  }
  

  postUser(email:string, username:string, password:string){
    this.http.post('http://127.0.0.1:8000/users/', { email: email,username: username, password:password })
      .subscribe(
        (response) => {
          console.log('Requisição enviada com sucesso', response);
        },
        (error) => {
          console.error('Erro ao enviar a requisição', error);
        }
      );

  }
  
  getUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/users/');
  }

  postLogin(email:string, password:string){
    return this.http.post('http://127.0.0.1:8000/login/',{'email':email,'password':password})
    .subscribe(
      (response) => {
        //console.log('Requisição enviada com sucesso', response);
        this.email = email;
        this.router.navigate(['/home']);
        
      },
      (error) => {
        console.error('Erro ao enviar a requisição', error);
      }
    );
  }
/*
  deletePassword(user_id: number): Observable<any> {
    const url = `http://127.0.0.1:8000/password/${user_id}`;
    return this.http.delete(url);
  }

  updatePassword(user_id: number, updatedData: any): Observable<any> {
    const url = `http://127.0.0.1:8000/password/${user_id}`;
    return this.http.put(url, updatedData);
  }

  deleteUser(id: number): Observable<any> {
    const url = `http://127.0.0.1:8000/password/${id}`;
    return this.http.delete(url);
  }

  updateUser(id: number, updatedData: any): Observable<any> {
    const url = `http://127.0.0.1:8000/password/${id}`;
    return this.http.put(url, updatedData);
  }*/

}
