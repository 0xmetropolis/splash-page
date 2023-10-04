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
        <footer className="site-footer">
          <p>
            <strong>@0xMetropolis:</strong> new podcast episode w/<span className="underline">@steveklbnf</span> just
            dropped + all things Party Protocol (we love <span className="underline">@prtydao</span>) + using existing
            tools vs building in-house + designing modular contracts + protocol upgradability
          </p>
        </footer>
      </body>
    </html>
  );
}
