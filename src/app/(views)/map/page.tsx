'use client';

import { Button } from '@/components/ui/button';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { features as buildings } from '@/data/uiuc_buildings.json';
import * as tagsArr from '@/data/building_tags.json';
import dynamic from 'next/dynamic';
import { useFilters } from '@/hooks/useFilters';

const tags = Object.fromEntries(
  Array.from(tagsArr).map((entry) => [entry.name, entry]),
);

export default dynamic(
  () =>
    Promise.resolve(function Page() {
      const router = useRouter();
      const [filters] = useFilters();

      return (
        <>
          <APIProvider
            // might as well just expose this
            apiKey="AIzaSyCi4v_iYDC-hWVsjcSMia0OzSy2zfZm8JY"
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
                const isFilteredOut =
                  filters.size > 0 &&
                  Array.from(filters).some((filter) => !tags?.[name]?.[filter]);
                return (
                  <AdvancedMarker
                    key={i}
                    position={{
                      lng: geometry.coordinates[0],
                      lat: geometry.coordinates[1],
                    }}
                    title={name}
                    onClick={() =>
                      !isFilteredOut && router.push(`/buildinginfo`)
                    }
                    // onClick={() => console.log(name)}
                  >
                    <Button
                      className={
                        'rounded-full ' +
                        (isFilteredOut
                          ? 'bg-gray-500'
                          : ['bg-green-500', 'bg-yellow-500', 'bg-red-500'][
                              crowdLevel - 1
                            ])
                      }
                      size="icon"
                      variant="secondary"
                      disabled={
                        filters.has('quiet') && (tags?.[name]?.quiet ?? true)
                      }
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
    }),
  { ssr: false },
);
