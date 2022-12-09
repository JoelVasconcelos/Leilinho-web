/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PracaComponent } from './praca.component';

describe('PracaComponent', () => {
  let component: PracaComponent;
  let fixture: ComponentFixture<PracaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
