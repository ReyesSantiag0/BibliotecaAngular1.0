import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistroAdminComponent } from './resgistro-admin.component';

describe('ResgistroAdminComponent', () => {
  let component: ResgistroAdminComponent;
  let fixture: ComponentFixture<ResgistroAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgistroAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResgistroAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
