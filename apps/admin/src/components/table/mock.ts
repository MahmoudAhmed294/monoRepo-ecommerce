import { IColumn } from './types';

export interface IRow {
  id: number;
  lastName: string;
  firstName: string;
  age: number;
}

const rows: IRow[] = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 21 },
  { id: 6, lastName: 'Melisandre', firstName: 'snull', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const column: IColumn[] = [
  {
    title: 'ID',
    field: 'id',
    hidden: true,
  },
  {
    title: 'Last Name',
    field: 'lastName',
  },
  {
    title: 'First Name',
    field: 'firstName',
  },
  {
    title: 'Age',
    field: 'age',
  },
];

export { rows, column };
