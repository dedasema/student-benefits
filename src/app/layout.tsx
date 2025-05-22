import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Head from 'next/head';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Beneficios Tecnológicos para Estudiantes UAGRM',
  description: 'Descubre herramientas y recursos gratuitos o con descuento para estudiantes universitarios.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <Head>
        <link rel="icon" href="/logo_ficct.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/logo_ficct.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo_ficct.png" />
      </Head>
      <body
        className={cn(
          `${roboto.variable} font-sans antialiased`,
          'min-h-screen bg-background text-foreground'
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
