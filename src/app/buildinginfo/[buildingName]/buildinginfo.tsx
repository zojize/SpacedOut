'use client';

import React from 'react';
import './buildinginfo.css';
import {
  Speech,
  VolumeOff,
  Moon,
  Coffee,
  Armchair,
  User,
  ChevronLeft,
} from 'lucide-react';
import { VendingMachine } from '@/components/icons/VendingMachine';
import { Table } from '@/components/icons/Table';
import { Tag } from '@/components/ui/tag';
import { useRouter } from 'next/navigation';
import { buildings } from '@/data/filtered_buildings.json';
import allBuildingTags from '@/data/building_tags.json';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface BuildingInfoProps {
  buildingName: keyof typeof buildings;
  buildingAddress: string;
  selectedTime: Date | { start: Date; end: Date };
}

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

const BuildingInfo: React.FC<BuildingInfoProps> = ({
  buildingName,
  buildingAddress,
  selectedTime,
}) => {
  const router = useRouter();

  const rooms = buildings[buildingName]?.rooms;
  const hours = Object.fromEntries(
    Object.entries(buildings[buildingName].hours).map(([k, v]) => [
      {
        monday: 'M-TH',
        tuesday: 'M-TH',
        wednesday: 'M-TH',
        // for now this will overwrite everything... whatever i guess
        thursday: 'M-TH',
        friday: 'F',
        saturday: 'SAT',
        sunday: 'SUN',
      }[k],
      v.open == null ? 'LOCKED' : `${v.open}-${v.close}`,
    ]),
  );
  const tags =
    allBuildingTags[buildingName as keyof typeof allBuildingTags] ??
    defaultBuildingTags;

  const handleBackClick = () => {
    router.back();
  };

  const convertTime = (time: string, to12Hour: boolean = true) => {
    if (time.length === 4) {
      time = time.slice(0, 2) + ':00' + time.slice(2); // "7AM" -> "7:00AM"
    }

    if (time.includes(':') && time.length === 5) {
      // this may break things... but works for now
      return time; // return time as is if already formatted
    }

    const [hour, minutePart] = time.slice(0, -2).split(':');
    const period = time.slice(-2); // "AM" or "PM"
    const isPM = period === 'PM';
    const hourNum = parseInt(hour, 10);
    const minute = minutePart || '00';

    const hour24 =
      isPM && hourNum !== 12
        ? hourNum + 12
        : !isPM && hourNum === 12
        ? 0
        : hourNum;

    if (to12Hour) {
      const hour12 = hour24 % 12 || 12;
      const formattedMinute = minute.padStart(2, '0');
      const periodString = hour24 >= 12 ? 'PM' : 'AM';
      return `${hour12}:${formattedMinute} ${periodString}`;
    } else {
      return `${hour24}:${minute.padStart(2, '0')}`;
    }
  };

  const getCrowdLevelColor = (level: number) => {
    switch (level) {
      case 3:
        return '#ef4444';
      case 2:
        return '#f59e0b';
      case 1:
        return '#10b981';
      default:
        return 'gray';
    }
  };

  const crowdIcon = (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: getCrowdLevelColor(tags.crowd_level),
      }}
    >
      <User style={{ color: 'black' }} />
    </span>
  );

  const tagIcons = [
    { show: tags.open_late, name: 'open_late', component: Moon },
    { show: tags.big_tables, name: 'big_tables', component: Table },
    { show: tags.couches, name: 'couches', component: Armchair },
    { show: tags.quiet, name: 'quiet', component: VolumeOff },
    { show: tags.talkative, name: 'talkative', component: Speech },
    { show: tags.coffee_shop, name: 'coffee_shop', component: Coffee },
    {
      show: tags.vending_machine,
      name: 'vending_machine',
      component: VendingMachine,
    },
  ];

  const getCurrentBuildingDay = () => {
    const day =
      selectedTime instanceof Date
        ? selectedTime.getDay()
        : selectedTime.start.getDay();
    return day === 0
      ? 'SUN'
      : day === 6
      ? 'SAT'
      : day >= 1 && day <= 4
      ? 'M-TH'
      : 'F';
  };

  const getCurrentDay = () => {
    const day =
      selectedTime instanceof Date
        ? selectedTime.getDay()
        : selectedTime.start.getDay();
    if (day === 0) return 'SUN';
    else if (day === 1) return 'M';
    else if (day === 2) return 'T';
    else if (day === 3) return 'W';
    else if (day === 4) return 'R';
    else if (day === 5) return 'F';
    else return 'SAT';
  };

  const isOpen = () => {
    const dayKey = getCurrentBuildingDay();
    const todayHours = hours;

    // Check if hours is a string ("24 hours")
    if (typeof todayHours === 'string' && todayHours === '24 hours') {
      return true; // Always open if 24 hours
    }

    // Otherwise, assume hours is an object and get the hours for the current day
    const todayDayHours =
      typeof todayHours === 'object' ? todayHours[dayKey] : null;

    // If no hours are set or it's locked, return false
    if (!todayDayHours || todayDayHours === 'LOCKED') return false;

    const [opening, closing] = todayDayHours.split('-');
    const openTime24 = convertTime(opening, false);
    const closeTime24 = convertTime(closing, false);
    const [openHour, openMinute] = openTime24.split(':').map(Number);
    const [closeHour, closeMinute] = closeTime24.split(':').map(Number);

    let currentStartHour, currentStartMinute, currentEndHour, currentEndMinute;

    // Check if selectedTime is a single date or a range
    if (selectedTime instanceof Date) {
      currentStartHour = selectedTime.getHours();
      currentStartMinute = selectedTime.getMinutes();
      currentEndHour = currentStartHour;
      currentEndMinute = currentStartMinute;
    } else {
      currentStartHour = selectedTime.start.getHours();
      currentStartMinute = selectedTime.start.getMinutes();
      currentEndHour = selectedTime.end.getHours();
      currentEndMinute = selectedTime.end.getMinutes();
    }

    const isAfterOpening =
      currentStartHour >= openHour ||
      (currentStartHour === openHour && currentStartMinute >= openMinute);
    const isBeforeClosing =
      currentEndHour < closeHour ||
      (currentEndHour === closeHour && currentEndMinute < closeMinute);

    return isAfterOpening && isBeforeClosing;
  };

  const isRoomAvailable = (
    sections: Array<{ time: { start: string; end: string }; days: string[] }>,
  ) => {
    const dayKey = getCurrentDay();

    for (const section of sections) {
      if (!section.days.includes(dayKey)) continue;

      const sectionStartTime = convertTime(section.time.start, false);
      const sectionEndTime = convertTime(section.time.end, false);
      const [sectionStartHour, sectionStartMinute] = sectionStartTime
        .split(':')
        .map(Number);
      const [sectionEndHour, sectionEndMinute] = sectionEndTime
        .split(':')
        .map(Number);

      let currentStartHour,
        currentStartMinute,
        currentEndHour,
        currentEndMinute;

      if (selectedTime instanceof Date) {
        currentStartHour = selectedTime.getHours();
        currentStartMinute = selectedTime.getMinutes();
        currentEndHour = currentStartHour + 1; // 1 hour after !
        currentEndMinute = currentStartMinute;
      } else {
        currentStartHour = selectedTime.start.getHours();
        currentStartMinute = selectedTime.start.getMinutes();
        currentEndHour = selectedTime.end.getHours();
        currentEndMinute = selectedTime.end.getMinutes();
      }

      const overlaps = !(
        currentEndHour < sectionStartHour ||
        (currentEndHour === sectionStartHour &&
          currentEndMinute <= sectionStartMinute) ||
        sectionEndHour < currentStartHour ||
        (sectionEndHour === currentStartHour &&
          sectionEndMinute <= currentStartMinute)
      );

      if (overlaps) return false;
    }

    return true;
  };

  const getBuildingStatus = () => {
    const dayKey = getCurrentBuildingDay();
    const todayHours = hours;

    // Check if hours is a string ("24 hours")
    if (typeof todayHours === 'string' && todayHours === '24 hours') {
      return (
        <span className="status-open" style={{ color: 'green' }}>
          Open 24 Hours
        </span>
      );
    }

    // Otherwise, assume hours is an object and get the hours for the current day
    const todayDayHours =
      typeof todayHours === 'object' ? todayHours[dayKey] : null;

    if (!todayDayHours || todayDayHours === 'LOCKED') {
      return <span className="status-closed">Closed</span>;
    }

    const [openTime, closeTime] = todayDayHours.split('-');
    const openTimeFormatted = convertTime(openTime, true);
    const closeTimeFormatted = convertTime(closeTime, true);

    return isOpen() ? (
      <>
        <span className="status-open">Open</span> ⋅ Closes at{' '}
        {closeTimeFormatted}
      </>
    ) : (
      <>
        <span className="status-closed">Closed</span> ⋅ Opens at{' '}
        {openTimeFormatted}
      </>
    );
  };

  return (
    <>
      <div className="maincontainer">
        <Button
          className="fixed left-2 top-2"
          onClick={handleBackClick}
          variant="outline"
          size="icon"
        >
          <ChevronLeft size={24} />
        </Button>
        <div className="maininfo">
          <span className="building-name">
            {buildingName}
            {crowdIcon}
          </span>
          <span className="building-hours">{getBuildingStatus()}</span>
          <span className="building-address">{buildingAddress}</span>
        </div>
        {
          // only show tags if there are any
          Object.entries(tags).some(([k, v]) => k !== 'crowd_level' && v) && (
            <div className="buildingtags">
              <span className="tags-text"> Tags: </span>
              <div className="tag-icons-container">
                {tagIcons.map((tag, index) =>
                  tag.show ? (
                    <div key={index}>
                      <Tag name={tag.name} showName={false} />
                    </div>
                  ) : null,
                )}
              </div>
            </div>
          )
        }
        {rooms && (
          <div className="roomscontainer">
            <span className="rooms-text"> Currently Open Rooms: </span>
            <div className="roomslist">
              {Object.entries(rooms)
                .filter(([, { sections }]) => isRoomAvailable(sections))
                .map(([roomNumber]) => (
                  <div key={roomNumber} className="room">
                    {roomNumber}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BuildingInfo;
