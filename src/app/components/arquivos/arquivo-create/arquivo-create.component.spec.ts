import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoCreateComponent } from './arquivo-create.component';

describe('ArquivoCreateComponent', () => {
  let component: ArquivoCreateComponent;
  let fixture: ComponentFixture<ArquivoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquivoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
