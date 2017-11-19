import { Router, ActivatedRoute, ParamMap } from '@angular/router';


export class BaseListComponent {
  orderBy: string;
  orderDirection: string;
  currentPage: number;
  loading: boolean = false;
  exhausted: boolean = false;

  processRouteParams(params: ParamMap) {
    // TODO: Add validation here
    if (params.get('orderBy')) {
        this.orderBy = params.get('orderBy');
      } else {
        this.orderBy = 'id';
      }
      if (params.get('orderDirection')) {
        this.orderDirection = params.get('orderDirection');
      } else {
        this.orderDirection = 'desc';
      }
  }

  getOrderDirection(header): string {
    if (header.toLowerCase().replace(' ', '_') == this.orderBy && this.orderDirection == 'desc') {
        return 'asc';
    }
    return 'desc';
  }

  getArrowClass(header: string): string {
    if (header.toLowerCase().replace(' ', '_') == this.orderBy) {
      if (this.orderDirection == 'asc') {
        return 'orderAsc';
      } else {
        return 'orderDesc';
      }
    }
    return '';
  }
}
