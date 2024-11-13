"use client";

import { useState } from 'react';
import TimePicker from 'react-time-picker'
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Page(): JSX.Element {
  const [activeFilters, setActiveFilters] = useState<boolean[]>(Array(9).fill(false));
  const [crowdLevel, setCrowdLevel] = useState<number>(3);
  const [stime, setSTime] = useState<string | null>('10:00');
  const [etime, setETime] = useState<string | null>('11:00');
  const router = useRouter();
  const handleCrowdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCrowdLevel(Number(event.target.value));
  };
  const toggleFilters = (index: number) => {
    setActiveFilters(prevState =>
      prevState.map((isActive, i) => (i === index ? !isActive : isActive))
    );
  };
  const handleClick = () => {
};

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center', fontSize:'5vh'}}>Customize Recommendations</h1>
      <div style={{marginTop:'4vh'}}>
        <h1 style={{ textAlign: 'center', fontSize:'3vh'}}>Filters</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2vh', marginTop: '1vh', alignItems: 'center' }}>
          {activeFilters.map((isActive, i) => (
            <button
              key={i}
              onClick={() => toggleFilters(i)}
              style={{width: '10vh',height: '10vh',borderRadius: '50%',backgroundColor: isActive ? 'blue' : 'grey',display: 'flex',alignItems: 'center',justifyContent: 'center',
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <div style={{marginTop:'5vh'}}>
        <h1 style={{ textAlign: 'center', fontSize:'3vh'}}>Crowd Level?</h1>
        <div>
        <input
          type="range"
          min="1"
          max="3"
          value={crowdLevel}
          onChange={handleCrowdChange}
          style={{
            width: '300px',
            appearance: 'none',
            height: '8px',
            backgroundColor: crowdLevel == 3 ? '#FF0000' : crowdLevel == 2 ? '#FFA500' : '#00FF00' ,
            borderRadius: '40vh',
          }}
        />
      </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{ marginTop: '5vh', paddingRight:'2vh'}}>
          <h1 style={{ textAlign: 'center', fontSize: '3vh' }}>Select a Start Time</h1>
          <div style={{alignItems: 'center', paddingLeft:'5vh'}}>
            <TimePicker onChange={setSTime} value={stime}/>
          </div>
        </div>
        <div style={{ marginTop: '5vh' }}>
          <h1 style={{ textAlign: 'center', fontSize: '3vh' }}>Select a End Time</h1>
          <div style={{alignItems: 'center', paddingLeft:'5vh'}}>
            <TimePicker onChange={setETime} value={etime}/>
          </div>
        </div>
      </div>
      <Button><h1>Apply Changes</h1></Button>
    </div>
  );
}
