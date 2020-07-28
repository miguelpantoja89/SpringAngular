import { TestBed } from '@angular/core/testing';

import { SpringConsumerService } from './spring-consumer.service';

describe('SpringConsumerService', () => {
  let service: SpringConsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringConsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
