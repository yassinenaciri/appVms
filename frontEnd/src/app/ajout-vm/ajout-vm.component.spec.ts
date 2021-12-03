import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutVmComponent } from './ajout-vm.component';

describe('AjoutVmComponent', () => {
  let component: AjoutVmComponent;
  let fixture: ComponentFixture<AjoutVmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutVmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
