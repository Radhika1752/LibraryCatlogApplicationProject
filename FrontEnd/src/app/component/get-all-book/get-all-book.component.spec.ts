import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBookComponent } from './get-all-book.component';

describe('GetAllBookComponent', () => {
  let component: GetAllBookComponent;
  let fixture: ComponentFixture<GetAllBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
