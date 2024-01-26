import React from 'react'
import DataTable from 'datatables.net-dt';
let table = new DataTable('#myTable');
const Dataset = () => {
  return (
    <div>
      <DataTable/>
    </div>
  )
}

export default Dataset