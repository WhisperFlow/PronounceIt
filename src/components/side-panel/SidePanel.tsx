import cn from 'classnames';
import { useState } from 'react';

export default function SidePanel() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={cn('flex flex-col h-screen bg-black', {
        'w-[400px]': open,
        'w-[40px]': !open,
      })}
    >
      <header
        className="flex justify-between items-center pl-3 pt-5 pr-3 pb-6"
        style={{ width: 'calc(100% - 45px)' }}
      >
        <h2 className={cn({ hidden: !open })}>Console</h2>
        {open ? <button></button> : <button></button>}
      </header>
    </div>
  );
}
