'use client';

import { Filters } from '@/components/Filters';
import { Button } from '@/components/ui/button';
import { useFilters } from '@/hooks/useFilters';
import { List } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  const [activeFilters, setActiveFilters] = useFilters();
  const [crowdLevel, setCrowdLevel] = useState<number>(3);
  const [stime, setSTime] = useState<string | null>('10:00');
  const [etime, setETime] = useState<string | null>('11:00');

  const toggleFilters = (key: string) => {
    setActiveFilters(
      (prev) =>
        new Set(
          prev.has(key) ? [...prev].filter((i) => i !== key) : [...prev, key],
        ),
    );
  };

  return (
    <>
      {children}
      <Filters
        activeFilters={activeFilters}
        toggleFilters={toggleFilters}
        crowdLevel={crowdLevel}
        setCrowdLevel={setCrowdLevel}
        stime={stime}
        setSTime={setSTime}
        etime={etime}
        setETime={setETime}
      />
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
