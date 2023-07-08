"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

import { columns, SizeColumn } from "./columns";

interface SizesClientProps {
  data: SizeColumn[];
}

export const SizesClient: React.FC<SizesClientProps> = ({
  data
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`${data.length} Ukuran`} description="Atur ukuran untuk toko anda" />
        <Button onClick={() => router.push(`/${params.storeId}/ukuran/baru`)}>
          <Plus className="mr-2 h-4 w-4" /> Tambah Ukuran
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API untuk ukuran" />
      <Separator />
      <ApiList entityName="ukuran" entityIdName="IdUkuran" />
    </>
  );
};
