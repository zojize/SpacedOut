import * as React from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Tag } from '@/components/ui/tag';
import { MapPin, User, SquareArrowOutUpRight } from 'lucide-react';

export function BuildingCard({building} : {building : any}) {
    const router = useRouter();
    const icon_size = 18;

    return(
        <div 
            className="relative w-10/12 mx-auto my-5 h-fit px-5 py-5 rounded-md font-medium border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
            onClick={() => router.push(`/buildinginfo`)}
        >
            {/* crowdedness */}
            {/* <div className={`absolute right-5 top-5 rounded-full flex flex-row gap-x-3 w-fit h-fit p-2 bg-opacity-40 ${['bg-green-500', 'bg-yellow-500', 'bg-red-500'][building.crowd_level - 1]}`}>
                <User size={icon_size}/>
            </div> */}

            {/* alternative crowdedness */}
            <div className={`absolute right-5 top-5 rounded-md flex flex-row gap-x-3 w-fit h-fit py-1 px-2 bg-opacity-30 ${['bg-green-500', 'bg-yellow-500', 'bg-red-500'][building.crowd_level - 1]}`}>
                <p className={`font-normal text-sm ${['text-green-600', 'text-yellow-600', 'text-red-600'][building.crowd_level - 1]}`}>80% full</p>
            </div>
            
            {/* building name */}
            <div className="w-full h-fit flex flex-row mb-0.5">
                <h1 className="w-4/5 left-0 top-0 text-lg font-bold">{building.name}</h1>
            </div>

            {/* address */}
            <a href='/map'
                className="flex flex-row gap-x-1 items-center mb-4"
                onClick={(e) => e.stopPropagation()}
            >
                {/* <MapPin size={icon_size} className="inline"/> */}
                <p className="font-normal text-gray-500 w-fit inline">Address</p>
                <SquareArrowOutUpRight className="text-gray-500" size={icon_size-4} strokeWidth={1.5}/>
            </a>

            {/* tags */}
            <div className="flex flex-row gap-3 items-center flex-wrap">
                {['quiet', 'talkative', 'open_late', 'coffee_shop', 'big_tables', 'couches', 'vending_machine'].map((tag, i) => (
                    building[tag] == 1 && <Tag key={i} name={tag} showName={false}/>
                ))}
            </div>
        </div>
    );
}
