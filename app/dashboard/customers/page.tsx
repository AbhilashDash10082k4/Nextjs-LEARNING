import { fetchFilteredCustomers } from '@/app/lib/data';
import { customers } from '@/app/lib/placeholder-data'
import CustomersTable from '@/app/ui/customers/table'
import React from 'react'

async function CustomerPage() {
  const customers = await fetchFilteredCustomers("");
  return (
    <div>
      <CustomersTable customers={customers}/>
    </div>
  )
}

export default CustomerPage
