"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type ProductColumn = {
  id: string
  name: string;
  price: string;
  category: string;
  size: string;
  color: string;
  createdAt: string;
  isFeatured: boolean;
  isArchived: boolean;
}

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "isArchived",
    header: "Arsipkan",
  },
  {
    accessorKey: "isFeatured",
    header: "Unggulan",
  },
  {
    accessorKey: "price",
    header: "Harga",
  },
  {
    accessorKey: "category",
    header: "Kategori",
  },
  {
    accessorKey: "size",
    header: "Ukuran",
  },
  {
    accessorKey: "color",
    header: "Warna",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.color}
        <div className="h-6 w-6 rounded-full border" style={{ backgroundColor: row.original.color }} />
      </div>
    )
  },
  {
    accessorKey: "createdAt",
    header: "Tanggal",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];
