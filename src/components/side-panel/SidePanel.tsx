import cn from 'classnames';
import { useState } from 'react';
import { RiSidebarFoldLine, RiSidebarUnfoldLine } from 'react-icons/ri';

export default function SidePanel() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={cn('flex flex-col h-screen bg-black', {
        'w-[400px]': open,
        'w-[40px]': !open,
      })}
    >
      <header className="flex justify-between items-center pl-2 pt-5 pr-2 pb-6">
        <h2 className={cn({ hidden: !open })}>Console</h2>
        {open ? (
          <button
            onClick={() => setOpen(false)}
            className="bg-transparent border-none p-1"
          >
            <RiSidebarFoldLine color="#b4b8bb" />
          </button>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="bg-transparent border-none p-1"
          >
            <RiSidebarUnfoldLine color="#b4b8bb" />
          </button>
        )}
      </header>
    </div>
  );
}
