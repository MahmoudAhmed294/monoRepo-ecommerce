export type IDirectionSort = 'ascending' | 'descending';

export interface ISortConfig {
  key: string;
  direction: IDirectionSort;
}

export interface IColumn {
  title: string;
  field: string;
  hidden?: boolean;
  noSort?: boolean;
}

export interface IColumnsProps {
  columns: IColumn[];
  requestSort: (key: string) => void;
  sortConfig: ISortConfig | null;
}

export interface IRowsProps {
  rows: any[];
  columns: IColumn[];
  maxRows: number;
}

export interface ITable extends IRowsProps {}
