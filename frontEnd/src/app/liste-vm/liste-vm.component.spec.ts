import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVmComponent } from './liste-vm.component';

describe('ListeVmComponent', () => {
  let component: ListeVmComponent;
  let fixture: ComponentFixture<ListeVmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeVmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
