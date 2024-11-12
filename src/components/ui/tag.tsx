import { Coffee, VolumeOff, Speech, Moon, Armchair, Coins, User, Users, UserX } from 'lucide-react';

export function Tag({name, state, showName} : {name : any, state : any, showName : boolean}) {
    const icon_size = 20;

    return(
        <div className="rounded-full bg-black bg-opacity-5 flex flex-row gap-x-3 w-fit h-fit p-2">
            {name == 'coffee_shop' && <Coffee size={icon_size}/>}
        </div>
    );
}