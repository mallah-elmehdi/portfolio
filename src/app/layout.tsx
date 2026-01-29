import { HOME_OG_IMAGE_URL } from '@/lib/constants';
import { mainFont } from '@/lib/fonts';
import type { Metadata } from 'next';

import '../styles/globals.css';
import { ChildrenType } from '@/types/common.type';

export const metadata: Metadata = {
    title: {
        template: '%s | el mehdi mallah',
        default: 'el mehdi mallah',
    },
    description: `A statically generated portfolio`,
    openGraph: {
        images: [HOME_OG_IMAGE_URL],
    },
};

export default function RootLayout({ children }: Readonly<ChildrenType>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
                <meta name="theme-color" content="#000" />
                <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            </head>
            <body className={mainFont.className}>{children}</body>
        </html>
    );
}
