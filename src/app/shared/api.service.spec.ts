import {TestBed, inject, ComponentFixture, async, getTestBed} from '@angular/core/testing';
import {ApiService} from './api.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';



describe('ApiService', () => {
  let httpMock: HttpTestingController;
  let apiService: ApiService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    httpMock = getTestBed().get(HttpTestingController);
    apiService = getTestBed().get(ApiService);

  }));

});
