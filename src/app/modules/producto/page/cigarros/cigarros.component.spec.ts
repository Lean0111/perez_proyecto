import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CigarrosComponent } from './cigarros.component';

describe('CigarrosComponent', () => {
  let component: CigarrosComponent;
  let fixture: ComponentFixture<CigarrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CigarrosComponent]
    });
    fixture = TestBed.createComponent(CigarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
