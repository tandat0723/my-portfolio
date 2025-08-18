import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from '@/components/ui/theme-provider';

const Layout = ({ children }) => (
    <>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Header />
            {children}
            <Footer />
        </ThemeProvider>
    </>
);

export default Layout;
