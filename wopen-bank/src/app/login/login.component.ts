import { Component, OnInit } from '@angular/core';
import { FormBuilder  } from "@angular/forms";
import { Router } from "@angular/router";
//importar MatDialog?
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:any
  theEvent:any;
  key:any;
  regex:any;
  keys:any;
  getCadastro:any;
  message:any;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  this.formLogin = this.fb.group({
    cpf: [ '']
  });
  }

  onlynumber(evt:any) {
    this.theEvent = evt ||window.event;
    this.key = this.theEvent.keyCode || this.theEvent.which;
    this.key = String.fromCharCode(this.key);
    this.regex = /^[0-9.]+$/;
    if(!this.regex.test(this.key)){
      this.theEvent.returnValue = false;
      if(this.theEvent.preventDefault){
      }
    }
  }
}

