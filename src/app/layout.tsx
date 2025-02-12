import type { Metadata } from 'next';
import Header from '@/components/Header';
import LocalStorageCartProvider from '@/services/CartProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mobile Phone Catalog',
  description: 'Zara Challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LocalStorageCartProvider>
          <Header />
          {children}
        </LocalStorageCartProvider>
      </body>
    </html>
  );
}
