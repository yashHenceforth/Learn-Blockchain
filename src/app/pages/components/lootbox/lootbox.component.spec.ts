import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LootboxComponent } from './lootbox.component';

describe('LootboxComponent', () => {
  let component: LootboxComponent;
  let fixture: ComponentFixture<LootboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LootboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LootboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
