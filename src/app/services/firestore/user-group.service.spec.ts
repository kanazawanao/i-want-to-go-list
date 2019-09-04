import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { UserGroupService } from './user-group.service';

describe('UserGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: UserGroupService = TestBed.get(UserGroupService);
    expect(service).toBeTruthy();
  });
});
