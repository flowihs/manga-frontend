"use client";

import "./globals.css";
import "./layout.css";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="MainLayoutContentContainer">
                { children }
            </main>
        </>
    );
}