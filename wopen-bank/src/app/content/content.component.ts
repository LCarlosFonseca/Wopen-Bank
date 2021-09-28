import { Component, OnInit } from '@angular/core';

//resolver problema de importação 
import Typed from 'typed.js';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

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
}
