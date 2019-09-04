import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { GroupService } from './group.service';

describe('GroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AngularFirestore
    ]
  }));

  it('should be created', () => {
    const service: GroupService = TestBed.get(GroupService);
    expect(service).toBeTruthy();
  });
});
