import * as React from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

import { Tag } from '@/components/ui/tag';
import { MapPin, SquareArrowOutUpRight } from 'lucide-react';
import { IconPhUser } from '@/components/icons/IconPhUser';
import { IconPhUsersThree } from '@/components/icons/IconPhUsersThree';
import { IconPhUsers } from '@/components/icons/IconPhUsers';

export function BuildingCard({buildingName, buildingTags} : {buildingName : any, buildingTags : any}) {
    const router = useRouter();
    const iconSize = 18;

    return(
        <div 
            className="relative w-10/12 mx-auto my-5 h-fit px-5 py-5 rounded-md font-medium border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
            onClick={() => router.push(`/buildinginfo/${encodeURIComponent(buildingName)}`)}
        >
            {/* crowdedness */}
            <div className={`absolute right-5 top-5 rounded-full flex flex-row gap-x-3 w-fit h-fit p-2 bg-opacity-40 ${['bg-green-500', 'bg-yellow-500', 'bg-red-500'][buildingTags.crowd_level - 1]}`}>
                {[<IconPhUser/>, <IconPhUsers/>, <IconPhUsersThree/>][buildingTags.crowd_level - 1]}
            </div>

            {/* alternative crowdedness */}
            {/* <div className={`absolute right-5 top-5 rounded-md flex flex-row gap-x-3 w-fit h-fit py-1 px-2 bg-opacity-30 ${['bg-green-500', 'bg-yellow-500', 'bg-red-500'][buildingTags.crowd_level - 1]}`}>
                <p className={`font-normal text-sm ${['text-green-600', 'text-yellow-600', 'text-red-600'][buildingTags.crowd_level - 1]}`}>80% full</p>
            </div> */}
            
            {/* buildingTags name */}
            <div className="w-full h-fit flex flex-row mb-0.5">
                <h1 className="w-4/5 left-0 top-0 text-lg font-bold">{buildingName}</h1>
            </div>

            {/* address */}
            <a href='/map'
                className="flex flex-row gap-x-1 items-center w-fit "
                onClick={(e) => e.stopPropagation()}
            >
                {/* <MapPin size={icon_size} className="inline"/> */}
                <p className="font-normal text-gray-500 w-fit  mb-0">{buildingTags.address ? buildingTags.address : "Address"}</p>
                <SquareArrowOutUpRight className="text-gray-500 " size='0.8rem' strokeWidth={1.5}/>
            </a>

            {/* tags */}
            <div className="flex flex-row gap-3 items-center flex-wrap mt-4">
                {['quiet', 'talkative', 'open_late', 'coffee_shop', 'big_tables', 'couches', 'vending_machine'].map((tag, i) => (
                    buildingTags?.[tag] == 1 && <Tag key={i} name={tag} showName={false}/>
                ))}
            </div>
        </div>
    );
}
