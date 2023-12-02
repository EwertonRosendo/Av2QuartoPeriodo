import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Passwords} from "../models/passwords";
import {PasswordsService} from "../services/passwords.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formPasswords: FormGroup = new FormGroup({});


  constructor(private formBuilder: FormBuilder, private passService: PasswordsService) { }

  ngOnInit() {
    this.createForm(new Passwords());
  }

  createForm(passwords: Passwords) {
    this.formPasswords = this.formBuilder.group({
      lenghtPassword: [passwords.lenghtPassword],
      password: [passwords.password],
      user_id: [passwords.user_id],
      
    })
  }
  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    //this.passService.postPassword(parseInt(this.formPasswords.value.user_id), parseInt(this.formPasswords.value.lenghtPassword));
    this.passService.postPassword(10, 10);
    console.log(this.formPasswords.value);
  
    // chamando a função createForm para limpar os campos na tela
    this.createForm(new Passwords());
  }


}
