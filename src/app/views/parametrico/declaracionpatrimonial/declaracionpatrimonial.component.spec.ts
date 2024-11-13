import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaracionpatrimonialComponent } from './declaracionpatrimonial.component';

describe('DeclaracionpatrimonialComponent', () => {
  let component: DeclaracionpatrimonialComponent;
  let fixture: ComponentFixture<DeclaracionpatrimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeclaracionpatrimonialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeclaracionpatrimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
