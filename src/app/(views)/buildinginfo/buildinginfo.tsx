import React from 'react';
import Image from 'next/image';
import './buildinginfo.css';

interface BuildingInfoProps {
    buildingName: string;
    buildingAddress: string;
    hours: { [day: string]: string };
    selectedTime: Date;
}

const BuildingInfo: React.FC<BuildingInfoProps> = ({ 
    buildingName, 
    buildingAddress, 
    hours,
    selectedTime,
}) => {
    const convertTime = (time: string, to12Hour: boolean = true) => {
        if (time.length === 4) {
            time = time.slice(0, 2) + ":00" + time.slice(2);  // "7AM" -> "7:00AM"
        }
    
        const [hour, minute] = time.split(':');
        const [hourNum, period] = [parseInt(hour), time.slice(-2)];
        const isPM = period === "PM";
        const hour24 = period === "PM" && hourNum !== 12 ? hourNum + 12 : (hourNum === 12 && period === "AM" ? 0 : hourNum);
        
        if (to12Hour) {
            const hour12 = hourNum % 12 || 12;
            const formattedMinute = (minute || "00").padStart(2, '0');
            const periodString = isPM ? 'PM' : 'AM';
            return `${hour12}:${formattedMinute} ${periodString}`;
        } else {
            return `${hour24}:${minute}`;
        }
    };
    

    const getCurrentDay = () => {
        const day = selectedTime.getDay();
        return day === 0 ? "SUN" : day === 6 ? "SAT" : day >= 1 && day <= 4 ? "M-TH" : "F";
    };

    const isOpen = () => {
        const dayKey = getCurrentDay();
        const todayHours = hours[dayKey];
    
        if (!todayHours || todayHours === "LOCKED") return false;
    
        const [opening, closing] = todayHours.split('-');
        const openTime24 = convertTime(opening, false);
        const closeTime24 = convertTime(closing, false);
    
        const [openHour, openMinute] = openTime24.split(':').map(Number);
        const [closeHour, closeMinute] = closeTime24.split(':').map(Number);
    
        const currentHour = selectedTime.getHours();
        const currentMinute = selectedTime.getMinutes();
    
        const isAfterOpening = (currentHour >= openHour) || (currentHour === openHour && currentMinute >= openMinute);
        const isBeforeClosing = (currentHour < closeHour) || (currentHour === closeHour && currentMinute < closeMinute);
    
        return isAfterOpening && isBeforeClosing;
    };
    

    const getBuildingStatus = () => {
        const dayKey = getCurrentDay();
        const todayHours = hours[dayKey];

        const [openTime, closeTime] = todayHours.split('-');
        const openTimeFormatted = convertTime(openTime, true);
        const closeTimeFormatted = convertTime(closeTime, true);

        return isOpen() ? (
            <>
                <span className="status-open">Open</span> ⋅ Closes at {closeTimeFormatted}
            </>
        ) : (
            <>
                <span className="status-closed">Closed</span> ⋅ Opens at {openTimeFormatted}
            </>
        );
    };

    return (
        <div className="maincontainer">
            <div className="maininfo">
                <span className="building-name">{buildingName}</span>
                <span className="building-hours">{getBuildingStatus()}</span>
                <span className="building-address">{buildingAddress}</span>
            </div>

            <div className="buildingtags">
                <span className="tags-text"> Tags: </span>
                <div className="tag-icons-container">
                    <Image src="/favicon.ico" alt="Icon 1" width={40} height={40} className="tag-icon" />
                    <Image src="/favicon.ico" alt="Icon 2" width={40} height={40} className="tag-icon" />
                    <Image src="/favicon.ico" alt="Icon 3" width={40} height={40} className="tag-icon" />
                    <Image src="/favicon.ico" alt="Icon 4" width={40} height={40} className="tag-icon" />
                    <Image src="/favicon.ico" alt="Icon 5" width={40} height={40} className="tag-icon" />
                    <Image src="/favicon.ico" alt="Icon 6" width={40} height={40} className="tag-icon" />
                </div>
                <div>
                    <Image src="/favicon.ico" alt="More Info Icon" width={20} height={20} className="more-info-icon" />
                </div>
            </div>

            <div className="roomscontainer">
                <span className="rooms-text"> Currently Open Rooms: </span>
            </div>
        </div>
    );
};

export default BuildingInfo;

