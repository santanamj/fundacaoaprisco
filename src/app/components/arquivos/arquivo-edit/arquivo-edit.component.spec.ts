import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoEditComponent } from './arquivo-edit.component';

describe('ArquivoEditComponent', () => {
  let component: ArquivoEditComponent;
  let fixture: ComponentFixture<ArquivoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquivoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
