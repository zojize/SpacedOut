'use client';
import React from 'react';
import BuildingInfo from './buildinginfo';
import { useParams } from 'next/navigation';
import type { buildings } from '@/data/filtered_buildings.json';

export default function Page() {
  const { buildingName } = useParams<{
    buildingName: string;
  }>();

  return (
    <BuildingInfo
      buildingName={decodeURIComponent(buildingName) as keyof typeof buildings} //placeholder
      //hours="24 hours"
      // either specify a start and end date, or just a single date
      selectedTime={
        //{{start: new Date('November 12, 2024 09:51:00'), end: new Date('November 12, 2024 09:59:00')}}
        new Date()
      }
    />
  );
}
