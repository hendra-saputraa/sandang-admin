"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

import { columns, ColorColumn } from "./columns";

interface ColorClientProps {
  data: ColorColumn[];
}

export const ColorClient: React.FC<ColorClientProps> = ({
  data
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`${data.length} Warna`} description="Atur warna untuk produk anda" />
        <Button onClick={() => router.push(`/${params.storeId}/warna/baru`)}>
          <Plus className="mr-2 h-4 w-4" /> Tambah Warna
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API untuk warna" />
      <Separator />
      <ApiList entityName="warna" entityIdName="IdWarna" />
    </>
  );
};
