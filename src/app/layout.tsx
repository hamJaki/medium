import { ReactNode } from 'react';
import Header from '../components/Header';
import './globals.css';

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <html lang="en">
        <body>
        <Header />
        <main>{children}</main>
        </body>
        </html>
    );
}
