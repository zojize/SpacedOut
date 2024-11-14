'use client';

import { Filter } from 'lucide-react';
import { Drawer } from 'vaul';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import TimePicker from 'react-time-picker';

import { useRouter } from 'next/navigation';
import {
  MapPin,
  Coffee,
  VolumeOff,
  Speech,
  Moon,
  Armchair,
  Coins,
  User,
  Users,
  UserX,
} from 'lucide-react';
import { Table } from './icons/Table';
import { VendingMachine } from './icons/VendingMachine';

const availableFilters = [
  'quiet',
  'talkative',
  'open_late',
  'coffee_shop',
  'vending machine',
  'big_tables',
  'couches',
] as const;
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const;
export function Filters({
  activeFilters,
  toggleFilters,
  crowdLevel,
  setCrowdLevel,
  stime,
  setSTime,
  etime,
  setETime,
  day,
  setDay,
}: {
  activeFilters: Set<string>;
  toggleFilters: (key: string) => void;
  crowdLevel: number;
  setCrowdLevel: (level: number) => void;
  stime: string | null;
  setSTime: (time: string | null) => void;
  etime: string | null;
  setETime: (time: string | null) => void;
  day: string | null;
  setDay: (key: string) => void;
}) {
  // const [activeFilters, setActiveFilters] = useState({
  //   1: false,
  //   2: false,
  //   3: false,
  //   4: false,
  //   5: false,
  //   6: false,
  //   7: false,
  // });
  const iconMap = {
    quiet: <VolumeOff />,
    talkative: <Speech />,
    open_late: <Moon />,
    coffee_shop: <Coffee />,
    'vending machine': <VendingMachine />,
    big_tables: <Table />,
    couches: <Armchair />,
  };

  const router = useRouter();
  const handleCrowdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCrowdLevel(Number(event.target.value));
  };
  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(event.target.value);
  };
  // const toggleFilters = (index: number,) => {
  //   setActiveFilters(prevState => ({
  //     ...prevState, [index] : !prevState[index]
  //   })

  //   );
  // };
  return (
    // https://vaul.emilkowal.ski/
    <Drawer.Root direction="right">
      <Button
        className="fixed m-4 right-0 top-0 h-9 w-9 touch-none"
        variant="outline"
        asChild
      >
        <Drawer.Trigger>
          <Filter />
        </Drawer.Trigger>
      </Button>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="right-2 top-2 bottom-2 fixed z-10 outline-none w-[310px] flex"
          style={
            { '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties
          }
        >
          <div className="bg-zinc-50 h-full w-full grow p-5 flex flex-col rounded-[16px]">
            <div className="max-w-md mx-auto">
              <Drawer.Title style={{ textAlign: 'center', fontSize: '3.5vh' }}>
                <b>Filter By</b>
              </Drawer.Title>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '3vh',
                    marginTop: '4vh',
                    alignItems: 'center',
                  }}
                >
                  {availableFilters.map((key) => (
                    <button
                      key={key}
                      onClick={() => toggleFilters(key)}
                      style={{
                        width: '10vh',
                        height: '10vh',
                        borderRadius: '50%',
                        backgroundColor: activeFilters.has(key)
                          ? '#ADD8E6'
                          : 'grey',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {iconMap[key]}
                    </button>
                  ))}
                </div>

                <div style={{ marginTop: '4vh' }}>
                  <h1 style={{ textAlign: 'center', fontSize: '3vh' }}>
                    <b>Crowd Level?</b>
                  </h1>
                  <div style={{ marginTop: '1vh' }}>
                    <input
                      type="range"
                      min="1"
                      max="3"
                      value={crowdLevel}
                      onChange={handleCrowdChange}
                      style={{
                        width: '100%',
                        appearance: 'none',
                        height: '8px',
                        backgroundColor:
                          crowdLevel == 3
                            ? '#FF0000'
                            : crowdLevel == 2
                            ? '#FFA500'
                            : '#00FF00',
                        borderRadius: '40vh',
                      }}
                      data-vaul-no-drag
                    />
                  </div>
                </div>

                <h1
                  style={{
                    marginTop: '4vh',
                    textAlign: 'center',
                    fontSize: '3vh',
                  }}
                >
                  <b>Customize Day and Time?</b>
                </h1>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{ marginTop: '1vh', paddingRight: '2vh' }}>
                    <h1 style={{ textAlign: 'center', fontSize: '2vh' }}>
                      Select a Start Time
                    </h1>
                    <div style={{ alignItems: 'center', paddingLeft: '5vh' }}>
                      <TimePicker onChange={setSTime} value={stime} />
                    </div>
                  </div>
                  <div style={{ marginTop: '1vh' }}>
                    <h1 style={{ textAlign: 'center', fontSize: '2vh' }}>
                      Select a End Time
                    </h1>
                    <div style={{ alignItems: 'center', paddingLeft: '5vh' }}>
                      <TimePicker onChange={setETime} value={etime} />
                    </div>
                  </div>
                </div>
                <select
                  id="day-picker"
                  value={day}
                  onChange={handleDayChange}
                  style={{ marginTop: '1vh' }}
                >
                  {daysOfWeek.map((dayOption) => (
                    <option key={dayOption} value={dayOption}>
                      {dayOption}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
