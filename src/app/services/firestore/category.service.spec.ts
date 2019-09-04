import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';

import { CategoryService } from './category.service';

describe('CategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AngularFireAuth
    ]
  }));

  it('should be created', () => {
    const service: CategoryService = TestBed.get(CategoryService);
    expect(service).toBeTruthy();
  });
});
