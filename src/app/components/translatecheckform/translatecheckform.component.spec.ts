import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatecheckformComponent } from './translatecheckform.component';

describe('TranslatecheckformComponent', () => {
  let component: TranslatecheckformComponent;
  let fixture: ComponentFixture<TranslatecheckformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslatecheckformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslatecheckformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
