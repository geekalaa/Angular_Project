import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuesComponent } from './vues.component';

describe('VuesComponent', () => {
  let component: VuesComponent;
  let fixture: ComponentFixture<VuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
