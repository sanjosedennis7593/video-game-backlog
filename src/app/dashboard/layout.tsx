import Navigation from '@/app/_components/menu/navigation';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="bg-base-200">
            <Navigation>
            {children}
            </Navigation>
        </main>
    )
}
