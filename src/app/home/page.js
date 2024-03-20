"use client"
import React, { useMemo } from 'react'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import { userdata } from '@/utils/data'
import { Tablecolumns } from '@/utils/tableColumns'
const HomePage = () => {
  const {columns} = Tablecolumns();
  const data = useMemo(() => userdata, []);

const table = useMaterialReactTable({
  columns,
  data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  enableGrouping:true
});
  return (
    <div>
    <MaterialReactTable table={table}/>
    </div>
  )
}

export default HomePage