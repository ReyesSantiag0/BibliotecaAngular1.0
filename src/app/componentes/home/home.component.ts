import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  img='https://brandemia.org/contenido/subidas/2017/01/nintendo_switch_logo-960x640.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
