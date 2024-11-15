'use client';

import { Filters } from '@/components/Filters';
import { Button } from '@/components/ui/button';
import {
  useCrowdLevel,
  useFilters,
  type FilterTypes,
} from '@/hooks/building-filters';
import { List, Map } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  const [activeFilters, setActiveFilters] = useFilters();
  const [crowdLevel, setCrowdLevel] = useCrowdLevel();
  const [stime, setSTime] = useState<string | null>('10:00');
  const [etime, setETime] = useState<string | null>('11:00');
  const [day, setDay] = useState<string>('Thursday');

  const toggleFilters = (key: FilterTypes) => {
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
        day={day}
        setDay={setDay}
      />
      <Button
        className="fixed m-4 right-0 bottom-0 touch-none "
        variant="outline"
        onClick={() => router.push(pathname.endsWith('map') ? '/list' : '/map')}
      >
        {pathname.endsWith('map') ? (
          <>
            <List /> List
          </>
        ) : (
          <>
            <Map /> Map
          </>
        )}
      </Button>
    </>
  );
}
