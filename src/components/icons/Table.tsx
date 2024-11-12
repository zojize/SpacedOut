import { SVGProps } from 'react';

export function Table(props: SVGProps<SVGSVGElement>) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em" 
            viewBox="0 0 24 24" 
            {...props}
        >
            <path 
                fill="currentColor" 
                d="m6 20l1.5-3.75q.225-.575.725-.913T9.35 15H11v-4.025Q7.175 10.85 4.587 9.85T2 7.5q0-1.45 2.925-2.475T12 4q4.175 0 7.088 1.025T22 7.5q0 1.35-2.588 2.35T13 10.975V15h1.65q.6 0 1.113.338t.737.912L18 20h-2l-1.2-3H9.2L8 20zm6-11q2.425 0 4.575-.425t3.15-1.075q-1-.65-3.15-1.075T12 6t-4.575.425T4.275 7.5q1 .65 3.15 1.075T12 9m0-1.5"
            ></path>
        </svg>
    );
  }