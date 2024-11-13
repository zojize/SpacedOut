'use client';

import { Filter } from 'lucide-react';
import { Drawer } from 'vaul';
import { Button } from './ui/button';
import { useState } from 'react';
import TimePicker from 'react-time-picker'
import { useRouter } from 'next/navigation';

export function Filters() {
  const [activeFilters, setActiveFilters] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });
  const [crowdLevel, setCrowdLevel] = useState<number>(3);
  const [stime, setSTime] = useState<string | null>('10:00');
  const [etime, setETime] = useState<string | null>('11:00');
  const router = useRouter();
  const handleCrowdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCrowdLevel(Number(event.target.value));
  };
  const toggleFilters = (index: number,) => {
    setActiveFilters(prevState => ({
      ...prevState, [index] : !prevState[index]
    })
      
    );
  };
  const handleClick = () => {
};
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
              <Drawer.Title style={{ textAlign: 'center', fontSize:'4vh'}}>
                Filters
              </Drawer.Title>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2vh', marginTop: '1vh', alignItems: 'center' }}>
                  {Object.keys(activeFilters).map((key) => (
                    <button
                      key={key}
                      onClick={() => toggleFilters(Number(key))}
                      style={{
                        width: '10vh',
                        height: '10vh',
                        borderRadius: '50%',
                        backgroundColor: activeFilters[key] ? 'blue' : 'grey',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {key}
                    </button>
                  ))}
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
                        width: '100%',
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
                    <h1 style={{ textAlign: 'center', fontSize: '2vh' }}>Select a Start Time</h1>
                    <div style={{alignItems: 'center', paddingLeft:'5vh'}}>
                      <TimePicker onChange={setSTime} value={stime}/>
                    </div>
                  </div>
                  <div style={{ marginTop: '5vh' }}>
                    <h1 style={{ textAlign: 'center', fontSize: '2vh' }}>Select a End Time</h1>
                    <div style={{alignItems: 'center', paddingLeft:'5vh'}}>
                      <TimePicker onChange={setETime} value={etime}/>
                    </div>
                  </div>
                </div>
               
                  <Button style={{height:'10%', marginTop:'10%',fontSize:'100%'}}> Apply Changes </Button>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
