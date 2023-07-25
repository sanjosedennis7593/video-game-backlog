import Link from 'next/link';

import Card from '@/app/_components/display/card';


export default function Profile() {
  return (
    <div className="min-h-screen mx-auto">
      <div className="mx-auto px-4 my-10 flex-shrink-0 w-full flex flex-col justify-center">
        {/* <div className="w-full">
        <h1 className="text-2xl">My Profile</h1>
        </div> */}

        <div className="flex justify-center">
          <div className="avatar online">
            <div className="w-36 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />

            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-5">
          <div className="text-2xl">Dennis San Jose</div>
          <div className="text-lg italic">Professional Gamer</div>
        </div>

        <div>
          <div className="flex justify-between py-5">
            <h1 className="text-4xl">Game Libraries</h1>

          </div>
          <div className="grid xs: grid-cols-1 gap-1 sm: grid-cols-1 gap-1 md:grid-cols-3 gap-4">
            <Card
              title={<Link href="/dashboard/games/edit/1">Elden Ring</Link>}
              description="Playstation 5"
              isBadgeVisible={true}
              badgeLabel="Unfinished"
              footerDesc="July 16, 2023"
            />
            <Card
              title={<Link href="/dashboard/games/edit/1">Legend of Zelda: Tears of the Kingdom</Link>}
              description="Nintendo Switch"
              isBadgeVisible={true}
              badgeLabel="Beaten"
              footerDesc="July 16, 2023"
            />
            <Card
              title={<Link href="/dashboard/games/edit/1">Hogwarts Legacy</Link>}
              description="Playstation 5"
              isBadgeVisible={true}
              badgeLabel="Completed"
              footerDesc="July 16, 2023"
            />
            <Card
              title={<Link href="/dashboard/games/edit/1">Ghost of Tsushima</Link>}
              description="Playstation 5"
              isBadgeVisible={true}
              badgeLabel="Unfinished"
              footerDesc="July 16, 2023"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
