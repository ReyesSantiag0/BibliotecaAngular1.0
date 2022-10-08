import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registro } from 'src/app/interfaces/comentarios';


@Component({
  selector: 'app-registrar-libro',
  templateUrl: './registrar-libro.component.html',
  styleUrls: ['./registrar-libro.component.css']
})
export class RegistrarLibroComponent implements OnInit {

  registroLibro: FormGroup;


  constructor(private fb: FormBuilder) {
    this.registroLibro=this.fb.group({
      nombre_libro:['',Validators.required],
      isbn:['',Validators.required],
      editorial:['',Validators.required],
      autor_libro:['',Validators.required]
     
    })
   }
 

  ngOnInit(): void {
  }


  poner(){
    //console.log(this.agregaComentarios);
    const registro:Registro={
      nombre: this.registroLibro.get('nombre_libro')?.value,
      isbn: this.registroLibro.get('isbn')?.value,
      editorial: this.registroLibro.get('editorial')?.value,
      autor: this.registroLibro.get('autor_libro')?.value
      
    }

    console.log(registro);
  }

}
