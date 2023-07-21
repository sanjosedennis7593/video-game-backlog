'use client'
import { useState } from 'react';

import AccountDetails from './components/account_details';
import ChangePassword from './components/change_password';

export default function Settings() {
  const [tabIndex, setTabIndex] = useState<number>(1);

  return (
    <div className="min-h-screen mx-auto">
      {/* <h1 className="text-2xl">My Games</h1> */}
      <div className="flex flex-col">
        <div className="flex justify-between py-5">
          <h1 className="text-4xl">My Settings</h1>

        </div>
        <div className="grid xs: grid-cols-1 gap-1 sm: grid-cols-1 gap-1 md:grid-cols-3 gap-4">
          <div className="tabs">
            <a onClick={() => {
              setTabIndex(1);
            }} className={`tab tab-bordered ${tabIndex === 1 && 'tab-active'}`}>Account Details</a>
            <a onClick={() => {
              setTabIndex(2);
            }} className={`tab tab-bordered ${tabIndex === 2 && 'tab-active'}`}>Change Password</a>
          </div>

        </div>

        
        <div className="w-full">
            {tabIndex === 1 && <AccountDetails />}
            {tabIndex === 2 && <ChangePassword />}
          </div>
      </div>
    </div>

  )
}
