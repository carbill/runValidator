import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRutComponent } from './ngx-rut.component';

describe('NgxRutComponent', () => {
  let component: NgxRutComponent;
  let fixture: ComponentFixture<NgxRutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
