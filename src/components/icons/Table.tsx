import { SVGProps } from 'react';


export function Table(props: SVGProps<SVGSVGElement>) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="1em" 
        height="1em" 
        viewBox="3 3 18 18" 
        {...props}>
            <path 
                fill="currentColor" 
                d="m6.73 19.02l1.347-3.347q.129-.287.389-.47q.259-.184.576-.184H11.5v-4.813q-3.421-.067-5.74-.856T3.443 7.5q0-1.142 2.483-1.927Q8.408 4.789 12 4.789q3.598 0 6.078.784q2.48.785 2.48 1.927q0 1.08-2.328 1.86q-2.328.779-5.73.846v4.813h2.458q.311 0 .574.184t.391.47l1.346 3.346h-1.038l-1.2-3H8.969l-1.2 3zM12 9.211q2.694 0 4.854-.503q2.16-.501 2.64-1.209q-.48-.708-2.64-1.21T12 5.788t-4.854.502t-2.64 1.21q.48.708 2.64 1.21q2.16.501 4.854.501M12 7.5"
            ></path>
        </svg>
    )
  }