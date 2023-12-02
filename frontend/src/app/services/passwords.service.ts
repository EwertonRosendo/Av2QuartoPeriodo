import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
