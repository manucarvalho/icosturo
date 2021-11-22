import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarDialogComponent } from './cadastrar-dialog.component';

describe('CadastrarDialogComponent', () => {
  let component: CadastrarDialogComponent;
  let fixture: ComponentFixture<CadastrarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
