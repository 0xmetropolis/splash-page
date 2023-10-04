import './globals.css';
import { Inter } from 'next/font/google';
import SiteHeader from './header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Metropolis',
  description: ''
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
