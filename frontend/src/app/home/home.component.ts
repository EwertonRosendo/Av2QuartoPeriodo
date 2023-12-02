import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Cliente} from "../clientes/shared/cliente"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formCliente: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente) {
    this.formCliente = this.formBuilder.group({
      nome: [cliente.nome],
      tipo: [cliente.tipo],
      genero: [cliente.genero],
      observacao: [cliente.observacao],
      inativo: [cliente.inativo]
    })
  }
  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formCliente.value);
  
    // chamando a função createForm para limpar os campos na tela
    this.createForm(new Cliente());
  }


}
