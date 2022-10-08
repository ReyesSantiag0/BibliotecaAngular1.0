import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prestamo } from 'src/app/interfaces/comentarios';

@Component({
  selector: 'app-prestar-libro',
  templateUrl: './prestar-libro.component.html',
  styleUrls: ['./prestar-libro.component.css']
})
export class PrestarLibroComponent implements OnInit {

  registroPrestamo: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroPrestamo=this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      tipodoc:['',Validators.required],
      ndocumento:['',Validators.required],
      correo:['',Validators.required],
      celular:['',Validators.required]
     
    })
   }
 

  ngOnInit(): void {
  }


  poner(){
    //console.log(this.agregaComentarios);
    const prestamo:Prestamo={
      nombre: this.registroPrestamo.get('nombre')?.value,
      apellido: this.registroPrestamo.get('apellido')?.value,
      tipodoc: this.registroPrestamo.get('tipodoc')?.value,
      
      ndocumento: this.registroPrestamo.get('ndocumento')?.value,
      correo: this.registroPrestamo.get('correo')?.value,
      celular: this.registroPrestamo.get('celular')?.value,
      fprestamo: this.registroPrestamo.get('fprestamo')?.value,
      fdevolucion: this.registroPrestamo.get('fdevolucion')?.value
      
    }

    console.log(prestamo);
  }
}
