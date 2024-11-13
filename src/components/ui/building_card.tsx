import * as React from "react";
import Link from 'next/link';
import { Tag } from '@/components/ui/tag';
import { MapPin, Coffee, VolumeOff, Speech, Moon, Armchair, Coins, User, Users, UserX } from 'lucide-react';

export function BuildingCard({building} : {building : any}) {
    const icon_size = 18;

    return(
        <div className="relative w-10/12 mx-auto my-5 h-fit px-5 py-5 space-y-3 rounded-md font-medium border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
            <div className="relative w-full h-fit flex flex-row ">
                <h1 className="w-4/5 left-0 top-0 text-lg font-bold">{building.name}</h1>
                <div className={`absolute right-0 top-0 rounded-full flex flex-row gap-x-3 w-fit h-fit p-2 ${['bg-green-500', 'bg-yellow-500', 'bg-red-500'][building.crowd_level - 1]}`}>
                    <User size={icon_size}/>
                </div>
            </div>
            <div className="flex flex-row gap-x-2 items-center">
                <MapPin size={icon_size} className="inline"/>
                <Link href='#' className="font-normal">Address</Link>
            </div>
            <div className="flex flex-row gap-3 items-center flex-wrap">
                {['quiet', 'talkative', 'open_late', 'coffee_shop', 'big_tables', 'couches', 'vending_machine'].map((tag, i) => (
                    building[tag] == 1 && <Tag key={i} name={tag} showName={false}/>
                ))}
            </div>
        </div>
    );
}
