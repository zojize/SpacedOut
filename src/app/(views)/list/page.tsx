'use client';

import { useRouter } from 'next/navigation';
import { BuildingCard } from '@/components/ui/building_card';
import buildings from '@/data/tagging.json';

export default function Page() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen">
      {buildings.map((building, i) => (
        <BuildingCard 
          key={i}
          building={building}/>
      ))}
      <div className="h-1 w-screen"/>
    </div>
  );
}
