import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(){

}
senha: string = "";
tamanho_senha: number = 0;
username:string = "";

setTmhSenhaAndUser(tmh:number, username:string){
  this.tamanho_senha = tmh;
  this.username = username;
}



}
