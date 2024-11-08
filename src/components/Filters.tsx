'use client';

import { Filter } from 'lucide-react';
import { Drawer } from 'vaul';
import { Button } from './ui/button';

export function Filters() {
  return (
    // https://vaul.emilkowal.ski/
    <Drawer.Root direction="right">
      <Button
        className="absolute m-4 right-0 top-0 h-9 w-9 touch-none"
        variant="outline"
        asChild
      >
        <Drawer.Trigger>
          <Filter />
        </Drawer.Trigger>
      </Button>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="right-2 top-2 bottom-2 fixed z-10 outline-none w-[310px] flex"
          style={
            { '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties
          }
        >
          <div className="bg-zinc-50 h-full w-full grow p-5 flex flex-col rounded-[16px]">
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-2 text-zinc-900">
                Filters
              </Drawer.Title>
              <Drawer.Description className="text-zinc-600 mb-2">
                Filters go here
              </Drawer.Description>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
