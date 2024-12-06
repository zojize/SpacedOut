import { Drawer } from 'vaul';
import { DatePickerView, Picker, PickerView } from 'antd-mobile';
import './time-picker.css';
import { useState } from 'react';

const timeColumns: { label: string; value: string }[][] = [
  Array.from({ length: 13 }, (_, i) => ({
    label: `${i}`.padStart(2, '0'),
    value: `${i}`.padStart(2, '0'),
  })),
  [
    { label: '00', value: '00' },
    { label: '15', value: '15' },
    { label: '30', value: '30' },
    { label: '45', value: '45' },
  ],
  [
    { label: 'AM', value: 'AM' },
    { label: 'PM', value: 'PM' },
  ],
];

export const MyTimePicker: React.FC<{
  open: boolean;
  onOpenChange: (v: boolean) => void;
  time: string | null;
  setTime: (v: string) => void;
}> = ({ open, onOpenChange, time, setTime }) => {
  const splittedTime = time?.split(':')!;
  const timeAsColumns = time
    ? [
        splittedTime[0] > '12' ? `${+splittedTime[0] - 12}`.padStart(2, '0') : splittedTime[0],
        splittedTime[1],
        splittedTime[0] > '12' ? 'PM' : 'AM',
      ]
    : ['08', '00', 'AM'];
  return (
    <Drawer.NestedRoot open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Title>
          <b>Select Time</b>
        </Drawer.Title>
        <Drawer.Overlay
          className="fixed inset-0 bg-black/40"
          onClick={() => onOpenChange(false)}
        />
        <Drawer.Content
          className="bg-white flex flex-col rounded-t-[10px] lg:h-[327px] h-[40%] mt-24 max-h-[94%] fixed bottom-0 left-0 right-0"
          data-vaul-no-drag
        >
          <PickerView
            mouseWheel
            columns={timeColumns}
            className="mt-4 bg-transparent h-[80%]"
            defaultValue={timeAsColumns}
            value={timeAsColumns}
            style={{
              // @ts-expect-error
              '--adm-color-background': '#0000',
            }}
            onChange={(v) => {
              setTime(
                `${+v![0]! + (+(v[2] === 'PM') && 12)}`.padStart(2, '0') +
                  `:${v[1]}`,
              );
            }}
          />
          <div className="z-100 absolute w-full mt-4 grid grid-cols-3 gap-4 text-center bg-gradient-to-b from-white via-white">
            <h1 className="text-lg font-bold">Hour</h1>
            <h1 className="text-lg font-bold">Minute</h1>
            <h1 className="text-lg font-bold">AM/PM</h1>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.NestedRoot>
  );
};
