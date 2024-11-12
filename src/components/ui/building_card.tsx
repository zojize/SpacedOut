import * as React from "react";
import Link from 'next/link';
import { Tag } from '@/components/ui/tag';
import { MapPin, Coffee, VolumeOff, Speech, Moon, Armchair, Coins, User, Users, UserX } from 'lucide-react';

export function BuildingCard({building} : {building : any}) {
    const icon_size = 18;

    return(
        <div className="w-10/12 mx-auto my-5 h-fit px-5 py-5 space-y-3 rounded-md font-medium border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
            <h1 className="text-lg font-bold">{building.name}</h1>
            <div className="flex flex-row gap-x-2 items-center">
                <MapPin size={icon_size} className="inline"/>
                <Link href='#' className="font-normal">Address</Link>
            </div>
            <div className="flex flex-row gap-x-2 items-center flex-wrap">
                {['quiet', 'talkative', 'open_late', 'coffee_shop', 'big_tables', 'couches', 'vending_machine'].map((tag, i) => (
                    <Tag key={i} name={tag} state={building[tag]} showName={false}/>
                ))}
            </div>
        </div>
    );
}
