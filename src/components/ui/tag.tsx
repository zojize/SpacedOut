// icons
import { Coffee, VolumeOff, Speech, Moon, Armchair, Coins, User, Users, UserX } from 'lucide-react';
import { VendingMachine } from '@/components/icons/VendingMachine';
import { Table } from '@/components/icons/Table';

// tooltip
import { Tooltip } from 'react-tooltip';

const tag_info = {
    'quiet' : 'This space is quiet',
    'talkative' : 'This space is talkative',
    'open_late' : 'This space is open late',
    'coffee_shop' : 'This space is near a cafe',
    'big_tables' : 'This space has big tables',
    'couches' : 'This space has couches',
    'vending_machine' : 'This space has a vending machine'
}

export function Tag({name, showName} : {name : string, showName : boolean}) {
    const icon_size = 22;
    const stroke_width = 1.5;

    return(
        <div 
            data-tooltip-id="tag-tooltip" 
            data-tooltip-content={tag_info[name]}
            data-tooltip-delay-hide={100}
            data-tooltip-place='top'
            className={`border border-input rounded-full flex flex-row gap-x-3 w-fit h-fit p-2.5 bg-black bg-opacity-5 items-center`}
            onClick={(e) => e.stopPropagation()}
        >
            {name == 'quiet' && <VolumeOff size={icon_size} strokeWidth={stroke_width+0.1} viewBox='-2 -2 28 28'/>}
            {name == 'talkative' && <Speech size={icon_size} strokeWidth={stroke_width}/>}
            {name == 'open_late' && <Moon size={icon_size} strokeWidth={stroke_width}/>}
            {name == 'coffee_shop' && <Coffee size={icon_size} strokeWidth={stroke_width}/>}
            {name == 'big_tables' && <Table width={icon_size} height={icon_size}/>}
            {name == 'couches' && <Armchair size={icon_size} strokeWidth={stroke_width}/>}
            {name == 'vending_machine' && <VendingMachine width={icon_size} height={icon_size}/>}
            <Tooltip
                id="tag-tooltip"
                // content={tag_info[name]}
                openEvents={{'click':true,'mouseenter':true, 'mouseover':true, 'focus':true, 'mousedown':true}}
                globalCloseEvents={{'clickOutsideAnchor':true, 'escape':true, 'scroll':true}}
            />
        </div>
    );
}