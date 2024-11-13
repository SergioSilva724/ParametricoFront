import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacempresarialComponent } from './pacempresarial.component';

describe('PacempresarialComponent', () => {
  let component: PacempresarialComponent;
  let fixture: ComponentFixture<PacempresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacempresarialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PacempresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
