import Providers from './providers';
import type { Metadata } from 'next';
import { Geist as Font } from 'next/font/google';
import { cn } from '@/lib/utils';

import './globals.css';

const font = Font({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn('font-sans', font.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
