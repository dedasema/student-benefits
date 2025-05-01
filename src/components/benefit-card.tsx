'use client';

import type { Benefit } from '@/data/benefits';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // Although used via `asChild`, it's good practice
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge'; // Import Badge

interface BenefitCardProps {
  benefit: Benefit;
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  const { Icon } = benefit;

  const renderDetailList = (title: string, items?: string[]) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="mt-4">
        <h4 className="font-semibold mb-2 text-foreground">{title}:</h4>
        <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground pl-2">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden bg-card shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out border border-border rounded-lg group">
      <CardHeader className="flex flex-row items-start gap-4 p-4 pb-2">
         <div className="flex-shrink-0 pt-1">
            <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
          </div>
        <div className='flex-grow'>
          <CardTitle className="text-base font-semibold text-foreground mb-1">{benefit.title}</CardTitle>
          <CardDescription className="text-xs text-muted-foreground line-clamp-2">
            {benefit.description}
          </CardDescription>
        </div>
      </CardHeader>
       <div className="relative aspect-video w-full overflow-hidden">
           <Image
              src={`https://picsum.photos/seed/${benefit.id}/400/225`} // 16:9 aspect ratio
              alt={`${benefit.title} illustration`}
              data-ai-hint={benefit.imageHint}
              width={400}
              height={225} // Adjusted for 16:9
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
           <Badge
             variant={benefit.type === 'free' ? 'default' : 'secondary'}
             className="absolute top-2 right-2 text-xs py-0.5 px-1.5 bg-opacity-80 backdrop-blur-sm"
            >
              {benefit.type === 'free' ? 'Gratis' : 'Descuento'}
          </Badge>
       </div>
      <CardContent className="p-4 flex-grow">
         {/* Maybe add 1-2 main benefits here for a quick glance? */}
         <ul className="space-y-1 text-xs text-muted-foreground list-disc list-inside pl-1 mt-2">
            {benefit.mainBenefits.slice(0, 2).map((item, index) => (
                 <li key={index} className='truncate'>{item.split(':')[0]}</li> // Show only the key part if long
            ))}
             {benefit.mainBenefits.length > 2 && <li className="text-primary font-medium">... y más</li>}
         </ul>
      </CardContent>
      <CardFooter className="p-4 pt-2 flex justify-between items-center bg-secondary/20 border-t border-border/50">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="text-primary hover:text-accent hover:bg-accent/10 text-xs px-2 py-1 h-auto">
              Ver detalles <ChevronRight className="ml-1 h-3 w-3" />
            </Button>
          </DialogTrigger>
          {/* Adjusted Dialog Content size and added ScrollArea */}
          <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col p-0">
             <DialogHeader className="p-6 pb-4 border-b border-border">
               <DialogTitle className="text-2xl flex items-center gap-3 font-bold text-foreground">
                  <Icon className="h-7 w-7 text-primary flex-shrink-0" aria-hidden="true" />
                  {benefit.title}
                  <Badge
                     variant={benefit.type === 'free' ? 'default' : 'secondary'}
                     className="ml-auto text-sm"
                   >
                     {benefit.type === 'free' ? 'Gratis' : 'Descuento'}
                  </Badge>
               </DialogTitle>
               <DialogDescription className="text-sm text-muted-foreground pt-1">
                 {benefit.description}
               </DialogDescription>
             </DialogHeader>
             <ScrollArea className="flex-grow overflow-y-auto px-6 pb-6">
                <div className="space-y-5 mt-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Beneficios Principales</h3>
                    <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground pl-2">
                      {benefit.mainBenefits.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {renderDetailList("Servicios Destacados", benefit.details?.services)}
                  {renderDetailList("Rutas de Aprendizaje", benefit.details?.learningPaths)}
                  {renderDetailList("Software Destacado", benefit.details?.software)}
                  {renderDetailList("Características Destacadas", benefit.details?.features)}
                  {renderDetailList("Aplicaciones Incluidas", benefit.details?.apps)}
                  {renderDetailList("Precios para Estudiantes", benefit.details?.pricing)}
                  {renderDetailList("Modelos de Acceso", benefit.details?.models)}
                  {renderDetailList("Áreas de Estudio", benefit.details?.areas)}
                  {renderDetailList("Cursos Destacados", benefit.details?.courses)}

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Requisitos UAGRM</h3>
                    <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground pl-2">
                      {benefit.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">¿Cómo acceder?</h3>
                    <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground pl-2">
                      {benefit.howToAccess.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ol>
                  </div>

                </div>
              </ScrollArea>
               <DialogFooter className="p-4 border-t border-border bg-secondary/20 sm:justify-between items-center">
                   <DialogClose asChild>
                      <Button type="button" variant="outline" size="sm">
                        Cerrar
                      </Button>
                    </DialogClose>
                  <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-accent">
                     <a href={benefit.link} target="_blank" rel="noopener noreferrer">
                       Ir al sitio oficial <ExternalLink className="ml-2 h-4 w-4" />
                     </a>
                  </Button>
               </DialogFooter>
          </DialogContent>
        </Dialog>

        <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-accent text-xs px-3 py-1 h-auto">
          <a href={benefit.link} target="_blank" rel="noopener noreferrer">
            Acceder <ExternalLink className="ml-1.5 h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

