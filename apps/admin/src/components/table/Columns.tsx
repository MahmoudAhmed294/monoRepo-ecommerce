import React from 'react';
import { IColumnsProps } from './types';

const Columns = ({ columns, requestSort, sortConfig }: IColumnsProps) => (
  <thead>
    <tr>
      {columns.map(({ title, hidden, field, noSort }) =>
        !hidden ? (
          <th key={field}>
            <div className="flex justify-around">
              {!noSort && (
                <button
                  onClick={() => requestSort(field)}
                  type="button"
                  className="bg-slate-400 w-3/6-2 mr-2"
                >
                  {sortConfig?.direction === 'ascending' ? 'up' : 'down'}
                </button>
              )}
              <h5>{title}</h5>
            </div>
          </th>
        ) : null
      )}
    </tr>
  </thead>
);

export default Columns;
