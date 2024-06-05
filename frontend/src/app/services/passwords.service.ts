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


  public username:string = '';
  public url:string = 'http://ec2-3-145-145-3.us-east-2.compute.amazonaws.com';

  postPassword(lengthPassword: number) {
    this.http.post( this.url +':8000/password/', { lenghtPassword: lengthPassword, username:this.username })
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
    return this.http.get(this.url+':8000/user/'+this.username+'/');
  }
  

  postUser(email:string, username:string, password:string){
    this.http.post(this.url+':8000/users/', { email: email,username: username, password:password })
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
    return this.http.get(this.url+':8000/users/');
  }

  postLogin(username:string, password:string){
    return this.http.post(this.url+':8000/login/',{'username':username,'password':password})
    .subscribe(
      (response) => {
        //console.log('Requisição enviada com sucesso', response);
        this.username = username;
        this.router.navigate(['/home']);
        
      },
      (error) => {
        console.error('Erro ao enviar a requisição', error);
      }
    );
  }
  deletePassword(id: number) {
    this.http.delete(this.url + ':8000/password/'+id+'/')
    .subscribe(() => console.log('deletado com sucesso'));
  }

/*
  deletePassword(user_id: number): Observable<any> {
    const url = `ec2-18-118-131-108.us-east-2.compute.amazonaws.com:8000/password/${user_id}`;
    return this.http.delete(url);
  }

  updatePassword(user_id: number, updatedData: any): Observable<any> {
    const url = `ec2-18-118-131-108.us-east-2.compute.amazonaws.com:8000/password/${user_id}`;
    return this.http.put(url, updatedData);
  }

  deleteUser(id: number): Observable<any> {
    const url = `ec2-18-118-131-108.us-east-2.compute.amazonaws.com:8000/password/${id}`;
    return this.http.delete(url);
  }

  updateUser(id: number, updatedData: any): Observable<any> {
    const url = `ec2-18-118-131-108.us-east-2.compute.amazonaws.com:8000/password/${id}`;
    return this.http.put(url, updatedData);
  }*/

}
