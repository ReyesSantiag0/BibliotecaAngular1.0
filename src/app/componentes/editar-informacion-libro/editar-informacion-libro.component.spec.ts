import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInformacionLibroComponent } from './editar-informacion-libro.component';

describe('EditarInformacionLibroComponent', () => {
  let component: EditarInformacionLibroComponent;
  let fixture: ComponentFixture<EditarInformacionLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInformacionLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarInformacionLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
