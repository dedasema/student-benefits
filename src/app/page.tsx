'use client'; // Add this directive to mark the component as a Client Component

import { BenefitCard } from '@/components/benefit-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits, recommendations } from '@/data/benefits';
import { CheckCircle, Info, GraduationCap } from 'lucide-react'; // Changed icon to GraduationCap for logo
import Image from 'next/image';
import { useState, useEffect } from 'react'; // Import useState and useEffect

export default function Home() {
  const freeBenefits = benefits.filter((b) => b.type === 'free');
  const discountedBenefits = benefits.filter((b) => b.type === 'discounted');

  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const [compilationDate, setCompilationDate] = useState<string | null>(null);

  useEffect(() => {
    // Set date-related state only on the client-side
    const now = new Date();
    setCurrentYear(now.getFullYear());
    // Use a fixed date as per the original footer text example
    setCompilationDate('Mayo 2024'); // Adjusted year to current reality
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-lg items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-7 w-7 text-primary" />
            <span className="font-bold text-xl text-foreground">UAGRM Tech Hub</span>
          </div>
           {/* Navigation links can be added here if needed */}
        </div>
      </header>

      <main className="flex-1 container max-w-screen-lg mx-auto py-12 px-4 md:px-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Beneficios Tecnológicos para Estudiantes UAGRM
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Descubre las herramientas y recursos gratuitos o con descuento
            disponibles para potenciar tu aprendizaje y desarrollo profesional
            como estudiante de la Universidad Autónoma Gabriel René Moreno.
          </p>
          <div className="aspect-video w-full max-w-4xl mx-auto">
             <Image
               src={`https://picsum.photos/1200/675`} // Aspect ratio 16:9
               alt="Estudiantes universitarios usando tecnología en un entorno moderno"
               data-ai-hint="students technology learning modern university"
               width={1200}
               height={675}
               className="rounded-lg shadow-lg object-cover w-full h-full"
               priority // Prioritize loading the hero image
            />
          </div>
        </section>

        {/* Free Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 pb-3 border-b-2 border-primary text-foreground">
            Beneficios Gratuitos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeBenefits.map((benefit) => (
              <BenefitCard key={benefit.id} benefit={benefit} />
            ))}
          </div>
        </section>

        {/* Discounted Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 pb-3 border-b-2 border-primary text-foreground">
            Beneficios con Descuentos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {discountedBenefits.map((benefit) => (
              <BenefitCard key={benefit.id} benefit={benefit} />
            ))}
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="mb-16">
          <Card className="bg-card border-border shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-secondary/30 p-4">
              <CardTitle className="text-xl flex items-center gap-2 text-foreground font-semibold">
                <Info className="h-5 w-5 text-primary" />
                Recomendaciones Clave
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span className="text-card-foreground text-sm">{rec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="py-6 md:py-8 border-t border-border/40 bg-secondary/30 text-muted-foreground">
        <div className="container max-w-screen-lg flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left px-4 md:px-8">
          <p className="text-xs leading-relaxed">
            {compilationDate ? `Información recopilada en ${compilationDate}. ` : 'Cargando fecha... '}
            Verifica siempre los términos actuales en los sitios oficiales de cada proveedor.
          </p>
          <p className="text-xs">
            &copy; {currentYear ?? '...'} UAGRM Tech Hub. Un recurso no oficial.
          </p>
        </div>
      </footer>
    </div>
  );
}
