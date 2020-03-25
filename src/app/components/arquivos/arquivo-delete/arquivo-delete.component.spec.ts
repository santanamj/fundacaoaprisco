import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoDeleteComponent } from './arquivo-delete.component';

describe('ArquivoDeleteComponent', () => {
  let component: ArquivoDeleteComponent;
  let fixture: ComponentFixture<ArquivoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquivoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
