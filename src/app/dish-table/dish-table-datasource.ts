import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DishTableItem {
  name: string;
  id: number;
  price?: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DishTableItem[] = [
  {id: 1, name: 'purée aux cépes', price: 10},
  {id: 2, name: 'délice de caviar', price: 15},
  {id: 3, name: 'dim sum', price: 18},
  {id: 4, name: 'ravioli aux tomates confites', price: 22},
  {id: 5, name: 'baba à la chartreuse', price: 6},
  {id: 6, name: 'musli du gourmet', price: 5},
  {id: 7, name: 'tomates au coulis frais', price: 10},
  {id: 8, name: 'tartiflette du chef', price: 19},
  {id: 9, name: 'mignardise de la reine', price: 5},
  {id: 10, name: 'bouché à la reine', price: 12.80},
  {id: 11, name: 'quiche au secret', price: 13},
  {id: 12, name: 'canard laqué', price: 15},
  {id: 13, name: 'huitre dorée au four', price: 22},
  {id: 14, name: 'macaron qui est bon', price: 8},
  {id: 15, name: 'dorade', price: 19},
  {id: 16, name: 'marmite au boeuf', price: 22},
  {id: 17, name: 'miam miam', price : 21},
  {id: 18, name: 'blanc manger', price : 12},
  {id: 19, name: 'pizza du chef', price : 17},
  {id: 20, name: 'assiette surprise', price : 20},
];

/**
 * Data source for the DishTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DishTableDataSource extends DataSource<DishTableItem> {
  data: DishTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DishTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DishTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DishTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
