"use client";

import Link from "next/link"
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: 'Ringkasan',
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/spanduk`,
      label: 'Spanduk',
      active: pathname === `/${params.storeId}/spanduk`,
    },
    {
      href: `/${params.storeId}/kategori`,
      label: 'Kategori',
      active: pathname === `/${params.storeId}/kategori`,
    },
    {
      href: `/${params.storeId}/ukuran`,
      label: 'Ukuran',
      active: pathname === `/${params.storeId}/ukuran`,
    },
    {
      href: `/${params.storeId}/warna`,
      label: 'Warna',
      active: pathname === `/${params.storeId}/warna`,
    },
    {
      href: `/${params.storeId}/produk`,
      label: 'Produk',
      active: pathname === `/${params.storeId}/produk`,
    },
    {
      href: `/${params.storeId}/order`,
      label: 'Order',
      active: pathname === `/${params.storeId}/order`,
    },
    {
      href: `/${params.storeId}/pengaturan`,
      label: 'Pengaturan',
      active: pathname === `/${params.storeId}/pengaturan`,
    },
  ]

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
          )}
        >
          {route.label}
      </Link>
      ))}
    </nav>
  )
};
