'use client';

import { BenefitCard } from '@/components/benefit-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits, recommendations } from '@/data/benefits';
import { CheckCircle, Info, GraduationCap } from 'lucide-react';
import { GitHubIcon } from '@/components/icons';
import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

// Constantes fuera del componente - no se recrean en cada render
const HEADING_TEXT = 'Beneficios Tecnológicos para Estudiantes UAGRM';
const COMPILATION_DATE = 'Mayo 2025';
const CURRENT_YEAR = new Date().getFullYear();

// Variants fuera del componente - mejor rendimiento
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const heroParagraphVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: 0.8 },
  },
};

export default function Home() {
  const freeBenefits = benefits.filter((b) => b.type === 'free');
  const discountedBenefits = benefits.filter((b) => b.type === 'discounted');

  const headingRef = useRef<HTMLHeadingElement>(null);
  const animationRef = useRef<{ split: any; ctx: gsap.Context } | null>(null);

  const initAnimation = useCallback(async () => {
    if (!headingRef.current) return;

    // Cargar SplitText dinámicamente
    const { SplitText } = await import('gsap/SplitText');
    gsap.registerPlugin(SplitText);

    // Variable para guardar el split
    let split: any = null;

    // Crear contexto GSAP para cleanup automático
    const ctx = gsap.context(() => {
      split = new SplitText(headingRef.current!, {
        type: 'words,chars',
        wordsClass: 'split-word inline-block mr-[0.15em]',
        charsClass: 'split-char inline-block',
      });

      gsap.set(headingRef.current!, { visibility: 'visible' });

      gsap.fromTo(
        split.chars,
        { y: 30, opacity: 0 },
        {
          duration: 0.6,
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          stagger: 0.03,
        }
      );
    }, headingRef);

    // Guardar referencias después de crear el contexto
    animationRef.current = { split, ctx };
  }, []);

  useEffect(() => {
    initAnimation();

    return () => {
      // Cleanup robusto
      if (animationRef.current) {
        animationRef.current.split?.revert?.();
        animationRef.current.ctx?.revert?.();
      }
    };
  }, [initAnimation]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-lg items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-7 w-7 text-primary" />
            <span className="font-bold text-lg text-foreground">
              UAGRM Tech Hub
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 container max-w-screen-lg mx-auto py-12 px-4 md:px-8">
        <section
          className="text-center mb-16 overflow-hidden"
        >
           {/* Heading with initial hidden state managed by visibility */}
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight
                       bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-primary
                       drop-shadow-[0_2px_6px_rgba(0,128,128,0.4)] leading-tight md:leading-snug lg:leading-tight"
            style={{ visibility: 'hidden' }}
          >
            {HEADING_TEXT}
          </h1>
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
            variants={heroParagraphVariants}
            initial="hidden"
            animate="visible"
          >
            Descubre las herramientas y recursos gratuitos o con descuento
            disponibles para potenciar tu aprendizaje y desarrollo profesional
            como estudiante de la Universidad Autónoma Gabriel René Moreno.
          </motion.p>
        </section>

        {/* Free Benefits Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-3 border-b-2 border-primary text-foreground">
            Beneficios Gratuitos
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {freeBenefits.map((benefit) => (
              <BenefitCard
                key={benefit.id}
                benefit={benefit}
                variants={cardVariants}
              />
            ))}
          </motion.div>
        </section>

        {/* Discounted Benefits Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-3 border-b-2 border-primary text-foreground">
            Beneficios con Descuentos
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {discountedBenefits.map((benefit) => (
              <BenefitCard
                key={benefit.id}
                benefit={benefit}
                variants={cardVariants}
              />
            ))}
          </motion.div>
        </section>

        {/* Recommendations Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-card border-border shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-secondary/30 p-4">
              <CardTitle className="text-lg flex items-center gap-2 text-foreground font-semibold">
                <Info className="h-5 w-5 text-primary" />
                Recomendaciones Clave
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-card-foreground text-sm">{rec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <footer className="py-6 md:py-8 border-t border-border/40 bg-secondary/30 text-muted-foreground">
        <div className="container mx-auto max-w-screen-lg flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left px-4 md:px-8">
          <p className="text-xs leading-relaxed w-full md:w-auto">
            Información recopilada en {COMPILATION_DATE}.{' '}
            Verifica siempre los términos actuales en los sitios oficiales de
            cada proveedor.
          </p>
          <p className="text-xs w-full md:w-auto text-center md:text-right">
            &copy; {CURRENT_YEAR} UAGRM Tech Hub. Un recurso no oficial. 
          </p>
        </div>
        <div className="container mx-auto max-w-screen-lg mt-4 text-center flex flex-col items-center gap-2">
          <p className="text-xs">
            Una iniciativa (vibecodeada) de <a href="https://dennis-sejas.vercel.app" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:text-accent transition-colors underline decoration-primary decoration-2 underline-offset-2">Dennis David Sejas Mamani</a>
          </p>
          <a
            href="https://github.com/dedasema/student-benefits"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Repositorio en GitHub"
            className="mt-1 inline-flex items-center justify-center hover:scale-110 transition-transform"
          >
            <span className="bg-white rounded-full p-1 shadow">
              <GitHubIcon className="w-6 h-6 text-black" />
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}
