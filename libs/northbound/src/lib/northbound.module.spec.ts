import { async, TestBed } from '@angular/core/testing';
import { NorthboundModule } from './northbound.module';

describe('NorthboundModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NorthboundModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NorthboundModule).toBeDefined();
  });
});
