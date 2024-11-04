import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedulaComponent } from './cedula.component';

describe('CedulaComponent', () => {
  let component: CedulaComponent;
  let fixture: ComponentFixture<CedulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CedulaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CedulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
