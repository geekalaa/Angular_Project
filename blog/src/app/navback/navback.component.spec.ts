import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbackComponent } from './navback.component';

describe('NavbackComponent', () => {
  let component: NavbackComponent;
  let fixture: ComponentFixture<NavbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
