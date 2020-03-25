import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoListComponent } from './arquivo-list.component';

describe('ArquivoListComponent', () => {
  let component: ArquivoListComponent;
  let fixture: ComponentFixture<ArquivoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquivoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
