import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordsService {

  constructor(private http: HttpClient) { }

  postPassword(user_id: number, lengthPassword: number) {
    this.http.post('http://127.0.0.1:8000/password/', { lenghtPassword: lengthPassword, user_id: user_id })
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
  }

}
