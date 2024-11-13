import { Coffee, VolumeOff, Speech, Moon, Armchair, Coins, User, Users, UserX } from 'lucide-react';
import { VendingMachine } from '@/components/icons/VendingMachine';
import { Table } from '@/components/icons/Table';

export function Tag({name, showName} : {name : any, showName : boolean}) {
    const icon_size = 20;

    return(
        <div className="rounded-full flex flex-row gap-x-3 w-fit h-fit p-2 bg-black bg-opacity-5">
            {name == 'quiet' && <VolumeOff size={icon_size}/>}
            {name == 'talkative' && <Speech size={icon_size}/>}
            {name == 'open_late' && <Moon size={icon_size}/>}
            {name == 'coffee_shop' && <Coffee size={icon_size}/>}
            {name == 'big_tables' && <Table width={icon_size} height={icon_size}/>}
            {name == 'couches' && <Armchair size={icon_size}/>}
            {name == 'vending_machine' && <VendingMachine width={icon_size} height={icon_size}/>}
        </div>
    );
}