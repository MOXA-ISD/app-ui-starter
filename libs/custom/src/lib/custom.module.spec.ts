import { async, TestBed } from '@angular/core/testing';
import { TpCustomModule } from './custom.module';

describe('NorthboundModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TpCustomModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TpCustomModule).toBeDefined();
  });
});
