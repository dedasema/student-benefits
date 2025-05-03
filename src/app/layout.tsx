import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Beneficios Tecnológicos para Estudiantes UAGRM',
  description: 'Descubre herramientas y recursos gratuitos o con descuento para estudiantes universitarios.',
  icons: {
    icon: '/logo_ficct.png' // Asegúrate de que este archivo exista en la carpeta public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      {/* Ensure dark class is on html */}
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
