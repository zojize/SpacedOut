'use client';

import { Filters } from '@/components/Filters';
import { Button } from '@/components/ui/button';
import {
  useCrowdLevel,
  useFilters,
  type FilterTypes,
  useSTime,
  useETime,
  useDay
} from '@/hooks/building-filters';
import { List, Map } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  const date = new Date();
  const [activeFilters, setActiveFilters] = useFilters();
  const [crowdLevel, setCrowdLevel] = useCrowdLevel();
  const [stime, setSTime] = useSTime();
  const [etime, setETime] = useETime();
  const [day, setDay] = useDay();

  // useEffect(() => {
  //   if (stime) localStorage.setItem('stime', stime);
  //   if (etime) localStorage.setItem('etime', etime);
  //   if (day) localStorage.setItem('day', day);
  // }, [stime, etime, day]);

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

