import { formSchema } from '@/lib/schema/FormSchema'
import React from 'react'
import { z } from 'zod'
import { DataTable } from '../custom-ui/DataTable'
import { columns } from '@/flights/columns'

const StepThree = ({ data }: { data: z.infer<typeof formSchema> }) => {
  const date = new Date();
  const formattedDate = `${String(date.getDate()).padStart(2, "0")}/${String(
    date.getMonth() + 1
  ).padStart(2, "0")}/${date.getFullYear()}`;

  const tableDate = [
    {
      from: data.from,
      to: data.to,
      date: formattedDate,
      price: 4925,
      miles: 2129,
      giftMiles: 32.7
    }
  ]
  return (
    <div className="py-10 w-full">
      <DataTable columns={columns} data={tableDate}/>
    </div>
  )
}

export default StepThree