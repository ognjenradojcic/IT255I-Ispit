import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSmartphoneComponent } from './single-smartphone.component';

describe('SingleSmartphoneComponent', () => {
  let component: SingleSmartphoneComponent;
  let fixture: ComponentFixture<SingleSmartphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSmartphoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
