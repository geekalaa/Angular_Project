import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FronthomeComponent } from './fronthome.component';

describe('FronthomeComponent', () => {
  let component: FronthomeComponent;
  let fixture: ComponentFixture<FronthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FronthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FronthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
