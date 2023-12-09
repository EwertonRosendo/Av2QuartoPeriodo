import { Component, OnInit, numberAttribute } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Passwords} from "../models/passwords";
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

  listUsers:[] = [];
  pPass: number = 1;

  listPassword:[] = [];

  constructor(private formBuilder: FormBuilder, private passService: PasswordsService) { }
  
  ngOnInit() {
    
    this.createFormPassword(new Passwords());
    
    this.getPasswords();
    
  }

  createFormPassword(passwords: Passwords) {
    this.formPasswords = this.formBuilder.group({
      lenghtPassword: [passwords.lenghtPassword],
      
    })
  }

  
  onSubmitPassword() {
    console.log(this.formPasswords.value.lenghtPassword)
    this.passService.postPassword(this.formPasswords.value.lenghtPassword);
    
    console.log(this.formPasswords);
  
    // chamando a função createForm para limpar os campos na tela
    this.createFormPassword(new Passwords());
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
  }

  

}
