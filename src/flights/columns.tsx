"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  from: string;
  to: string;
  date: string;
  price: number;
  miles: number;
  giftMiles: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "from",
    header: "From",
  },
  {
    accessorKey: "to",
    header: "To",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "miles",
    header: "Miles",
  },
  {
    accessorKey: "giftMiles",
    header: "Gift Miles",
  },
];
