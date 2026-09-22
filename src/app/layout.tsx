import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Lato } from 'next/font/google';

import '@/app/globals.css';

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
    variable: '--font-lato'
});

export const metadata: Metadata = {
    title: 'Francesco Martucci | Wood-Fired Pizza · Wynwood, Miami',
    description:
        "Taste pizza from the world's #1 pizzeria: long-fermented, wood-fired Neapolitan pizza in the heart of Wynwood, Miami. Reserve your table tonight.",
    icons: {
        icon: '/favicon-32.jpg',
        apple: '/favicon-256.jpg'
    },
    openGraph: {
        title: 'Francesco Martucci | Wood-Fired Pizza · Wynwood, Miami',
        description:
            "Taste pizza from the world's #1 pizzeria: long-fermented, wood-fired Neapolitan pizza in the heart of Wynwood, Miami. Reserve your table tonight.",
        images: [
            '/images/cdn/pizza-smoking.jpg'
        ],
        type: 'website'
    }
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html lang='en' className='scroll-smooth'>
            <body className={`${lato.variable} martucci-body overscroll-none antialiased`}>{children}</body>
        </html>
    );
};

export default Layout;
