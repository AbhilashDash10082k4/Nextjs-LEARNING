import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table'
import React, { Suspense } from 'react'

async function CustomerPage() {
  const customers = await fetchFilteredCustomers("");
  return (
    <div>
      <Suspense>
      <CustomersTable customers={customers}/>
      </Suspense>
    </div>
  )
}

export default CustomerPage
