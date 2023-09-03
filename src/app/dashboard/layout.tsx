'use client'
import Navigation from '@/app/_components/menu/navigation';
import WithAuth from '@/app/_components/routes/protected';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {



    return (
        <main className="bg-base-200">
            <WithAuth>
                <Navigation>
                    {children}
                </Navigation>
            </WithAuth>

        </main>
    )
}
