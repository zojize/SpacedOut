'use client';

import { Button } from '@/components/ui/button';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { features as buildings } from '@/data/uiuc_buildings.json';
import tags from '@/data/building_tags.json';
import dynamic from 'next/dynamic';
import { useCrowdLevel, useFilters } from '@/hooks/building-filters';
import { useEffect, useState } from 'react';

export default dynamic(
  () =>
    Promise.resolve(function Page() {
      const router = useRouter();
      const [filters] = useFilters();
      const [currentLocation, setCurrentLocation] = useState<null | {
        lat: number;
        lng: number;
      }>(null);
      const [crowdLevel] = useCrowdLevel();

      useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      });

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
              {currentLocation && (
                <AdvancedMarker
                  position={currentLocation}
                  // onClick={() => console.log(name)}
                >
                  <div
                    className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white animate-pulse"
                    title="Current Location"
                  />
                </AdvancedMarker>
              )}
              {buildings.map(({ geometry, properties: { name } }, i) => {
                const buildingName = name as keyof typeof tags;
                const isFilteredOut =
                  (filters.size > 0 &&
                    Array.from(filters).some(
                      (filter) => !tags[buildingName][filter],
                    )) ||
                  tags[buildingName].crowd_level > crowdLevel;
                return (
                  <AdvancedMarker
                    key={i}
                    position={{
                      lng: geometry.coordinates[0],
                      lat: geometry.coordinates[1],
                    }}
                    title={name}
                    onClick={() =>
                      !isFilteredOut &&
                      router.push(`/buildinginfo/${encodeURIComponent(name)}`)
                    }
                    // onClick={() => console.log(name)}
                  >
                    <Button
                      className={
                        'rounded-full ' +
                        (isFilteredOut
                          ? 'bg-gray-500'
                          : ['bg-green-500', 'bg-yellow-500', 'bg-red-500'][
                              tags[buildingName].crowd_level - 1
                            ])
                      }
                      size="icon"
                      variant="secondary"
                      disabled={
                        filters.has('quiet') &&
                        (tags[buildingName].quiet ?? true)
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
