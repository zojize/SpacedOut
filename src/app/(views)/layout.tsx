'use client';

import { Filters } from '@/components/Filters';
import { Button } from '@/components/ui/button';
import { List } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {children}
      <Filters />
      <Button
        className="fixed m-4 right-0 bottom-0 touch-none "
        variant="outline"
        onClick={() => router.push(pathname.endsWith('map') ? '/list' : '/map')}
      >
        <List />
        {pathname.endsWith('map') ? 'List' : 'Map'}
      </Button>
    </>
  );
}
