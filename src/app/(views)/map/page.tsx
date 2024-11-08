'use client';

import { APIProvider, Map } from '@vis.gl/react-google-maps';

export default function Page() {
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
        />
      </APIProvider>
    </>
  );
}
