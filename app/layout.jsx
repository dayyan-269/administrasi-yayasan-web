import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '500'],
});

export const metadata = {
  title: 'Web Administrasi Yayasan Bakti Luhur',
  description: 'web untuk administrasi Yayasan Bakti Luhur',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}
