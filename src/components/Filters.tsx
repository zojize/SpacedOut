'use client';

import { Filter } from 'lucide-react';
import { Drawer } from 'vaul';
import { Button } from './ui/button';
import 'antd/dist/reset.css';
import { createRef, useEffect, useState } from 'react';
// import TimePicker from 'react-time-picker';
// import 'react-time-picker/dist/TimePicker.css';
// import 'react-clock/dist/Clock.css';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';

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
import type { FilterTypes } from '@/hooks/building-filters';
import { MyTimePicker } from './MyTimePicker';
import { useMediaQuery } from 'usehooks-ts';

const availableFilters = [
  'quiet',
  'talkative',
  'open_late',
  'coffee_shop',
  'vending_machine',
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
  toggleFilters: (key: FilterTypes) => void;
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
  const icon_size = 32;
  const stroke_width = 1.5;
  const iconMap = {
    quiet: (
      <VolumeOff
        size={icon_size}
        strokeWidth={stroke_width + 0.1}
        viewBox="-2 -2 28 28"
      />
    ),
    talkative: <Speech size={icon_size} strokeWidth={stroke_width} />,
    open_late: <Moon size={icon_size} strokeWidth={stroke_width} />,
    coffee_shop: <Coffee size={icon_size} strokeWidth={stroke_width} />,
    vending_machine: <VendingMachine width={icon_size} height={icon_size} />,
    big_tables: <Table width={icon_size} height={icon_size} />,
    couches: <Armchair size={icon_size} strokeWidth={stroke_width} />,
  };
  const format = 'HH:mm';
  const router = useRouter();
  const handleCrowdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCrowdLevel(Number(event.target.value));
  };
  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(event.target.value);
  };
  const [mobileSTimePickerOpen, setMobileSTimePickerOpen] = useState(false);
  const [mobileETimePickerOpen, setMobileETimePickerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  // const toggleFilters = (index: number,) => {
  //   setActiveFilters(prevState => ({
  //     ...prevState, [index] : !prevState[index]
  //   })

  //   );
  // };
  const [isOpen, setIsOpen] = useState(false);

  return (
    // https://vaul.emilkowal.ski/
    <Drawer.Root
      direction="right"
      dismissible={false}
      open={isOpen}
      onOpenChange={setIsOpen}
      repositionInputs={false}
    >
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
        <Drawer.Overlay
          className="fixed inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        />
        <Drawer.Content
          className="right-2 top-2 bottom-2 fixed outline-none w-[310px] flex touch-manipulation"
          style={
            {
              '--initial-transform': 'calc(100%)',
              overflow: 'hidden',
            } as React.CSSProperties
          }
        >
          <div
            className="bg-zinc-50 h-700px w-full p-5 rounded-[16px]"
            style={{ overflowY: 'auto' }}
          >
            <div className="max-w-md mx-auto">
              <Drawer.Title style={{ fontSize: '25px', marginBottom: '-10px' }}>
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
                    gap: '20px',
                    marginTop: '20px',
                    alignItems: 'center',
                  }}
                >
                  {availableFilters.map((key) => (
                    <button
                      key={key}
                      onClick={() => toggleFilters(key)}
                      style={{
                        width: '70px',
                        height: '70px',
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

                <div style={{ marginTop: '40px' }}>
                  <h1 style={{ fontSize: '25px' }}>
                    <b>Crowdedness?</b>
                  </h1>
                  <div style={{ marginTop: '10px' }}>
                    <input
                      type="range"
                      min="1"
                      max="3"
                      value={crowdLevel}
                      onChange={handleCrowdChange}
                      style={{
                        width: '100%',
                        appearance: 'none',
                        height: '10px',
                        background: `rgba(${
                          crowdLevel === 3
                            ? '255, 0, 0'
                            : crowdLevel === 2
                            ? '255, 165, 0'
                            : '0, 255, 0'
                        }, 0.5)`,
                        borderRadius: '40vh',
                      }}
                      data-vaul-no-drag
                    />
                  </div>
                </div>

                <h1
                  style={{
                    marginTop: '30px',
                    fontSize: '25px',
                  }}
                >
                  <b>Day and Time</b>
                </h1>
                <div className="flex items-center justify-center">
                  {/* <div style={{ marginTop: '1vh', marginBottom:'2vh'}}>
                    <h1 style={{ textAlign: 'center', fontSize: '2vh' }}>
                      Select a Start Time
                    </h1>
                    <div style={{paddingLeft:'27%'}}>
                      {/* <TimePicker 
                        clockIcon={null}
                        disableClock={true} 
                        onChange={setSTime} 
                        value={stime} /> }
                    </div>
                  </div> */}
                  <TimePicker.RangePicker
                    inputReadOnly={true}
                    format={format}
                    allowClear={false}
                    allowEmpty={false}
                    defaultValue={[dayjs(stime, format), dayjs(etime, format)]}
                    value={[dayjs(stime, format), dayjs(etime, format)]}
                    onClick={(event) => {
                      console.log(
                        stime,
                        etime,
                        (event.target as HTMLInputElement).getAttribute(
                          'date-range',
                        ) === 'start',
                      );
                      if (isMobile)
                        (event.target as HTMLInputElement).getAttribute(
                          'date-range',
                        ) === 'start'
                          ? setMobileSTimePickerOpen(true)
                          : setMobileETimePickerOpen(true);
                    }}
                    popupClassName={isMobile ? 'hidden' : ''}
                    onChange={(times) => {
                      if (!isMobile && times) {
                        setSTime(times[0]?.format(format) || null);
                        setETime(times[1]?.format(format) || null);
                      }
                    }}
                  />
                  {isMobile && (
                    <>
                      <MyTimePicker
                        open={mobileSTimePickerOpen}
                        onOpenChange={setMobileSTimePickerOpen}
                        time={stime}
                        setTime={setSTime}
                      />
                      <MyTimePicker
                        open={mobileETimePickerOpen}
                        onOpenChange={setMobileETimePickerOpen}
                        time={etime}
                        setTime={setETime}
                      />
                    </>
                  )}
                </div>
                <select
                  id="day-picker"
                  value={day!}
                  onChange={handleDayChange}
                  style={{ marginTop: '20px' }}
                >
                  {daysOfWeek.map((dayOption) => (
                    <option key={dayOption} value={dayOption}>
                      {dayOption}
                    </option>
                  ))}
                </select>
              </div>

              <div
                className="text-center mt-[20px] flex flex-row space-x-2"
                style={{
                  textAlign: 'center',
                  marginTop: '20px',
                  flex: '1 1 auto',
                  flexDirection: 'row',
                }}
              >
                <button
                  className="rounded-md mt-4 w-full bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Filters
                </button>
                <button
                  className="rounded-md mt-4 w-full border-gray-900 border-2 px-3.5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
                  onClick={() => {
                    setCrowdLevel(1);
                    setSTime(new Date().getHours().toString() + ':00');
                    setETime(
                      Math.min(new Date().getHours() + 1, 24).toString() +
                        ':00',
                    );
                    setDay(daysOfWeek[new Date().getDay()]);
                    availableFilters.map((key) => {
                      if (activeFilters.has(key)) {
                        toggleFilters(key);
                      }
                    });
                    setIsOpen(false);
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
