import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Script from 'next/script';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Beneficios Tecnológicos para Estudiantes UAGRM',
  description: 'Descubre herramientas y recursos gratuitos o con descuento para estudiantes universitarios.',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={cn(
          `${roboto.variable} font-sans antialiased`,
          'min-h-screen bg-background text-foreground'
        )}
      >
        {children}
        <Toaster />
        <Script
          defer  
          src='https://static.cloudflareinsights.com/beacon.min.js' 
          data-cf-beacon='{"token": "dabbe8151bb048cf95c9a0f408ff1256"}'
          />
      </body>
    </html>
  );
}
