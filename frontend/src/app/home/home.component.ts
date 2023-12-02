import { Component, OnInit, numberAttribute } from '@angular/core';
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

   texto: any = {
    frase: 'cancelar'
   };

   textodois: any = {
    frase: 'SALVAR'
   };

  formPasswords: FormGroup = new FormGroup({});
  formUser: FormGroup = new FormGroup({});

  //abaixo a lista dois do ngfor
  litadois: number[] = [1,2,3,4];
  //abaixo a lista um do ngfor
  litaums: string[] = ["1","2","3","4","5"];
  //capelas é apenas para dizer que usamos ngif
  capelas: string[] = ["um","dois"];

  listUsers:[] = [];

  listPassword:[] = [];

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
        
        this.listPassword = response.passwords;
        console.log('Senha(s) obtida(s) com sucesso', this.listPassword);

        // Faça algo com a resposta aqui, por exemplo, atribuir a uma propriedade do componente
      },
      (error) => {
        console.error('Erro ao obter senhas', error);
      }
    );
    this.passService.getUser().subscribe(
      (response) => {
        
        this.listUsers = response.users;
        console.log('Usuário(s) obtido(s) com sucesso', this.listUsers);
        // Faça algo com a resposta aqui, por exemplo, atribuir a uma propriedade do componente
      },
      (error) => {
        console.error('Erro ao obter usuários', error);
      }
    );
  }

  

}
