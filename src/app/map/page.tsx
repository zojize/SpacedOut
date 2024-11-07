'use client';

import { APIProvider, Map } from '@vis.gl/react-google-maps';

export default function Page() {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}>
      <Map
        style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{ lng: -88.2247336803035, lat: 40.11383687791036 }}
        defaultZoom={15}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      />
    </APIProvider>
  );
}
