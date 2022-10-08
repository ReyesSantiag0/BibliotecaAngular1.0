import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registro } from 'src/app/interfaces/comentarios';

@Component({
  selector: 'app-editar-informacion-libro',
  templateUrl: './editar-informacion-libro.component.html',
  styleUrls: ['./editar-informacion-libro.component.css']
})
export class EditarInformacionLibroComponent implements OnInit {
  registroLibro: FormGroup;


  constructor(private fb: FormBuilder) {
    this.registroLibro=this.fb.group({
      nombre_libro:['',Validators.required],
     
      autor_libro:['',Validators.required],
      isbn:['',Validators.required],
      editorial:['',Validators.required]
     
    })
   }
 

  ngOnInit(): void {
  }


  poner(){
    //console.log(this.agregaComentarios);
    const registro:Registro={
      nombre: this.registroLibro.get('nombre_libro')?.value,
     
      autor: this.registroLibro.get('autor_libro')?.value,
      isbn: this.registroLibro.get('isbn')?.value,
      editorial: this.registroLibro.get('editorial')?.value
      
    }

    console.log(registro);
  }

}
