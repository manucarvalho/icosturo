import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheModeloComponent } from './detalhe-modelo.component';

describe('DetalheModeloComponent', () => {
  let component: DetalheModeloComponent;
  let fixture: ComponentFixture<DetalheModeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheModeloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
