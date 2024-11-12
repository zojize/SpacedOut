'use client';

import { Button } from '@/components/ui/button';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { features as buildings } from '@/data/uiuc_buildings.json';
import * as tagsArr from '@/data/building_tags.json';

const tags = Object.fromEntries(tagsArr.map((entry) => [entry.name, entry]));

export default function Page() {
  const router = useRouter();

  return (
    <>
      <APIProvider
        // might as well just expose this
        apiKey="AIzaSyCi4v_iYDC-hWVsjcSMia0OzSy2zfZm8JY"
        // @ts-expect-error: inevitable hydration mismatch
        suppressHydrationWarning
      >
        <Map
          style={{ width: '100vw', height: '100vh' }}
          defaultCenter={{ lng: -88.2247336803035, lat: 40.11383687791036 }}
          defaultZoom={15}
          gestureHandling={'greedy'}
          disableDefaultUI
          mapId="49ae42fed52588c3"
        >
          {buildings.map(({ geometry, properties: { name } }, i) => {
            const crowdLevel = tags?.[name]?.crowd_level ?? 1;
            console.log(name, crowdLevel);
            return (
              <AdvancedMarker
                key={i}
                position={{
                  lng: geometry.coordinates[0],
                  lat: geometry.coordinates[1],
                }}
                title={name}
                onClick={() => router.push(`/buildinginfo`)}
              >
                <Button
                  className={
                    'rounded-full ' +
                    ['bg-red-500', 'bg-yellow-500', 'bg-green-500'][
                      crowdLevel - 1
                    ]
                  }
                  size="icon"
                  variant="secondary"
                >
                  <User />
                </Button>
              </AdvancedMarker>
            );
          })}
        </Map>
      </APIProvider>
    </>
  );
}
