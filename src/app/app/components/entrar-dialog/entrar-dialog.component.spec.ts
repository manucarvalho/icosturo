import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarDialogComponent } from './entrar-dialog.component';

describe('EntrarDialogComponent', () => {
  let component: EntrarDialogComponent;
  let fixture: ComponentFixture<EntrarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrarDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
