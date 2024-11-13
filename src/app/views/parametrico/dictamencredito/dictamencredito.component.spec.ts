import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictamencreditoComponent } from './dictamencredito.component';

describe('DictamencreditoComponent', () => {
  let component: DictamencreditoComponent;
  let fixture: ComponentFixture<DictamencreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DictamencreditoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DictamencreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
