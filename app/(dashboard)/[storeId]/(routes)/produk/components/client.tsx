"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

import { ProductColumn, columns } from "./columns";

interface ProductsClientProps {
  data: ProductColumn[];
};

export const ProductsClient: React.FC<ProductsClientProps> = ({
  data
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <> 
      <div className="flex items-center justify-between">
        <Heading title={`${data.length} Produk`} description="Atur produk untuk toko anda" />
        <Button onClick={() => router.push(`/${params.storeId}/produk/baru`)}>
          <Plus className="mr-2 h-4 w-4" /> Tambah Produk
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API untuk produk" />
      <Separator />
      <ApiList entityName="produk" entityIdName="IdProduk" />
    </>
  );
};
