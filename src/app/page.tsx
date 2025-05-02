'use client';

import { BenefitCard } from '@/components/benefit-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits, recommendations } from '@/data/benefits';
import { CheckCircle, Info, GraduationCap } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

// Register SplitText plugin if it's not already registered
// Handle potential multiple registrations gracefully if needed, though typically done once.
if (typeof window !== 'undefined') {
  try {
    gsap.registerPlugin(SplitText);
  } catch (e) {
    console.warn("GSAP SplitText plugin already registered or error during registration:", e);
  }
}


export default function Home() {
  const freeBenefits = benefits.filter((b) => b.type === 'free');
  const discountedBenefits = benefits.filter((b) => b.type === 'discounted');

  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const [compilationDate, setCompilationDate] = useState<string | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null); // Ref for the heading element

  useEffect(() => {
    const now = new Date();
    setCurrentYear(now.getFullYear());
    // Set compilation date (replace with actual date if dynamic)
    setCompilationDate('Mayo 2024'); // Example: Static date
  }, []);

  useEffect(() => {
    // GSAP SplitText Animation for heading
    if (headingRef.current && typeof SplitText !== 'undefined') {
      // Split by words first, then characters within words
      const split = new SplitText(headingRef.current, {
        type: 'words,chars', // Split into words and characters
        wordsClass: 'split-word inline-block mr-[0.15em]', // Add classes for styling/targeting words. Add margin for spacing.
        charsClass: 'split-char inline-block', // Add class for targeting characters
      });

      // Ensure words stay on the same line if possible by adjusting parent style if needed
      // In most cases, the browser handles this based on container width.
      // The `inline-block` on words helps.

      gsap.from(split.chars, { // Target the characters for animation
        duration: 0.6,
        opacity: 0,
        y: 30, // Start slightly lower
        ease: 'power3.out',
        stagger: 0.03, // Stagger character animation
      });

      // Cleanup function to revert the split text on component unmount
      return () => {
        if (split.revert) { // Check if revert method exists
           split.revert();
        }
      };
    }
  }, []); // Run only once on mount

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Animation variants for the container (staggering children)
  const containerVariants = {
    hidden: { opacity: 1 }, // Start with container visible
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger animation of children
      },
    },
  };


  const heroParagraphVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay: 1.0 }, // Delay after heading finishes
    },
  };

  const headingText = 'Beneficios Tecnológicos para Estudiantes UAGRM';

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
          {/* Navigation links can be added here if needed */}
        </div>
      </header>

      <main className="flex-1 container max-w-screen-lg mx-auto py-12 px-4 md:px-8">
        <section
          className="text-center mb-16 overflow-hidden" // Added overflow-hidden to contain character animations
        >
           {/* Heading with GSAP SplitText applied via ref */}
          <h1
            ref={headingRef} // Add ref here
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight
                       bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent
                       drop-shadow-[0_2px_6px_rgba(0,128,128,0.4)] leading-tight md:leading-tight lg:leading-tight" // Ensure tight leading
            // Render the plain text; GSAP will structure it
          >
            {headingText}
          </h1>
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
            variants={heroParagraphVariants} // Apply separate variants to paragraph
            initial="hidden" // Start hidden
            animate="visible" // Animate to visible
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
            viewport={{ once: true, amount: 0.1 }} // Trigger animation when 10% of the grid is visible
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
        <div className="container max-w-screen-lg flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left px-4 md:px-8">
          <p className="text-xs leading-relaxed">
            {compilationDate
              ? `Información recopilada en ${compilationDate}. `
              : 'Cargando fecha... '}
            Verifica siempre los términos actuales en los sitios oficiales de
            cada proveedor.
          </p>
          <p className="text-xs">
            &copy; {currentYear ?? '...'} UAGRM Tech Hub. Un recurso no oficial.
          </p>
        </div>
      </footer>
    </div>
  );
}
