import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ModuleService } from 'mbs/services/module.service';
import { MbsModulesShortApi } from '../models/mbs.type';

describe('ModuleService', () => {
  let service: ModuleService;
  let httpMock: HttpTestingController;
  const mockModulesShell: MbsModulesShortApi = {
    items: [],
    meta: {
      first: null,
      last: null,
      next: null,
      page: 1,
      pages: 1,
      per_page: 40,
      prev: null,
      total: 0
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ModuleService]
    });

    service = TestBed.get(ModuleService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a list of modules', () => {
    const mockModules: MbsModulesShortApi = Object.assign({}, mockModulesShell);
    mockModules.meta.total = 4;
    mockModules.items = [
      {
        'context': 'c2c572ec',
        'id': 1547,
        'name': 'testmodule',
        'state': 5,
        'state_name': 'ready',
        'stream': 'master',
        'version': '20180224011125'
      },
      {
        'context': '00000000',
        'id': 1546,
        'name': 'mongodb',
        'state': 4,
        'state_name': 'failed',
        'stream': 'private_mskalick_test',
        'version': '20171120143335'
      },
      {
        'context': '5332648f',
        'id': 1545,
        'name': 'perl',
        'state': 5,
        'state_name': 'ready',
        'stream': '5.26',
        'version': '20180220133547'
      },
      {
        'context': '3cc1cf22',
        'id': 1544,
        'name': 'perl',
        'state': 5,
        'state_name': 'ready',
        'stream': '5.24',
        'version': '20180220083157'
      }
    ];
    // Default arguments
    service.getModules().subscribe(modules => {
      expect(modules.items.length).toBe(4);
    });
    const req = httpMock.expectOne(`${service.mbsUrl}module-builds/?short=true&per_page=40&page=1&order_desc_by=id`);
    expect(req.request.method).toEqual('GET');
    // Respond with mock data
    req.flush(mockModules);
    // Assert that there are no outstanding requests
    httpMock.verify();
  });

  it('should ask for list of modules ordered by name and ascending', () => {
      // Order by name in ascending order
      service.getModules(1, 'name', 'asc').subscribe(modules => {
        expect(modules.items.length).toBe(0);
      });
      const req = httpMock.expectOne(`${service.mbsUrl}module-builds/?short=true&per_page=40&page=1&order_by=name`);
      expect(req.request.method).toEqual('GET');
      // Respond with mock data
      req.flush(mockModulesShell);
      // Assert that there are no outstanding requests
      httpMock.verify();
  });

  it('should ask for list of modules on page 2', () => {
      const mockModules: MbsModulesShortApi = Object.assign({}, mockModulesShell);
      mockModules.meta.page = 2;
      // Order by name in ascending order
      service.getModules(2).subscribe(modules => {
        expect(modules.items.length).toBe(0);
      });
      const req = httpMock.expectOne(`${service.mbsUrl}module-builds/?short=true&per_page=40&page=2&order_desc_by=id`);
      expect(req.request.method).toEqual('GET');
      // Respond with mock data
      req.flush(mockModules);
      // Assert that there are no outstanding requests
      httpMock.verify();
  });
});
