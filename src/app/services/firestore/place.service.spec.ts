import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { PlaceService } from './place.service';

describe('PlaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AngularFirestore
    ]
  }));

  it('should be created', () => {
    const service: PlaceService = TestBed.get(PlaceService);
    expect(service).toBeTruthy();
  });
});
