import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotMessageComponent } from './bot-message.component';

describe('BotMessageComponent', () => {
  let component: BotMessageComponent;
  let fixture: ComponentFixture<BotMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotMessageComponent]
    });
    fixture = TestBed.createComponent(BotMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
