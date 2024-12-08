'use client';

import { useRouter } from 'next/navigation';
import { Field, Input } from '@headlessui/react'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { BuildingCard } from '@/components/ui/building_card';
import { useFilters, useCrowdLevel, useSTime, useETime, useDay } from '@/hooks/building-filters';
import allBuildingTags from '@/data/building_tags.json';
import { features as buildings } from '@/data/uiuc_buildings.json';
import allBuildingHours from '@/data/buildinghours.json';

/*
TO DO:
- change crowdedness level icons
- add time and crowdedness level filtering
- change coloring for crowdedness level
*/


/*
buildings.map(({ geometry, properties: { name } }, i) => {
  const buildingName = name as keyof typeof allBuildingTags;
  const buildingTags =
    allBuildingTags[buildingName] ?? defaultBuildingTags;
  const isFilteredOut =
    (filters.size > 0 &&
      Array.from(filters).some(
        (filter) => !buildingTags[filter],
      )) ||
    buildingTags.crowd_level > crowdLevel;

  const crowd = [
    { color: 'bg-green-500', icon: IconPhUser },
    { color: 'bg-yellow-500', icon: IconPhUsers },
    { color: 'bg-red-500', icon: IconPhUsersThree },
  ][buildingTags.crowd_level - 1];
*/

export default function Page() {
  const router = useRouter();
  const [filters] = useFilters();
  const [crowdLevel] = useCrowdLevel();
  const [sTime] = useSTime();
  const [eTime] = useETime();
  const [day] = useDay();

  const defaultBuildingTags = {
    crowd_level: 1,
    quiet: false,
    talkative: false,
    open_late: false,
    coffee_shop: false,
    big_tables: false,
    couches: false,
    vending_machine: false,
  };

  const defaultBuildingHours = {
    "M-TH": "8-17",
    "F": "8-17",
    "SAT" : "0-0",
    "SUN" : "0-0"
  }

  const getBuildingHours = (weekday : string, hours : any) => {
    if (weekday == 'Sunday') {
      return hours["SUN"];
    } else if (weekday == 'Saturday') {
      return hours["SAT"];
    } else if (weekday == 'Friday') {
      return hours['F'];
    } else {
      return hours['M-TH'];
    }
  }

  let resultsExist = false;

  const [query, setQuery] = useState('');

  const filteredBuildings =
    query === ''
      ? buildings
      : buildings.filter((building) => {
          return building.properties.name.toLowerCase().includes(query.toLowerCase())
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
      
      {filteredBuildings.map(({ properties: { name, address, url } }, i) => {
        const buildingName = name as keyof typeof allBuildingTags;
        const buildingTags = allBuildingTags[buildingName] ?? defaultBuildingTags;
        const buildingHours = getBuildingHours(day, (allBuildingHours[buildingName] ?? defaultBuildingHours));
        const isFilteredOut = (
          filters.size > 0 && Array.from(filters).some((filter) => !buildingTags?.[filter]) 
          || buildingTags.crowd_level > crowdLevel
          || Number(sTime.substring(0, sTime.indexOf(':'))) + Number(sTime.substring(sTime.indexOf(':')+1))/60 > buildingHours.substring(buildingHours.indexOf('-')+1)
          || Number(eTime.substring(0, eTime.indexOf(':'))) + Number(eTime.substring(eTime.indexOf(':')+1))/60 < buildingHours.substring(0, buildingHours.indexOf('-'))
        );
        if (!isFilteredOut) {
          resultsExist = true;
          return(
            <BuildingCard 
              key={i}
              buildingName={buildingName}
              buildingTags={buildingTags}
              buildingAddress={address}
              buildingURL={url}/>
          );
        }
      })}
      {!resultsExist && <p className="px-20 text-center w-full mx-auto mt-10 font-normal">No buildings match your criteria, please try a different search/filters.</p>}
      <div className="h-1 w-screen"/>
    </div>
  );
}
