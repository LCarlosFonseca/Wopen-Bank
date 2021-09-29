import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//resolver problema de importação 
import Typed from 'typed.js';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const options = {
      stringsElement : '#typed-strings',
      strings: ['Wopen Bank seu banco, seu jeito', 'Pensou liberdade, abra sua conta no Wopen Bank', 'Liberdade, Igualdade e Acessibilidade só no Wopen Bank'],
      
      typeSpeed: 100,

      backSpeed: 100,

      backDelay: 200,

      smartBackspace: true,

      fadeOut: true, 

      showCursor: false, 
      
      starDelay: 1000,

      loop: true
    };

    const typed = new Typed ('.typing-element',options);
  }
  //insere o método de levar para a página clientes
  gotoCadastroClientes() {
    this.router.navigate(['cadastro-clientes'])
  }
}
