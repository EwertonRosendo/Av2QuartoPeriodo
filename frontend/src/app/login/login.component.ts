import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {User} from "../models/user";
import {PasswordsService} from "../services/passwords.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  texto: any = {
    frase: 'cancelar'
   };

  formUser: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private passService: PasswordsService) { }
  
  ngOnInit() {
    
    this.createFormUser(new User());
    //this.getPasswords();
    //this.getUsers;
  }
  createFormUser(user: User) {
    this.formUser = this.formBuilder.group({
      username: [user.username],
      email: [user.email],
      passwordUser: [user.passwordUser],
      
    })
  }
  loginUser = []
  onSubmitLogin() {

    //console.log(this.formUser.value.email,  this.formUser.value.passwordUser)
    //this.passService.postLogin(this.formUser.value.email,  this.formUser.value.passwordUser)
    this.passService.postLogin('susto@gmail.com',  'susto123')
    console.log(this.passService.email)
    
  }

}
