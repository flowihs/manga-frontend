"use client";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="MainLayoutContentContainer">
                { children }
            </main>
        </>
    );
}