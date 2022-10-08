import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Administrador } from 'src/app/interfaces/comentarios';

@Component({
  selector: 'app-resgistro-admin',
  templateUrl: './resgistro-admin.component.html',
  styleUrls: ['./resgistro-admin.component.css']
})
export class ResgistroAdminComponent implements OnInit {

  registroAdmin: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroAdmin=this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      celular:['',Validators.required],
      ndocumento:['',Validators.required],
      correo:['',Validators.required],
      contrasenia:['',Validators.required]
     
    })
   }
 

  ngOnInit(): void {
  }


  poner(){
    //console.log(this.agregaComentarios);
    const administrador:Administrador={
      nombre: this.registroAdmin.get('nombre')?.value,
      apellido: this.registroAdmin.get('apellido')?.value,
      celular: this.registroAdmin.get('celular')?.value,
      ndocumento: this.registroAdmin.get('ndocumento')?.value,
      correo: this.registroAdmin.get('correo')?.value,
      contrasenia: this.registroAdmin.get('contrasenia')?.value,
      
    }

    console.log(administrador);
  }

}
