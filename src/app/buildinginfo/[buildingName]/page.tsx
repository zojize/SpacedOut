'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import BuildingInfo from './buildinginfo';
import { useParams } from 'next/navigation';
import type { buildings } from '@/data/filtered_buildings.json';


export default function Page() {
  const { buildingName } = useParams<{ buildingName: string }>();
  const [stime, setSTime] = useState<string | null>(null);
  const [etime, setETime] = useState<string | null>(null);
  const [day, setDay] = useState<string | null>(null);

  // Retrieve stime, etime, and day from localStorage on mount
  useEffect(() => {
    const savedSTime = localStorage.getItem('stime');
    const savedETime = localStorage.getItem('etime');
    const savedDay = localStorage.getItem('day');
    setSTime(savedSTime);
    setETime(savedETime);
    setDay(savedDay);
  }, []);

  // function to get the date of the first upcoming specified day
  const getUpcomingDate = (targetDay: string): Date => {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const today = new Date();
    const currentDayIndex = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const targetDayIndex = daysOfWeek.indexOf(targetDay);

    // if the target day is invalid, return the current date
    if (targetDayIndex === -1) return today;

    // calculate the difference in days
    const dayDifference = (targetDayIndex - currentDayIndex + 7) % 7;

    // if it's the same day, return today, if not add the diff
    const resultDate = new Date(today);
    resultDate.setDate(today.getDate() + dayDifference);

    return resultDate;
  };

  const selectedDate = day ? getUpcomingDate(day) : new Date();
  const selectedTime =
    stime && etime
      ? {
          start: new Date(
            `${selectedDate.toDateString()} ${stime}`
          ),
          end: new Date(
            `${selectedDate.toDateString()} ${etime}`
          ),
        }
      : new Date(); // default to the current date/time


  return (
    <BuildingInfo
      buildingName={decodeURIComponent(buildingName) as keyof typeof buildings}
      selectedTime={selectedTime}
    />
  );
}

