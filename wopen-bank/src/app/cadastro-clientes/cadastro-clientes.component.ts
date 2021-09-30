import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  formCadastro: any;
  conversao: string | undefined;
  valoresForm: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  this.formCadastro = this.fb.group({
    nome: [''],
    cpf: [],
    email: [''],
    telefone: [],
    endereço: []
  });
  }
  //convertendo dados recebidos em string e salvando no local storage do navegador
  cadastro() {
    this.conversao = JSON.stringify(this.valoresForm);
    console.log(this.conversao);
    localStorage.setItem('cadastro',this.conversao)
  }
}
