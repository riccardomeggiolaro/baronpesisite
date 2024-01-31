import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFilterComponent } from './material-filter.component';

describe('MaterialFilterComponent', () => {
  let component: MaterialFilterComponent;
  let fixture: ComponentFixture<MaterialFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialFilterComponent]
    });
    fixture = TestBed.createComponent(MaterialFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
