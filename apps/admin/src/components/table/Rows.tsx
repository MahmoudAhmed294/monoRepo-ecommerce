import React, { useMemo } from 'react';
import { IRowsProps } from './types';

const Rows = ({ columns, rows, maxRows = 10 }: IRowsProps) => {
  const memoizedRows = useMemo(() => rows, [rows]);
  const memoizedColumns = useMemo(() => columns, [columns]);

  return (
    <tbody>
      {memoizedRows.slice(0, maxRows).map((value) => (
        <tr key={value.id}>
          {memoizedColumns.map(({ field, hidden }) =>
            !hidden ? <td key={field}>{value[field]}</td> : ''
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default Rows;
