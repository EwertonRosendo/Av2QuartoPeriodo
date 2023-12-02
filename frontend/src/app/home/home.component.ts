import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Passwords} from "../models/passwords";
import {User} from "../models/user";
import {PasswordsService} from "../services/passwords.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formPasswords: FormGroup = new FormGroup({});
  formUser: FormGroup = new FormGroup({});


  constructor(private formBuilder: FormBuilder, private passService: PasswordsService) { }

  ngOnInit() {
    this.createFormPassword(new Passwords());
    this.createFormUser(new User());
    this.getPasswords();
    //this.getUsers;
  }

 /*
  createForm(user: User) {
    this.formPasswords = this.formBuilder.group({
      username: [user.username],
      email: [user.email],
      passwordUser: [user.passwordUser],
      
    })
  }

*/


  createFormPassword(passwords: Passwords) {
    this.formPasswords = this.formBuilder.group({
      lenghtPassword: [passwords.lenghtPassword],
      password: [passwords.password],
      user_id: [passwords.user_id],
      
    })
  }

  createFormUser(user: User) {
    this.formUser = this.formBuilder.group({
      username: [user.username],
      email: [user.email],
      passwordUser: [user.passwordUser],
      
    })
  }
  onSubmitPassword() {
    this.passService.postPassword(parseInt(this.formPasswords.value.user_id), parseInt(this.formPasswords.value.lenghtPassword));
    console.log(this.formPasswords.value);
  
    // chamando a função createForm para limpar os campos na tela
    this.createFormPassword(new Passwords());
  }
  onSubmitUser() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    //this.passService.postPassword(parseInt(this.formPasswords.value.user_id), parseInt(this.formPasswords.value.lenghtPassword));
    //this.passService.postPassword(parseInt(this.formPasswords.value.user_id), parseInt(this.formPasswords.value.lenghtPassword));
    this.passService.postUser(this.formUser.value.email,this.formUser.value.username, this.formUser.value.passwordUser);
    console.log(this.formUser.value);
  
    // chamando a função createForm para limpar os campos na tela
    this.createFormUser(new User());
  }

  getPasswords() {
    this.passService.getPassword().subscribe(
      (response) => {
        console.log('Senha(s) obtida(s) com sucesso', response);
        // Faça algo com a resposta aqui, por exemplo, atribuir a uma propriedade do componente
      },
      (error) => {
        console.error('Erro ao obter senhas', error);
      }
    );
    this.passService.getUser().subscribe(
      (response) => {
        console.log('Usuário(s) obtido(s) com sucesso', response);
        // Faça algo com a resposta aqui, por exemplo, atribuir a uma propriedade do componente
      },
      (error) => {
        console.error('Erro ao obter usuários', error);
      }
    );
  }

  

}
