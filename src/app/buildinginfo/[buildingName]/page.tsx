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
      buildingAddress="1405 W Springfield Ave, Urbana, IL 61801" //placeholder
      //hours="24 hours"
      hours={{
        'M-TH': '7AM-11PM',
        F: '7AM-9PM',
        SAT: '9AM-9PM',
        SUN: '12PM-11PM',
      }}
      // either specify a start and end date, or just a single date
      selectedTime={
        //{{start: new Date('November 12, 2024 09:51:00'), end: new Date('November 12, 2024 09:59:00')}}
        new Date()
      }
      tags={{
        quiet: 0,
        talkative: 1,
        open_late: 1,
        coffee_shop: 1,
        big_tables: 1,
        couches: 0,
        vending_machine: 1,
        crowd_level: 1,
      }}
    />
  );
}
