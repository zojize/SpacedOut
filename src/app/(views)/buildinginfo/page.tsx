'use client';
import React from 'react';
import BuildingInfo from './buildinginfo';

export default function BuildingInfoPage() {
    return (
        <BuildingInfo 
            buildingName="Education Building" //placeholder
            buildingAddress="1310 S 6th St, Champaign, IL 61820" //placeholder
            hours={{ //placeholder
                "M-TH": "7AM-9PM",
                "F": "7AM-9PM",
                "SAT": "7AM-6PM",
                "SUN": "LOCKED"
            }}
            selectedTime= {new Date('November 16, 2024 06:59:59')} //specific date is for testing purposes
        />
    );
}