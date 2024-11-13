import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EeffComponent } from './eeff.component';

describe('EeffComponent', () => {
  let component: EeffComponent;
  let fixture: ComponentFixture<EeffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EeffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EeffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
