'use client';

import { useRouter } from 'next/navigation';
import { BuildingCard } from '@/components/ui/building_card';
import { useFilters } from '@/hooks/building-filters';
import buildings from '@/data/tagging.json';

export default function Page() {
  const router = useRouter();
  const [filters] = useFilters();
  
  return (
    <div className="w-screen h-screen">
      {buildings.map((building, i) => {
        const isFilteredOut = filters.size > 0 && Array.from(filters).some((filter) => !building?.[filter]);
        if (!isFilteredOut) {
          return(
            <BuildingCard 
              key={i}
              building={building}/>
          );
        }
      })}
      <div className="h-1 w-screen"/>
    </div>
  );
}
