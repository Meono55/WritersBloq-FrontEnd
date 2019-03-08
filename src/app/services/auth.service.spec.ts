import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { 
  HttpClientTestingModule, 
  HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './auth.service';


class credentials {
  constructor(
    public email?: string,
    public password?: string) {}
}

describe('AuthService: getLoggedInUser', () => {
  let injector: TestBed;
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, HttpClientModule],
        providers: [AuthService]
    });

    injector = getTestBed();
    // Returns a service with the MockBackend so we can test with dummy responses
    service = injector.get(AuthService);
    // Inject the http service and test controller for each test
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
      // After every test, assert that there are no more pending requests.
      httpMock.verify();
  });

  describe('#getLoggedInUser', () => {
    it('Should return an Observable<User>', () => {
      const dummyUser: credentials =
        new credentials("mo94", "password");

      service.getLoggedInUser().subscribe(user => {
        expect(user).toEqual(dummyUser);
      });

      const req = httpMock.expectOne(`${environment.p2ApiUrl}/auth`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyUser);

    }
  )});
});
