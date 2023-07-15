import Header from '@/components/menu/header';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="bg-base-200">
            <Header />
            {children}
        </main>
    )
}
