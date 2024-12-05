'use client';

import { useRouter } from 'next/navigation';
import { BuildingCard } from '@/components/ui/building_card';
import { useFilters } from '@/hooks/building-filters';
import buildings from '@/data/tagging.json';

export default function Page() {
  const router = useRouter();
  const [filters] = useFilters();
  let resultsExist = false;
  
  return (
    <div className="w-screen bg-zinc-50 h-fit">
      {buildings.map((building, i) => {
        const isFilteredOut = filters.size > 0 && Array.from(filters).some((filter) => !building?.[filter]);
        if (!isFilteredOut) {
          resultsExist = true;
          return(
            <BuildingCard 
              key={i}
              building={building}/>
          );
        }
      })}
      {!resultsExist && <p className="px-20 text-center w-full mx-auto mt-10 font-normal">No buildings match your criteria, please try different filters.</p>}
      <div className="h-1 w-screen"/>
    </div>
  );
}
