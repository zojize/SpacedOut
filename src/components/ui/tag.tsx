import { Coffee, VolumeOff, Speech, Moon, Armchair, Coins, User, Users, UserX } from 'lucide-react';

export function Tag({name, state, showName} : {name : any, state : boolean, showName : boolean}) {
    const icon_size = 20;

    return(
        <div className={`rounded-full flex flex-row gap-x-3 w-fit h-fit p-2 ${state ? "bg-cyan-400 bg-opacity-30" : "bg-black bg-opacity-5"}`}>
            {name == 'quiet' && <VolumeOff size={icon_size}/>}
            {name == 'talkative' && <Speech size={icon_size}/>}
            {name == 'open_late' && <Moon size={icon_size}/>}
            {name == 'coffee_shop' && <Coffee size={icon_size}/>}
            {name == 'big_tables' && <Coffee size={icon_size}/>}
            {name == 'couches' && <Armchair size={icon_size}/>}
            {name == 'vending_machine' && <Coins size={icon_size}/>}
        </div>
    );
}