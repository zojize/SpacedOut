'use client';
import React from 'react';
import BuildingInfo from './buildinginfo';
 
export default function BuildingInfoPage() {
    return (
        <BuildingInfo 
            buildingName="Campus Instructional Facility" //placeholder
            buildingAddress="1405 W Springfield Ave, Urbana, IL 61801" //placeholder
            hours="24 hours"
            // hours={{
            //     "M-TH": "7AM-11PM",
            //     "F": "7AM-9PM",
            //     "SAT": "9AM-9PM",
            //     "SUN": "12PM-11PM"
            //   }}
            
            // either specify a start and end date, or just a single date
            selectedTime= //{{start: new Date('November 12, 2024 09:51:00'), end: new Date('November 12, 2024 09:59:00')}} 
            {new Date()}

            tags= {{
                "quiet": 1,
                "talkative": 1,
                "open_late": 1,
                "coffee_shop": 1,
                "big_tables": 1,
                "couches": 1,
                "vending_machine": 1,
                "crowd_level": 3
              }}
                
            rooms= // note that the "rooms: " & "total sections: " part is NOT included from building_data.json
            {{
                "3038": {
                  "sections": [
                    {
                      "course": "ABE 452",
                      "time": {
                        "start": "11:00",
                        "end": "11:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    // }
                    },
                    {
                      "course": "ABE 452",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "CS 101",
                      "time": {
                        "start": "13:00",
                        "end": "14:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 101",
                      "time": {
                        "start": "13:00",
                        "end": "14:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "ECE 199",
                      "time": {
                        "start": "15:00",
                        "end": "15:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "ECE 493",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "ENG 199",
                      "time": {
                        "start": "17:30",
                        "end": "18:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "ENG 199",
                      "time": {
                        "start": "16:00",
                        "end": "17:20"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "ETMA 499",
                      "time": {
                        "start": "11:00",
                        "end": "11:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "ETMA 499",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "MATH 487",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "MCB 431",
                      "time": {
                        "start": "09:30",
                        "end": "10:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "MSE 101",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "NPRE 435",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "NPRE 451",
                      "time": {
                        "start": "09:00",
                        "end": "09:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "16:00",
                        "end": "17:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 487",
                      "time": {
                        "start": "15:00",
                        "end": "16:20"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 487",
                      "time": {
                        "start": "16:30",
                        "end": "17:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "STAT 556",
                      "time": {
                        "start": "11:00",
                        "end": "12:20"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    }
                  ]
                },
                "3031": {
                  "sections": [
                    {
                      "course": "ACE 221",
                      "time": {
                        "start": "14:00",
                        "end": "15:20"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "AE 321",
                      "time": {
                        "start": "09:00",
                        "end": "09:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "AE 442",
                      "time": {
                        "start": "15:30",
                        "end": "16:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "BIOE 201",
                      "time": {
                        "start": "11:00",
                        "end": "12:20"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "BIOE 476",
                      "time": {
                        "start": "09:30",
                        "end": "10:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "CHEM 420",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "CS 421",
                      "time": {
                        "start": "12:30",
                        "end": "13:45"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "CS 444",
                      "time": {
                        "start": "15:30",
                        "end": "16:45"
                      },
                      "days": [
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "CWL 241",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "ENG 177",
                      "time": {
                        "start": "17:00",
                        "end": "17:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "GEOL 107",
                      "time": {
                        "start": "11:00",
                        "end": "11:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "NPRE 402",
                      "time": {
                        "start": "08:00",
                        "end": "08:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "PSYC 250",
                      "time": {
                        "start": "14:00",
                        "end": "15:20"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    }
                  ]
                },
                "2039": {
                  "sections": [
                    {
                      "course": "AE 100",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "CS 598",
                      "time": {
                        "start": "09:30",
                        "end": "10:45"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "ENG 111",
                      "time": {
                        "start": "16:00",
                        "end": "17:15"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "ENG 177",
                      "time": {
                        "start": "15:00",
                        "end": "15:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "GSD 102",
                      "time": {
                        "start": "14:00",
                        "end": "15:20"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "IS 515",
                      "time": {
                        "start": "09:30",
                        "end": "12:20"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "NPRE 100",
                      "time": {
                        "start": "15:30",
                        "end": "16:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "SOC 350",
                      "time": {
                        "start": "11:00",
                        "end": "11:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "STAT 199",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "TE 250",
                      "time": {
                        "start": "13:00",
                        "end": "14:50"
                      },
                      "days": [
                        "W"
                      ]
                    }
                  ]
                },
                "4039": {
                  "sections": [
                    {
                      "course": "AE 100",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "CWL 223",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "ECE 523",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "ECON 103",
                      "time": {
                        "start": "09:00",
                        "end": "09:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "ECON 103",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "ENG 110",
                      "time": {
                        "start": "09:00",
                        "end": "09:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "ENG 199",
                      "time": {
                        "start": "17:30",
                        "end": "18:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "ENG 411",
                      "time": {
                        "start": "19:00",
                        "end": "19:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "IE 527",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "IS 206",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "MSE 101",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "MSE 101",
                      "time": {
                        "start": "15:00",
                        "end": "15:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "NPRE 445",
                      "time": {
                        "start": "11:00",
                        "end": "12:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "NPRE 449",
                      "time": {
                        "start": "09:30",
                        "end": "10:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "NPRE 527",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "REL 223",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "SAME 223",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "SHS 271",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "SOC 225",
                      "time": {
                        "start": "12:30",
                        "end": "13:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "TE 110",
                      "time": {
                        "start": "09:00",
                        "end": "09:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    }
                  ]
                },
                "0036": {
                  "sections": [
                    {
                      "course": "AE 298",
                      "time": {
                        "start": "17:00",
                        "end": "17:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "ENG 100",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "ENG 100",
                      "time": {
                        "start": "11:00",
                        "end": "11:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "GSD 102",
                      "time": {
                        "start": "14:00",
                        "end": "15:20"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "08:00",
                        "end": "08:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "14:00",
                        "end": "15:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "08:00",
                        "end": "09:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "12:00",
                        "end": "13:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "14:00",
                        "end": "15:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "12:00",
                        "end": "13:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "12:00",
                        "end": "13:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 326",
                      "time": {
                        "start": "17:00",
                        "end": "17:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 326",
                      "time": {
                        "start": "18:00",
                        "end": "18:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 326",
                      "time": {
                        "start": "19:00",
                        "end": "19:50"
                      },
                      "days": [
                        "R"
                      ]
                    }
                  ]
                },
                "4029": {
                  "sections": [
                    {
                      "course": "AE 311",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "CS 124",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 124",
                      "time": {
                        "start": "11:00",
                        "end": "11:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 124",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 124",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 124",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 124",
                      "time": {
                        "start": "17:00",
                        "end": "17:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 225",
                      "time": {
                        "start": "09:00",
                        "end": "10:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "CS 225",
                      "time": {
                        "start": "11:00",
                        "end": "12:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "CS 225",
                      "time": {
                        "start": "13:00",
                        "end": "14:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "CS 225",
                      "time": {
                        "start": "15:00",
                        "end": "16:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "CS 225",
                      "time": {
                        "start": "17:00",
                        "end": "18:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "GLBL 201",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "GLBL 201",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "IS 203",
                      "time": {
                        "start": "11:00",
                        "end": "11:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "MCB 300",
                      "time": {
                        "start": "09:00",
                        "end": "09:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "MCB 436",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "NPRE 201",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "NPRE 201",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "F"
                      ]
                    }
                  ]
                },
                "4025": {
                  "sections": [
                    {
                      "course": "AE 352",
                      "time": {
                        "start": "11:00",
                        "end": "11:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "ASRM 453",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "CS 124",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 124",
                      "time": {
                        "start": "11:00",
                        "end": "11:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 124",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 124",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 124",
                      "time": {
                        "start": "15:00",
                        "end": "15:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 124",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 124",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 124",
                      "time": {
                        "start": "17:00",
                        "end": "17:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 225",
                      "time": {
                        "start": "09:00",
                        "end": "10:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "CS 225",
                      "time": {
                        "start": "11:00",
                        "end": "12:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "CS 225",
                      "time": {
                        "start": "13:00",
                        "end": "14:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "CS 225",
                      "time": {
                        "start": "15:00",
                        "end": "16:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "CS 225",
                      "time": {
                        "start": "17:00",
                        "end": "18:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "HIST 199",
                      "time": {
                        "start": "15:00",
                        "end": "16:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "LING 300",
                      "time": {
                        "start": "08:30",
                        "end": "09:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "ME 340",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "SHS 300",
                      "time": {
                        "start": "08:30",
                        "end": "09:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "SHS 593",
                      "time": {
                        "start": "08:30",
                        "end": "09:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "SOC 479",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "STAT 431",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    }
                  ]
                },
                "3018": {
                  "sections": [
                    {
                      "course": "AE 504",
                      "time": {
                        "start": "13:00",
                        "end": "14:20"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "CS 101",
                      "time": {
                        "start": "15:00",
                        "end": "16:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 571",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "ENG 101",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "ENG 199",
                      "time": {
                        "start": "17:30",
                        "end": "18:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "GLBL 481",
                      "time": {
                        "start": "11:00",
                        "end": "12:20"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "IS 101",
                      "time": {
                        "start": "09:00",
                        "end": "10:20"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "MATH 580",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "MUS 132",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "NPRE 481",
                      "time": {
                        "start": "11:00",
                        "end": "12:20"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "NPRE 501",
                      "time": {
                        "start": "09:00",
                        "end": "10:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "NPRE 598",
                      "time": {
                        "start": "09:00",
                        "end": "10:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "15:00",
                        "end": "15:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "16:00",
                        "end": "17:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "STAT 443",
                      "time": {
                        "start": "15:00",
                        "end": "15:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    }
                  ]
                },
                "2035": {
                  "sections": [
                    {
                      "course": "AE 590",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "ENG 101",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "MCB 408",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "ME 200",
                      "time": {
                        "start": "08:00",
                        "end": "08:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "ME 200",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "ME 470",
                      "time": {
                        "start": "08:00",
                        "end": "09:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHIL 101",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "SE 100",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "SE 101",
                      "time": {
                        "start": "11:00",
                        "end": "11:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "SE 261",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    }
                  ]
                },
                "0035": {
                  "sections": [
                    {
                      "course": "ANTH 103",
                      "time": {
                        "start": "11:00",
                        "end": "11:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "CS 233",
                      "time": {
                        "start": "09:00",
                        "end": "10:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "CS 357",
                      "time": {
                        "start": "11:00",
                        "end": "12:15"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "CS 409",
                      "time": {
                        "start": "14:00",
                        "end": "15:20"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "FSHN 343",
                      "time": {
                        "start": "15:30",
                        "end": "17:10"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "HIST 170",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "HIST 171",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "HK 353",
                      "time": {
                        "start": "09:00",
                        "end": "09:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "MATH 241",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "MATH 357",
                      "time": {
                        "start": "11:00",
                        "end": "12:15"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "MATH 463",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "MCB 461",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "NEUR 461",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "STAT 207",
                      "time": {
                        "start": "12:30",
                        "end": "13:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "STAT 400",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    }
                  ]
                },
                "1035": {
                  "sections": [
                    {
                      "course": "ASRM 402",
                      "time": {
                        "start": "09:30",
                        "end": "10:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "CS 101",
                      "time": {
                        "start": "15:00",
                        "end": "16:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "CS 598",
                      "time": {
                        "start": "12:30",
                        "end": "13:45"
                      },
                      "days": [
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "EALC 365",
                      "time": {
                        "start": "10:00",
                        "end": "12:20"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "ENG 111",
                      "time": {
                        "start": "11:00",
                        "end": "12:20"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "ENG 111",
                      "time": {
                        "start": "16:00",
                        "end": "17:15"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "ENG 199",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "MATH 463",
                      "time": {
                        "start": "11:00",
                        "end": "12:20"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "NPRE 321",
                      "time": {
                        "start": "15:00",
                        "end": "15:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "NPRE 498",
                      "time": {
                        "start": "12:30",
                        "end": "13:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "STAT 400",
                      "time": {
                        "start": "11:00",
                        "end": "12:20"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "STAT 409",
                      "time": {
                        "start": "09:30",
                        "end": "10:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "TE 567",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "R"
                      ]
                    }
                  ]
                },
                "3025": {
                  "sections": [
                    {
                      "course": "BIOE 120",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "BIOE 450",
                      "time": {
                        "start": "12:30",
                        "end": "13:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "CS 514",
                      "time": {
                        "start": "09:30",
                        "end": "10:45"
                      },
                      "days": [
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "CS 598",
                      "time": {
                        "start": "15:30",
                        "end": "16:45"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "ENG 111",
                      "time": {
                        "start": "11:00",
                        "end": "12:20"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "GSD 102",
                      "time": {
                        "start": "14:00",
                        "end": "15:20"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "IE 523",
                      "time": {
                        "start": "15:00",
                        "end": "16:20"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "MATH 446",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "MSE 494",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "NPRE 200",
                      "time": {
                        "start": "09:30",
                        "end": "10:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "SHS 271",
                      "time": {
                        "start": "11:00",
                        "end": "11:50"
                      },
                      "days": [
                        "M"
                      ]
                    }
                  ]
                },
                "0018": {
                  "sections": [
                    {
                      "course": "BIOE 505",
                      "time": {
                        "start": "14:00",
                        "end": "15:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "CS 591",
                      "time": {
                        "start": "12:30",
                        "end": "13:45"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "CSE 505",
                      "time": {
                        "start": "14:00",
                        "end": "15:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "ENG 100",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "ENG 100",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "ENG 100",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "ENG 100",
                      "time": {
                        "start": "15:00",
                        "end": "15:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "ENG 101",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "ENG 177",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "ENG 199",
                      "time": {
                        "start": "17:30",
                        "end": "18:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "ENG 199",
                      "time": {
                        "start": "19:00",
                        "end": "20:20"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "ENG 199",
                      "time": {
                        "start": "19:00",
                        "end": "20:20"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "ENG 491",
                      "time": {
                        "start": "09:00",
                        "end": "09:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "IE 360",
                      "time": {
                        "start": "16:00",
                        "end": "17:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "IE 360",
                      "time": {
                        "start": "16:00",
                        "end": "17:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "INFO 500",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "11:00",
                        "end": "11:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "08:00",
                        "end": "09:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "12:00",
                        "end": "13:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "14:00",
                        "end": "15:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "08:00",
                        "end": "09:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 436",
                      "time": {
                        "start": "18:00",
                        "end": "18:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 486",
                      "time": {
                        "start": "18:00",
                        "end": "19:20"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 486",
                      "time": {
                        "start": "19:30",
                        "end": "20:50"
                      },
                      "days": [
                        "R"
                      ]
                    }
                  ]
                },
                "2018": {
                  "sections": [
                    {
                      "course": "BIOE 570",
                      "time": {
                        "start": "09:00",
                        "end": "10:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "CS 465",
                      "time": {
                        "start": "11:00",
                        "end": "12:20"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "CWL 272",
                      "time": {
                        "start": "12:00",
                        "end": "13:20"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "ENG 101",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "ENG 199",
                      "time": {
                        "start": "17:00",
                        "end": "18:20"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "GER 270",
                      "time": {
                        "start": "12:00",
                        "end": "13:20"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "GWS 270",
                      "time": {
                        "start": "12:00",
                        "end": "13:20"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "INFO 310",
                      "time": {
                        "start": "13:30",
                        "end": "14:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "IS 310",
                      "time": {
                        "start": "13:30",
                        "end": "14:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "ME 586",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "MUS 132",
                      "time": {
                        "start": "08:00",
                        "end": "08:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "NPRE 330",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "NPRE 432",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "15:00",
                        "end": "15:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "16:00",
                        "end": "17:50"
                      },
                      "days": [
                        "R"
                      ]
                    }
                  ]
                },
                "3039": {
                  "sections": [
                    {
                      "course": "CEE 190",
                      "time": {
                        "start": "15:00",
                        "end": "16:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "CHEM 232",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "CS 173",
                      "time": {
                        "start": "09:30",
                        "end": "10:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "CS 173",
                      "time": {
                        "start": "14:00",
                        "end": "15:15"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "CS 173",
                      "time": {
                        "start": "12:30",
                        "end": "13:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "CS 421",
                      "time": {
                        "start": "15:30",
                        "end": "16:45"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "MATH 241",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "MATH 241",
                      "time": {
                        "start": "11:00",
                        "end": "11:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "MATH 257",
                      "time": {
                        "start": "09:00",
                        "end": "09:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "MATH 257",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "MATH 257",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "STAT 207",
                      "time": {
                        "start": "11:00",
                        "end": "12:20"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    }
                  ]
                },
                "0027/1025": {
                  "sections": [
                    {
                      "course": "CHEM 232",
                      "time": {
                        "start": "08:00",
                        "end": "08:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "CS 222",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "CS 341",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "CS 374",
                      "time": {
                        "start": "11:00",
                        "end": "12:15"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "CS 374",
                      "time": {
                        "start": "12:30",
                        "end": "13:45"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "CS 411",
                      "time": {
                        "start": "14:00",
                        "end": "15:20"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "CS 425",
                      "time": {
                        "start": "14:00",
                        "end": "15:15"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "CS 440",
                      "time": {
                        "start": "09:00",
                        "end": "09:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "ECE 374",
                      "time": {
                        "start": "11:00",
                        "end": "12:15"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "ECE 374",
                      "time": {
                        "start": "12:30",
                        "end": "13:45"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "ECE 428",
                      "time": {
                        "start": "14:00",
                        "end": "15:15"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "ECE 448",
                      "time": {
                        "start": "09:00",
                        "end": "09:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "ME 170",
                      "time": {
                        "start": "08:00",
                        "end": "08:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "ME 290",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHIL 110",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "REL 110",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "TAM 210",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "TAM 210",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "TAM 211",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "TAM 211",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    }
                  ]
                },
                "1038": {
                  "sections": [
                    {
                      "course": "CS 101",
                      "time": {
                        "start": "13:00",
                        "end": "14:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "CS 101",
                      "time": {
                        "start": "15:00",
                        "end": "16:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "CS 101",
                      "time": {
                        "start": "09:00",
                        "end": "10:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 101",
                      "time": {
                        "start": "13:00",
                        "end": "14:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "CS 101",
                      "time": {
                        "start": "09:00",
                        "end": "10:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "CS 101",
                      "time": {
                        "start": "15:00",
                        "end": "16:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "ENG 199",
                      "time": {
                        "start": "18:00",
                        "end": "19:30"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "FAA 110",
                      "time": {
                        "start": "10:00",
                        "end": "11:20"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "IS 308",
                      "time": {
                        "start": "09:00",
                        "end": "09:50"
                      },
                      "days": [
                        "M",
                        "W",
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "17:00",
                        "end": "17:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "17:00",
                        "end": "17:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "12:00",
                        "end": "13:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "14:00",
                        "end": "15:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "16:00",
                        "end": "17:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 213",
                      "time": {
                        "start": "12:00",
                        "end": "13:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 213",
                      "time": {
                        "start": "14:00",
                        "end": "15:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 213",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 213",
                      "time": {
                        "start": "12:00",
                        "end": "13:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 436",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 575",
                      "time": {
                        "start": "11:30",
                        "end": "12:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    }
                  ]
                },
                "2036": {
                  "sections": [
                    {
                      "course": "CS 101",
                      "time": {
                        "start": "11:00",
                        "end": "12:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "CS 101",
                      "time": {
                        "start": "11:00",
                        "end": "12:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "CS 101",
                      "time": {
                        "start": "09:00",
                        "end": "10:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "CS 101",
                      "time": {
                        "start": "11:00",
                        "end": "12:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "CS 101",
                      "time": {
                        "start": "13:00",
                        "end": "14:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "ENG 100",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "ENG 100",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "M",
                        "W"
                      ]
                    },
                    {
                      "course": "ENG 199",
                      "time": {
                        "start": "16:00",
                        "end": "17:20"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "ENG 199",
                      "time": {
                        "start": "17:30",
                        "end": "18:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "ENG 199",
                      "time": {
                        "start": "17:30",
                        "end": "18:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "ENG 199",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "IS 515",
                      "time": {
                        "start": "15:00",
                        "end": "17:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "14:00",
                        "end": "15:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "08:00",
                        "end": "09:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "08:00",
                        "end": "09:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "STAT 199",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "W"
                      ]
                    }
                  ]
                },
                "2025": {
                  "sections": [
                    {
                      "course": "ENG 100",
                      "time": {
                        "start": "15:00",
                        "end": "15:50"
                      },
                      "days": [
                        "T",
                        "R"
                      ]
                    },
                    {
                      "course": "ENG 177",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "LAS 399",
                      "time": {
                        "start": "15:00",
                        "end": "16:20"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "LAS 399",
                      "time": {
                        "start": "17:00",
                        "end": "18:20"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "08:00",
                        "end": "08:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "09:00",
                        "end": "09:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "15:00",
                        "end": "15:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "08:00",
                        "end": "08:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "09:00",
                        "end": "09:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "10:00",
                        "end": "10:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "11:00",
                        "end": "11:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "12:00",
                        "end": "12:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "13:00",
                        "end": "13:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 100",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "16:00",
                        "end": "17:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "08:00",
                        "end": "09:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "12:00",
                        "end": "13:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 213",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 222",
                      "time": {
                        "start": "17:00",
                        "end": "18:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 436",
                      "time": {
                        "start": "17:00",
                        "end": "17:50"
                      },
                      "days": [
                        "T"
                      ]
                    }
                  ]
                },
                "4035": {
                  "sections": [
                    {
                      "course": "GS 101",
                      "time": {
                        "start": "14:00",
                        "end": "14:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "08:00",
                        "end": "09:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "12:00",
                        "end": "13:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "14:00",
                        "end": "15:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "16:00",
                        "end": "17:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "08:00",
                        "end": "09:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "12:00",
                        "end": "13:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "14:00",
                        "end": "15:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "16:00",
                        "end": "17:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "08:00",
                        "end": "09:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "12:00",
                        "end": "13:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "14:00",
                        "end": "15:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "16:00",
                        "end": "17:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "08:00",
                        "end": "09:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "12:00",
                        "end": "13:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "14:00",
                        "end": "15:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 211",
                      "time": {
                        "start": "16:00",
                        "end": "17:50"
                      },
                      "days": [
                        "F"
                      ]
                    }
                  ]
                },
                "4031": {
                  "sections": [
                    {
                      "course": "IS 445",
                      "time": {
                        "start": "12:00",
                        "end": "14:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "08:00",
                        "end": "09:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "12:00",
                        "end": "13:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "14:00",
                        "end": "15:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "16:00",
                        "end": "17:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "08:00",
                        "end": "09:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "12:00",
                        "end": "13:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "14:00",
                        "end": "15:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "16:00",
                        "end": "17:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "08:00",
                        "end": "09:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "10:00",
                        "end": "11:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "12:00",
                        "end": "13:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "14:00",
                        "end": "15:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 212",
                      "time": {
                        "start": "16:00",
                        "end": "17:50"
                      },
                      "days": [
                        "R"
                      ]
                    }
                  ]
                },
                "4036": {
                  "sections": [
                    {
                      "course": "LAS 399",
                      "time": {
                        "start": "09:00",
                        "end": "10:20"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "LAS 399",
                      "time": {
                        "start": "11:00",
                        "end": "12:20"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "08:00",
                        "end": "09:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "12:00",
                        "end": "13:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "14:00",
                        "end": "15:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "16:00",
                        "end": "17:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "12:00",
                        "end": "13:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "08:00",
                        "end": "10:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "14:00",
                        "end": "16:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "17:00",
                        "end": "19:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "08:00",
                        "end": "10:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "11:00",
                        "end": "13:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "14:00",
                        "end": "16:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "17:00",
                        "end": "19:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "08:00",
                        "end": "10:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "11:00",
                        "end": "13:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 102",
                      "time": {
                        "start": "14:00",
                        "end": "16:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 435",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "PHYS 435",
                      "time": {
                        "start": "17:00",
                        "end": "17:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "PHYS 435",
                      "time": {
                        "start": "18:00",
                        "end": "18:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "PHYS 435",
                      "time": {
                        "start": "19:00",
                        "end": "19:50"
                      },
                      "days": [
                        "M"
                      ]
                    }
                  ]
                },
                "4018": {
                  "sections": [
                    {
                      "course": "LAS 399",
                      "time": {
                        "start": "13:00",
                        "end": "14:20"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "08:00",
                        "end": "10:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "11:00",
                        "end": "13:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "14:00",
                        "end": "16:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "17:00",
                        "end": "19:50"
                      },
                      "days": [
                        "T"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "08:00",
                        "end": "10:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "11:00",
                        "end": "13:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "14:00",
                        "end": "16:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "17:00",
                        "end": "19:50"
                      },
                      "days": [
                        "W"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "08:00",
                        "end": "10:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "11:00",
                        "end": "13:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "14:00",
                        "end": "16:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "17:00",
                        "end": "19:50"
                      },
                      "days": [
                        "R"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "08:00",
                        "end": "10:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "11:00",
                        "end": "13:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 101",
                      "time": {
                        "start": "14:00",
                        "end": "16:50"
                      },
                      "days": [
                        "F"
                      ]
                    },
                    {
                      "course": "PHYS 325",
                      "time": {
                        "start": "15:00",
                        "end": "15:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "PHYS 325",
                      "time": {
                        "start": "16:00",
                        "end": "16:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "PHYS 325",
                      "time": {
                        "start": "17:00",
                        "end": "17:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "PHYS 325",
                      "time": {
                        "start": "18:00",
                        "end": "18:50"
                      },
                      "days": [
                        "M"
                      ]
                    },
                    {
                      "course": "PHYS 325",
                      "time": {
                        "start": "19:00",
                        "end": "19:50"
                      },
                      "days": [
                        "M"
                      ]
                    }
                  ]
                }
            }}
        />
    );
}