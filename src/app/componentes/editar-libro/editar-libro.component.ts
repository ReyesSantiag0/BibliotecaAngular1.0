import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/interfaces/comentarios';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  listaLibros: Libro []= [
    {
    nombre:'Programacion',
    isbn:'252525',
    editorial:'Malasca',
    autor:'Juan Perez'
  
  },

  {
    nombre:'Programacion',
    isbn:'252525',
    editorial:'Malasca',
    autor:'Juan Perez'
  
  },
]

  constructor() { }

  ngOnInit(): void {
  }


}
