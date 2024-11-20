'use client';

import { useRouter } from 'next/navigation';
import { Field, Input } from '@headlessui/react'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { BuildingCard } from '@/components/ui/building_card';
import { useFilters } from '@/hooks/building-filters';
import buildings from '@/data/tagging.json';

export default function Page() {
  const router = useRouter();
  const [filters] = useFilters();
  let resultsExist = false;

  const [query, setQuery] = useState('');

  const filteredBuildings =
    query === ''
      ? buildings
      : buildings.filter((building) => {
          return building.name.toLowerCase().includes(query.toLowerCase())
        })
  
  return (
    <div className="w-screen h-fit mt-8">
      <Field className="relative w-10/12 mx-auto ">
        <Input
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Search for a building'
            className='relative w-full rounded-full font-medium border bg-black bg-opacity-5 py-3 pr-5 pl-14 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
        />
        <div className="absolute h-full w-fit left-5 top-0 place-content-center items-center">
          <Search size={18} opacity={0.5} className="relative my-auto"/>
        </div>
      </Field>
      
      {filteredBuildings.map((building, i) => {
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
      {!resultsExist && <p className="px-20 text-center w-full mx-auto mt-10 font-normal">No buildings match your criteria, please try a different search/filters.</p>}
      <div className="h-1 w-screen"/>
    </div>
  );
}
