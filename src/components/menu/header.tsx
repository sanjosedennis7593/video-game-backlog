import React from 'react';
import Link from 'next/link';

const Header = ({
    children,
}: {
    children: React.ReactNode
}) => {

    return <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar bg-base-300">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className="flex-1 px-2 mx-2 text-4xl">GameTrackr</div>
                <div className="flex-none hidden lg:block">
                    <ul className="menu menu-horizontal ">
                        {/* Navbar menu content here */}
                        <li className="mt-2"><Link className="text-lg" href="/dashboard/games">My Games</Link></li>
                        <li className="mt-2"><Link className="text-lg" href="/dashboard/achievements">Achievements</Link></li>
                        <li>
                            <div className="flex-none">

                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link href="/dashboard/profile" className="justify-between">
                                                Profile
                                            </Link>
                                        </li>
                                        <li><Link href="/dashboard/settings" >Settings</Link></li>
                                        <li><Link href="/" >Logout</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            {children}
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200">
                <li><Link className="mt-2" href="/dashboard/games">My Games</Link></li>
                <li><Link className="mt-2" href="/dashboard/achievements">Achievements</Link></li>
                <li>
                    <Link href="/dashboard/profile" className="justify-between mt-2">
                        Profile
                    </Link>
                </li>
                <li><Link className="mt-2" href="/dashboard/settings" >Settings</Link></li>
                <li><Link className="mt-2" href="/" >Logout</Link></li>

            </ul>

        </div>
    </div>
};

export default Header;