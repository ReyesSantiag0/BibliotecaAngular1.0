import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sesion } from 'src/app/interfaces/comentarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inicioSesion: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inicioSesion=this.fb.group({
      usuario:['',Validators.required],
      contrasenia:['',Validators.required]
     
    })
   }
 

  ngOnInit(): void {
  }


  poner(){
    //console.log(this.agregaComentarios);
    const sesion:Sesion={
      usuario: this.inicioSesion.get('usuario')?.value,
      contrasenia: this.inicioSesion.get('contrasenia')?.value
      
    }

    console.log(sesion);
  }
}
