import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LentesComponent } from './lentes.component';

describe('LentesComponent', () => {
  let component: LentesComponent;
  let fixture: ComponentFixture<LentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LentesComponent]
    });
    fixture = TestBed.createComponent(LentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
