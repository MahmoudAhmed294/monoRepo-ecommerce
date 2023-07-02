import React from 'react';
import 'ui/styles.css';
import Table from '../components/table';
import { rows, column } from '../components/table/mock';

const Page = () => <Table rows={rows} columns={column} maxRows={10} />;

export default Page;
