import { TestBed } from '@angular/core/testing';

import { PopupMsgService } from './popup-msg.service';

describe('PopupMsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopupMsgService = TestBed.get(PopupMsgService);
    expect(service).toBeTruthy();
  });
});
