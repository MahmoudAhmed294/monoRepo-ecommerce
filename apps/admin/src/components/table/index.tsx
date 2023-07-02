import React from 'react';
import Columns from './Columns';

import Rows from './Rows';
import { ITable } from './types';
import useSortableData from './hooks/useSortableData';

const Table = ({ rows, columns, maxRows }: ITable) => {
  const { items, requestSort, sortConfig } = useSortableData(rows);

  return (
    <table
      cellPadding="10px"
      cellSpacing={10}
      className="bg-slate-50 border-1 border-stone-700"
    >
      <Columns
        columns={columns}
        requestSort={requestSort}
        sortConfig={sortConfig}
      />
      <Rows rows={items} columns={columns} maxRows={maxRows} />
    </table>
  );
};

export default Table;
// column
