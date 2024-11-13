// icons
import { Coffee, VolumeOff, Speech, Moon, Armchair, Coins, User, Users, UserX } from 'lucide-react';
import { VendingMachine } from '@/components/icons/VendingMachine';
import { Table } from '@/components/icons/Table';

// tooltip
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

export function Tag({name, showName} : {name : any, showName : boolean}) {
    const icon_size = 20;
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div 
            data-tooltip-id="tag-tooltip" 
            data-tooltip-content="tooltip" 
            className="rounded-full flex flex-row gap-x-3 w-fit h-fit p-2 bg-black bg-opacity-5"
            onMouseEnter={() => setIsOpen(true)}
            onClick={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onScroll={() => setIsOpen(false)}
        >
            {name == 'quiet' && <VolumeOff size={icon_size}/>}
            {name == 'talkative' && <Speech size={icon_size}/>}
            {name == 'open_late' && <Moon size={icon_size}/>}
            {name == 'coffee_shop' && <Coffee size={icon_size}/>}
            {name == 'big_tables' && <Table width={icon_size} height={icon_size}/>}
            {name == 'couches' && <Armchair size={icon_size}/>}
            {name == 'vending_machine' && <VendingMachine width={icon_size} height={icon_size}/>}
            <Tooltip
                id="tag-tooltip"
                content="tooltip"
                // isOpen={isOpen}
                openEvents={{'click':true,'mouseenter':true, 'mouseover':true, 'focus':true, 'mousedown':true}}
                globalCloseEvents={{'clickOutsideAnchor':true, 'escape':true, 'scroll':true}}
            />
        </div>
    );
}