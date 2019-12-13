import { TestBed } from '@angular/core/testing';

import {CrossComponentCommunicationService} from './services/cross-component.service';

describe('CrossComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrossComponentCommunicationService = TestBed.get(CrossComponentCommunicationService);
    expect(service).toBeTruthy();
  });
});
