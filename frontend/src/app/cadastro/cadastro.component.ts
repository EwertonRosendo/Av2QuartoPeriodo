import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Passwords} from "../models/passwords";
import {User} from "../models/user";
import {PasswordsService} from "../services/passwords.service";
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  texto: any = {
    frase: 'cancelar'
   };

   textodois: any = {
    frase: 'SALVAR'
   };

  formUser: FormGroup = new FormGroup({});


  listUsers:[] = [];
  pUser: number = 1;
  pPass: number = 1;

  listPassword:[] = [];

  constructor(private formBuilder: FormBuilder, private passService: PasswordsService) { }
  
  ngOnInit() {
    this.createFormUser(new User());
    //this.getUsers;
  }
  
  createFormUser(user: User) {
    this.formUser = this.formBuilder.group({
      username: [user.username],
      email: [user.email],
      passwordUser: [user.passwordUser],
      
    })
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

}
