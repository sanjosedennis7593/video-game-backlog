import Link from 'next/link';

import Card from '@/app/_components/display/card';


export default function Games() {
  return (
    <div className="min-h-screen mx-auto">
      {/* <h1 className="text-2xl">My Games</h1> */}
      <div className="flex flex-col">
        <div className="flex justify-between py-5">
          <h1 className="text-4xl">My Games</h1>
          <Link href="/dashboard/games/new" className="btn btn-primary">New Game</Link>
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
  )
}
