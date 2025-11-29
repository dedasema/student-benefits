import type { LucideIcon } from 'lucide-react';
import {
  GitHubIcon,
  AzureIcon,
  AWSIcon,
  JetBrainsIcon,
  AutodeskIcon,
  FigmaIcon,
  MongoDBIcon,
  UnityIcon,
  AdobeIcon,
  TableauIcon,
  CourseraIcon,
  CamScannerIcon,
  PlatziIcon,
  EdTeamIcon,
  CursorIcon,
  WindsurfIcon,
  SpotifyIcon,
  AppleMusicIcon,
  YouTubeMusicIcon,
  AudibleIcon,
  GrammarlyIcon
} from '@/components/icons'; // Import custom icons

export interface Benefit {
  id: string;
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>> | LucideIcon;
  imageHint: string; // For picsum hint and potentially real images later
  description: string;
  mainBenefits: string[];
  requirements: string[];
  howToAccess: string[];
  link: string;
  type: 'free' | 'discounted';
  details?: {
    services?: string[];
    learningPaths?: string[];
    software?: string[];
    features?: string[];
    apps?: string[];
    pricing?: string[];
    models?: string[];
    areas?: string[];
    courses?: string[]; // Added based on MongoDB example
  };
  tested?: boolean;
}

export const benefits: Benefit[] = [
  // Free Benefits
  {
    id: 'github',
    title: 'GitHub Student Developer Pack',
    Icon: GitHubIcon,
    imageHint: 'code development collaboration',
    type: 'free',
    description:
      'El GitHub Student Developer Pack brinda acceso gratuito a más de 100 herramientas de desarrollo con un valor agregado superior a US $50 000.',
    mainBenefits: [
      'GitHub Pro: repositorios privados ilimitados, 2 GB en GitHub Packages y 90 h/mes de Codespaces',
      'Namecheap: dominio .me gratis por 1 año + SSL positivo',
      'Notion: plan Notion Education completamente gratis',
      'JetBrains: licencia anual sin costo para todos los IDEs profesionales',
      'DigitalOcean: crédito único de **US $200** por 12 meses (nuevos usuarios)',
      'Microsoft Azure: **US $100** en créditos iniciales y 25 servicios Always Free',
      'DataCamp: 3 meses de acceso ilimitado',
      'Frontend Masters: 6 meses gratis',
      'Heroku: **US $13/mes** en créditos durante 24 meses (valor total US $312)',
      'Iconscout: 60 descargas premium al mes'
    ],
    requirements: [
      'Correo institucional activo (@uagrm.edu.bo)',
      'Confirmación de estatus de estudiante (puede requerir documentación adicional)',
      'Renovación anual',
    ],
    howToAccess: [
      'Visita GitHub Education',
      'Haz clic en "Get your pack"',
      'Inicia sesión con tu cuenta de GitHub o crea una nueva',
      'Verifica tu estatus de estudiante con tu correo institucional UAGRM',
      'Espera la aprobación (generalmente toma 1-7 días)',
    ],
    link: 'https://education.github.com/pack',
    tested: true,
  },
  {
    id: 'azure',
    title: 'Microsoft Azure for Students',
    Icon: AzureIcon, // Updated Icon
    imageHint: 'cloud computing services',
    type: 'free',
    description:
      'Microsoft Azure for Students ofrece a los estudiantes universitarios acceso gratuito a servicios de nube de Microsoft Azure sin necesidad de tarjeta de crédito.',
    mainBenefits: [
      '$100 USD en créditos para usar en servicios de Azure',
      'Acceso gratuito a más de 25 productos "Always Free"',
      '12 meses de servicios populares gratuitos',
      'Acceso a herramientas de desarrollo de Microsoft',
      'Uso de servicios de IA y Machine Learning',
      'Capacidad para crear infraestructura virtual, desarrollar aplicaciones web y más',
      'Integración con Visual Studio y otras herramientas de desarrollo',
      'Recursos educativos y tutoriales específicos para estudiantes',
    ],
    details: {
      services: [
        'Azure App Service',
        'Azure Functions',
        'Azure DevOps',
        'SQL Database',
        'Virtual Machines',
        'Cognitive Services',
        'Machine Learning Studio',
      ],
    },
    requirements: [
      'Correo institucional activo (@uagrm.edu.bo)',
      'Ser mayor de 18 años',
      'Estatus de estudiante activo',
    ],
    howToAccess: [
      'Visita Microsoft Azure for Students',
      'Haz clic en "Comenzar gratis"',
      'Inicia sesión con tu cuenta de Microsoft o crea una nueva',
      'Verifica tu estatus de estudiante con tu correo institucional UAGRM',
      'Completa el proceso de registro (no requiere tarjeta de crédito)',
    ],
    link: 'https://azure.microsoft.com/es-es/free/students/',
    tested: true,
  },
  {
    id: 'figma',
    title: 'Figma Education',
    Icon: FigmaIcon, // Updated Icon
    imageHint: 'ui ux design collaboration',
    type: 'free',
    description:
      'Figma Education ofrece su plataforma profesional de diseño UI/UX de forma gratuita para estudiantes y educadores.',
    mainBenefits: [
      'Plan Figma Professional completo gratis (normalmente cuesta $12/mes por usuario)',
      'Acceso ilimitado a archivos y proyectos',
      'Herramientas avanzadas de colaboración',
      'Capacidad para crear y compartir bibliotecas de componentes',
      'Prototipado interactivo avanzado',
      'Historial de versiones ilimitado',
      'Plugins y widgets premium',
      'Integración con otras herramientas de desarrollo',
      'Posibilidad de exportar diseños a múltiples formatos',
    ],
    details: {
      features: [
        'Diseño de interfaces de usuario',
        'Prototipado interactivo',
        'Sistemas de diseño',
        'Colaboración en tiempo real',
        'Comentarios y feedback',
        'FigJam (pizarra colaborativa)',
        'Auto Layout y constraints',
        'Variantes de componentes',
      ],
    },
    requirements: [
      'Correo institucional activo (@uagrm.edu.bo)',
      'Verificación de estatus como estudiante',
      'Renovable mientras mantengas tu estatus de estudiante',
    ],
    howToAccess: [
      'Visita Figma Education',
      'Haz clic en "Apply"',
      'Crea una cuenta de Figma o inicia sesión si ya tienes una',
      'Verifica tu condición de estudiante con tu correo institucional UAGRM',
      'Espera la aprobación (generalmente toma 1-2 días hábiles)',
    ],
    link: 'https://www.figma.com/education/',
    tested: true,
  },
  {
    id: 'camscanner',
    title: 'CamScanner Premium',
    Icon: CamScannerIcon,
    imageHint: 'document scanning app mobile',
    type: 'free',
    description:
      'CamScanner concede acceso Premium por un año con 6 privilegios clave (sin anuncios, sin marca de agua, OCR, 10 GB en la nube, carpetas y avatar).',
    mainBenefits: [
      'Premium gratis por **1 año**',
      'Escaneo de alta calidad sin marca de agua',
      'OCR multilingüe',
      '10 GB de almacenamiento en la nube',
      'Protección con contraseña y edición avanzada'
    ],
    details: {
      features: [
        'Escaneo de documentos en formato PDF y JPG',
        'OCR en múltiples idiomas',
        'Firma electrónica de documentos',
        'Extracción de texto de imágenes',
        'Creación de tarjetas electrónicas de presentación',
        'Envío por fax desde la aplicación',
        'Edición de PDF avanzada',
        'Anotaciones y marcado de documentos',
      ],
    },
    requirements: [
      'Correo institucional activo (@uagrm.edu.bo)',
      'Verificación del estatus de estudiante',
      'Renovación periódica según los términos del programa',
    ],
    howToAccess: [
      'Descarga la aplicación CamScanner desde Google Play o App Store',
      'Crea una cuenta nueva usando tu correo institucional',
      'En la sección "Mi Cuenta", busca la opción "Programa para Estudiantes"',
      'Completa el formulario de verificación estudiantil',
      'Espera la confirmación por correo (generalmente 1-2 días hábiles)',
    ],
    link: 'https://www.camscanner.com',
    tested: true,
  },
  {
    id: 'jetbrains',
    title: 'JetBrains IDEs',
    Icon: JetBrainsIcon, // Updated Icon
    imageHint: 'code editor programming',
    type: 'free',
    description:
      'JetBrains ofrece a los estudiantes universitarios licencias gratuitas para toda su gama de entornos de desarrollo integrados (IDEs) profesionales.',
    mainBenefits: [
      'Acceso gratuito a todos los IDEs profesionales de JetBrains: IntelliJ IDEA Ultimate, PyCharm Professional, WebStorm, PhpStorm, CLion, DataGrip, RubyMine, GoLand, Rider, AppCode, DataSpell',
      'Actualizaciones automáticas durante el período de licencia',
      'Mismo conjunto de herramientas que usan los profesionales',
      'Licencia válida por un año con posibilidad de renovación',
      'Acceso a versiones Early Access Program (EAP)',
    ],
    details: {
      software: [ // More appropriate than features for this list
        'IntelliJ IDEA Ultimate (Java, Kotlin, Scala, Groovy)',
        'PyCharm Professional (Python)',
        'WebStorm (JavaScript, TypeScript)',
        'PhpStorm (PHP)',
        'CLion (C/C++)',
        'DataGrip (SQL)',
        'RubyMine (Ruby)',
        'GoLand (Go)',
        'Rider (.NET)',
        'AppCode (iOS/macOS)',
        'DataSpell (Data Science)',
      ],
      features: [
        'Completado de código inteligente',
        'Detección de errores en tiempo real',
        'Herramientas de refactorización avanzadas',
        'Integración con sistemas de control de versiones',
        'Depuración avanzada',
        'Personalización completa del IDE',
      ],
    },
    requirements: [
      'Correo institucional activo (@uagrm.edu.bo)',
      'Estatus de estudiante verificable',
      'Renovación anual',
    ],
    howToAccess: [
      'Visita JetBrains Student License',
      'Haz clic en "Apply now"',
      'Selecciona "Official Email address" como método de verificación',
      'Introduce tu correo institucional UAGRM',
      'Completa el formulario y verifica tu correo electrónico',
      'Espera la aprobación (generalmente toma 1-3 días)',
    ],
    link: 'https://www.jetbrains.com/community/education/#students',
    tested: true,
  },
  {
    id: 'cursor',
    title: 'Cursor IDE (AI)',
    Icon: CursorIcon,
    imageHint: 'code editor programming',
    type: 'free',
    description:
      'Cursor, el IDE basado en VS Code con copiloto de IA integrado, otorga su plan Pro gratis durante 1 año a estudiantes verificados.',
    mainBenefits: [
      'Plan Pro gratuito por 12 meses',
      'Modelos premium (GPT-4o, Claude 3.7, Gemini 2.5) incluidos',
      '500 peticiones rápidas mensuales + peticiones lentas ilimitadas',
      'Colaboración en tiempo real y depuración asistida por IA'
    ],
    requirements: [
      'Correo institucional .edu (o equivalente)',
      'Verificación vía formulario “Cursor for Students”',
      'Mayores de 16 años'
    ],
    howToAccess: [
      'Visita la página “Cursor for Students”',
      'Regístrate con tu correo institucional',
      'Adjunta prueba de matrícula y espera confirmación (24-48 h)'
    ],
    link: 'https://cursor.com/students',
  },
  {
    id: 'aws',
    title: 'AWS Educate',
    Icon: AWSIcon,
    imageHint: 'cloud infrastructure learning',
    type: 'free',
    description:
      'AWS Educate provee rutas de aprendizaje, laboratorios en la nube y créditos promocionales para que estudiantes adquieran experiencia práctica en AWS.',
    mainBenefits: [
      'Cuenta Starter sin tarjeta con **US $75** pre-cargados (uso limitado, sin riesgo de cobro)',
      'Posibilidad de solicitar hasta **US $100** en créditos promocionales a través de convenios universitarios',
      'Laboratorios prácticos gratuitos en temas de IA, ML, dev web, seguridad y más',
      'Badges digitales y acceso al AWS Educate Job Board'
    ],
    details: {
      learningPaths: [
        'Desarrollo de aplicaciones en la nube',
        'Arquitectura de nube',
        'Machine Learning',
        'Análisis de datos',
        'Desarrollo de juegos',
        'Internet de las cosas (IoT)',
      ],
    },
    requirements: [
      'Correo institucional activo (@uagrm.edu.bo)',
      'Ser mayor de 14 años',
      'Estatus de estudiante verificable',
    ],
    howToAccess: [
      'Visita AWS Educate',
      'Haz clic en "Únete a AWS Educate"',
      'Completa el formulario de registro utilizando tu correo institucional UAGRM',
      'Espera el correo de verificación (puede tardar hasta 48 horas)',
      'Sigue las instrucciones en el correo para completar tu registro',
    ],
    link: 'https://aws.amazon.com/es/education/awseducate/',
  },
  {
    id: 'autodesk',
    title: 'Autodesk Education',
    Icon: AutodeskIcon, // Updated Icon
    imageHint: '3d design engineering architecture',
    type: 'free',
    description:
      'Autodesk Education proporciona acceso gratuito a software profesional de diseño, ingeniería y entretenimiento digital para estudiantes y educadores.',
    mainBenefits: [
      'Licencias educativas gratuitas por 1 año (renovables) para más de 40 productos de Autodesk',
      'Acceso a las mismas herramientas utilizadas por profesionales en la industria',
      'Cursos y tutoriales gratuitos',
      'Certificaciones con descuento',
      'Foros de comunidad y soporte específico para estudiantes',
      'Portfolio digital en Autodesk Design Academy',
    ],
    details: {
      software: [
        'AutoCAD: Diseño y documentación CAD 2D y 3D',
        'Fusion 360: Diseño y fabricación de productos',
        'Maya: Animación, modelado y efectos visuales',
        '3ds Max: Modelado, animación y renderización 3D',
        'Revit: Modelado de información para construcción (BIM)',
        'Inventor: Diseño mecánico en 3D y documentación de productos',
        'Civil 3D: Diseño de ingeniería civil y documentación',
        'Tinkercad: Diseño 3D básico y modelado para impresión 3D',
      ],
    },
    requirements: [
      'Correo institucional activo (@uagrm.edu.bo)',
      'Verificación de estatus como estudiante',
      'Aceptar términos de uso educativo',
    ],
    howToAccess: [
      'Visita Autodesk Education',
      'Haz clic en "Comienza ya"',
      'Crea una cuenta de Autodesk o inicia sesión si ya tienes una',
      'Verifica tu elegibilidad utilizando tu correo institucional UAGRM',
      'Una vez verificado, obtendrás acceso para descargar el software',
    ],
    link: 'https://www.autodesk.com/education/edu-software/overview',
  },
  {
    id: 'mongodb',
    title: 'MongoDB University',
    Icon: MongoDBIcon, // Updated Icon
    imageHint: 'database nosql learning',
    type: 'free',
    description:
      'MongoDB University ofrece cursos gratuitos en línea para aprender sobre MongoDB, una de las bases de datos NoSQL más populares del mundo.',
    mainBenefits: [
      'Cursos gratuitos certificados por MongoDB',
      'Acceso gratuito a MongoDB Atlas (servicio de base de datos en la nube)',
      '$50 USD en créditos para MongoDB Atlas',
      'Preparación para certificaciones oficiales de MongoDB',
      'Laboratorios prácticos en entorno real',
      'Contenido actualizado con las últimas versiones de MongoDB',
      'Foros de discusión y soporte de la comunidad',
      'Badges digitales que puedes compartir en LinkedIn',
    ],
    details: {
      courses: [
        'MongoDB Basics',
        'MongoDB for JavaScript Developers',
        'MongoDB for Java Developers',
        'MongoDB for Python Developers',
        'MongoDB Aggregation Framework',
        'MongoDB Performance',
        'MongoDB Security',
        'MongoDB Data Modeling',
        'MongoDB Atlas Operations',
      ],
    },
    requirements: [
      'Registro con correo electrónico (puede ser institucional o personal)',
      'No requiere verificación de estatus estudiantil para los cursos gratuitos',
      'Conexión a internet para acceder a los materiales y laboratorios',
    ],
    howToAccess: [
      'Visita MongoDB University',
      'Haz clic en "Sign Up" para crear una cuenta gratuita',
      'Completa el formulario de registro',
      'Explora el catálogo de cursos y selecciona el que desees comenzar',
      'Para obtener los $50 en créditos de Atlas, registra una nueva cuenta en MongoDB Atlas con tu correo universitario',
    ],
    link: 'https://university.mongodb.com/',
  },
  {
    id: 'unity',
    title: 'Unity Student Plan',
    Icon: UnityIcon, // Updated Icon
    imageHint: 'game development vr ar',
    type: 'free',
    description:
      'Unity ofrece su plataforma de desarrollo de juegos y aplicaciones interactivas de forma gratuita para estudiantes universitarios a través del Unity Student Plan.',
    mainBenefits: [
      'Licencia completa de Unity Pro gratuita (valorada en $1,800/año)',
      'Acceso a Unity Learn Premium con más de 350 horas de tutoriales',
      'Plantillas y assets exclusivos',
      'Cursos de formación especializada',
      'Certificaciones con descuento',
      'Acceso a todas las funcionalidades avanzadas: Unity Reflect, Unity Teams Advanced, herramientas de colaboración, análisis de rendimiento detallado, personalización de pantalla de inicio',
      'Actualizaciones prioritarias',
    ],
    details: {
      features: [
        'Desarrollo de videojuegos 2D y 3D',
        'Realidad virtual y aumentada',
        'Simulaciones interactivas',
        'Visualización arquitectónica',
        'Desarrollo multiplataforma (PC, móvil, consolas)',
        'Efectos visuales avanzados',
        'Motor de física avanzado',
        'Inteligencia artificial y pathfinding',
      ],
    },
    requirements: [
      'Correo institucional activo (@uagrm.edu.bo)',
      'Verificación de estatus como estudiante',
      'Renovación anual',
    ],
    howToAccess: [
      'Visita Unity Student Plan',
      'Haz clic en "Get started"',
      'Crea una cuenta Unity ID o inicia sesión si ya tienes una',
      'Completa el formulario de verificación con tu correo institucional UAGRM',
      'Espera la verificación (puede tardar hasta 48 horas)',
      'Una vez aprobado, podrás activar Unity Pro desde tu Unity Hub',
    ],
    link: 'https://unity.com/products/unity-student',
  },
  // Discounted Benefits
  {
    id: 'platzi',
    title: 'Platzi Student Plan',
    Icon: PlatziIcon,
    imageHint: 'online courses education learning skill',
    type: 'discounted',
    description:
      'Platzi ofrece sus planes Expert con precio preferencial para universitarios y acceso a más de 2 000 cursos.',
    mainBenefits: [
      'Acceso a más de 1,000 cursos en tecnología, marketing y negocios',
      'Descuentos especiales para estudiantes',
      'Certificaciones reconocidas por la industria',
      'Proyectos prácticos y laboratorios en línea',
      'Comunidad activa de estudiantes y profesionales',
      'Acceso a eventos exclusivos y webinars con expertos de la industria',
      'Rutas de aprendizaje personalizadas',
      'Soporte técnico y académico',
    ],
    details: {
      courses: [
        'Desarrollo web, móvil, data science, marketing, diseño, negocios, inglés y más'
      ],
      pricing: [
        'Plan Expert regular: **US $249/año**',
        'Plan Expert Student: descuento automático (~30 %) visible al registrarte con correo .edu'
      ]
    },
    requirements: [
      'Correo institucional activo (@uagrm.edu.bo)',
      'Verificación de estatus de estudiante (ID validation)',
      'Renovación anual'
    ],
    howToAccess: [
      'Visita Platzi',
      'Haz clic en "Inscríbete"',
      'Selecciona el plan de estudiante',
      'Crea una cuenta o inicia sesión si ya tienes una',
      'Completa el proceso de verificación con tu correo institucional UAGRM'
    ],
    link: 'https://platzi.com/estudiantes/'
  },
  {
    id: 'edteam',
    title: 'Edteam',
    Icon: EdTeamIcon,
    imageHint: 'online courses education learning skill',
    type: 'discounted',
    description:
      'EDteam concede 50 % de descuento sobre su suscripción anual Premium a estudiantes verificados.',
    mainBenefits: [
      'Acceso a más de 1,000 cursos en tecnología, marketing y negocios',
      'Descuentos especiales para estudiantes',
      'Certificaciones reconocidas por la industria',
      'Proyectos prácticos y laboratorios en línea',
      'Comunidad activa de estudiantes y profesionales',
      'Acceso a eventos exclusivos y webinars con expertos de la industria',
      'Rutas de aprendizaje personalizadas',
      'Soporte técnico y académico',
    ],
    details: {
      pricing: ['**50 % de descuento** sobre la tarifa anual vigente']
    },
    requirements: [
      'Correo institucional activo (@uagrm.edu.bo)',
      'Estatus de estudiante verificable',
      'Renovación anual'
    ],
    howToAccess: [
      'Visita Edteam',
      'Haz clic en "Inscríbete"',
      'Selecciona el plan de estudiante',
      'Crea una cuenta o inicia sesión si ya tienes una',
      'Completa el proceso de verificación con tu correo institucional UAGRM'
    ],
    link: 'https://ed.team/estudiantes'
  },
  {
    id: 'windsurf',
    title: 'Windsurf (AI Code Editor)',
    Icon: WindsurfIcon,
    imageHint: 'editor code programming',
    type: 'discounted',
    description:
      'Windsurf (antes Codeium) ofrece más de 50 % de descuento en su plan Pro para estudiantes de universidades reconocidas.',
    mainBenefits: [
      'Más de **50 % de descuento** en la suscripción Pro',
      'Asistente de código con IA en tiempo real',
      'Compatibilidad con decenas de lenguajes y herramientas DevOps',
      'Integración con GitHub, GitLab y Bitbucket'
    ],
    requirements: [
      'Correo institucional .edu',
      'Verificación automática con Student Beans o formulario interno',
      'Renovación anual'
    ],
    howToAccess: [
      'Entra a https://windsurf.com/editor/students',
      'Haz clic en “Sign up with school email”',
      'Completa la validación y aplica el descuento en tu cuenta'
    ],
    link: 'https://windsurf.com/editor/students'
  },
  {
    id: 'spotify',
    title: 'Spotify Premium Student',
    Icon: SpotifyIcon,
    imageHint: 'music streaming ad-free',
    type: 'discounted',
    description:
      'Spotify ofrece 1 mes gratis y luego tarifa reducida de US$ 2.99/mes para estudiantes universitarios verificados en Bolivia.',
    mainBenefits: [
      '1 mes de prueba sin costo',
      'Precio con 50 % de descuento (US$ 2.99/mes)',
      'Reproducción sin anuncios y con saltos ilimitados',
      'Descargas para escuchar sin conexión',
      'Calidad de audio mejorada (hasta 320 kbps)',
      'Compatibilidad con dispositivos móviles, escritorio y smart speakers',
      'Cancela cuando quieras',
      'Renovable cada 12 meses hasta 4 años',
      'Acceso a Spotify Wrapped y listas personalizadas'
    ],
    details: {
      features: [
        'Streaming ilimitado',
        'Modo sin conexión en hasta 5 dispositivos',
        'Daily Mix y recomendaciones personalizadas',
        'Integración con Discord, Waze y otros servicios',
        'Compatibilidad con altavoces inteligentes (Alexa, Google Home)',
        'Control de reproducción en grupo (Group Sessions)',
        'Audio en calidad Alta (AAC 256 kbps) y Muy Alta (Ogg Vorbis 320 kbps)'
      ]
    },
    requirements: [
      'Correo .edu o .edu.bo activo',
      'Verificación anual mediante SheerID',
      'Tarjeta de débito/crédito internacional habilitada',
      'Residencia y método de pago válidos en Bolivia'
    ],
    howToAccess: [
      'Visita https://www.spotify.com/bo/student/',
      'Inicia sesión o crea una cuenta de Spotify',
      'Completa el formulario de SheerID con tu correo institucional',
      'Adjunta documento de matrícula si tu universidad no aparece',
      'Ingresa tu método de pago y confirma el plan',
      'Renueva la verificación cada 12 meses'
    ],
    link: 'https://www.spotify.com/bo/student/'
  },
  {
    id: 'appleMusic',
    title: 'Apple Music Student Plan',
    Icon: AppleMusicIcon,
    imageHint: 'music streaming spatial audio',
    type: 'discounted',
    description:
      'Apple Music ofrece 1 mes gratis y luego US$ 6.49/mes para estudiantes; incluye acceso completo a Apple TV+ sin costo adicional.',
    mainBenefits: [
      'Más de 100 millones de canciones sin anuncios',
      'Audio espacial y Lossless (sin pérdida)',
      'Catálogo de videoclips, Apple Music Radio y shows exclusivos',
      'Apple TV+ incluido mientras dure tu plan',
      'Listas personalizadas y letra en tiempo real',
      '1 mes de prueba gratuita',
      'Renovable hasta 48 meses',
      'Integración con Shazam, Siri y SharePlay'
    ],
    details: {
      features: [
        'Reproducción offline ilimitada',
        'Audio espacial con Dolby Atmos',
        'Compatible con CarPlay y Apple Watch',
        'Sincronización de biblioteca en todos tus dispositivos',
        'Replay: estadísticas anuales de escucha',
        'Soporte para letras en tiempo real y modo karaoke',
        'Integración con Apple TV y Fitness+'
      ]
    },
    requirements: [
      'Apple ID con región Bolivia',
      'Correo institucional .edu o .edu.bo',
      'Verificación vía UNiDAYS/SheerID cada 12 meses',
      'Máximo 48 meses de elegibilidad',
      'Método de pago válido (tarjeta o saldo Apple)'
    ],
    howToAccess: [
      'Abre la app Apple Music en iOS, macOS o Android',
      'Elige “Plan Estudiante” y toca “Prueba gratis”',
      'Se abrirá UNiDAYS: crea o inicia sesión en tu cuenta',
      'Verifica tu inscripción cargando la constancia de estudios si hace falta',
      'Confirma el plan y disfruta de Apple TV+ automáticamente',
      'Renueva la verificación cada año desde Ajustes › Suscripciones'
    ],
    link: 'https://www.apple.com/la/apple-music/'
  },
  {
    id: 'youtubePremium',
    title: 'YouTube Premium Student',
    Icon: YouTubeMusicIcon,
    imageHint: 'video streaming ad-free background playback',
    type: 'discounted',
    description:
      'YouTube ofrece su plan Premium para estudiantes con un precio reducido (≈ US$ 3.99–5.99/mes según tipo de cambio) e incluye YouTube Music Premium.',
    mainBenefits: [
      'YouTube sin anuncios en todos los dispositivos',
      'Reproducción en segundo plano y modo PiP',
      'Descargas para ver sin conexión',
      'YouTube Music Premium incluido',
      '1 mes de prueba gratis',
      'Renovable cada 12 meses hasta 4 años',
      'Acceso anticipado a nuevas funciones'
    ],
    details: {
      features: [
        'Video hasta 1080p sin anuncios (4K con HDR en fase de prueba)',
        'Descargas inteligentes automáticas',
        'Escucha de audio con pantalla apagada',
        'Listas personalizadas en YouTube Music',
        'Cambio de cuenta entre dispositivos sin interrupciones',
        'Live chat y comentarios sin anuncios molestos'
      ]
    },
    requirements: [
      'Correo .edu o .edu.bo',
      'Verificación anual con SheerID',
      'Cuenta de Google con país Bolivia',
      'Tarjeta internacional aceptada por Google Play'
    ],
    howToAccess: [
      'Ve a youtube.com/premium/student en tu navegador o app',
      'Inicia sesión con tu cuenta de Google',
      'Selecciona “Plan Estudiante” y completa la verificación SheerID',
      'Adjunta certificado si tu centro de estudios no aparece',
      'Introduce tu método de pago y confirma',
      'Repite la verificación cada 12 meses'
    ],
    link: 'https://support.google.com/youtube/answer/9158808'
  },
  {
    id: 'audible',
    title: 'Audible Student Discount',
    Icon: AudibleIcon,
    imageHint: 'audiobooks discounted plan',
    type: 'discounted',
    description:
      'Audible otorga 30 días gratis y luego 30 % de descuento permanente en su membresía mediante UNiDAYS para estudiantes universitarios.',
    mainBenefits: [
      'Prueba gratuita de 30 días (1 crédito para cualquier audiolibro)',
      '30 % de descuento sobre la cuota estándar',
      '1 crédito nuevo cada mes para títulos premium',
      'Acceso ilimitado a Audible Podcasts y Audible Originals',
      'Posibilidad de conservar audiolibros aunque canceles',
      'Escucha sin conexión en la app iOS/Android/Windows',
      'Intercambio de audiolibros sin costo si no te convencen'
    ],
    details: {
      features: [
        'Velocidad de narración ajustable',
        'Sincronización Whispersync con Kindle',
        'Marcadores y notas en la nube',
        'Modo “Hands-Free” con Alexa',
        'Colecciones temáticas y recomendaciones personalizadas',
        'Apps para Apple Watch y CarPlay'
      ]
    },
    requirements: [
      'Registro en UNiDAYS con correo académico',
      'Cuenta Amazon vinculada (país Estados Unidos o internacional)',
      'Tarjeta de pago válida',
      'Ser nuevo usuario de Audible o reactivar tras 6 meses'
    ],
    howToAccess: [
      'Crea o inicia sesión en UNiDAYS',
      'Busca “Audible” y haz clic en “Get now”',
      'Serás redirigido a Amazon Audible con el beneficio aplicado',
      'Inicia sesión con tu cuenta Amazon',
      'Completa registro y método de pago',
      'Disfruta 30 días gratis y luego tarifa con 30 % de descuento'
    ],
    link: 'https://www.myunidays.com/GB/en-GB/partners/amazonaudible/view'
  },
  {
    id: 'grammarly',
    title: 'Grammarly for Students',
    Icon: GrammarlyIcon,
    imageHint: 'writing ai grammar checker',
    type: 'discounted',
    description:
      'Grammarly ofrece precios académicos en su plan Premium y, cuando tu universidad participa, acceso gratuito a Grammarly Education.',
    mainBenefits: [
      'Descuento académico (hasta 50 %) en Grammarly Premium',
      'Corrección de gramática, ortografía y puntuación en tiempo real',
      'Sugerencias de claridad, concisión y tono',
      'Detección de plagio con base de datos de 16 mil millones de páginas',
      'Herramientas de IA generativa para reescritura y resumen',
      'Compatibilidad con Microsoft Word, Google Docs, navegador y móvil',
      'Panel de analíticas de escritura personal'
    ],
    details: {
      features: [
        'Revisión contextual avanzada',
        'Ajuste de nivel de formalidad y públicos meta',
        'Plantillas de correo y redacción',
        'Integración con Slack, Jira y más',
        'Compatibilidad con documentos PDF',
        'Historial de versiones y stats semanales'
      ]
    },
    requirements: [
      'Correo institucional .edu o .edu.bo',
      'Registro en Grammarly o acceso a licencia de tu universidad',
      'Renovación anual del estatus si contrataste el plan con descuento',
      'Navegador Chrome, Edge o Firefox actualizado'
    ],
    howToAccess: [
      'Visita https://www.grammarly.com/students',
      'Regístrate con tu correo .edu / .edu.bo',
      'Activa el plan gratuito básico o compra Premium con descuento',
      'Si tu universidad tiene convenio, solicita invitación a Grammarly Education',
      'Instala la extensión o app de escritorio y comienza a escribir'
    ],
    link: 'https://www.grammarly.com/edu'
  },
  {
    id: 'adobe',
    title: 'Adobe Creative Cloud',
    Icon: AdobeIcon, // Updated Icon
    imageHint: 'graphic design video editing photo',
    type: 'discounted',
    description:
      'Adobe ofrece importantes descuentos en sus suscripciones de Creative Cloud para estudiantes universitarios, dando acceso al conjunto completo de aplicaciones creativas profesionales a una fracción del precio normal.',
    mainBenefits: [
      'Descuento de aproximadamente 60-70% sobre el precio regular',
      'Acceso completo a más de 20 aplicaciones creativas de Adobe',
      '100 GB de almacenamiento en la nube',
      'Adobe Portfolio para crear portafolios profesionales',
      'Adobe Fonts con miles de tipografías premium',
      'Sincronización entre dispositivos',
      'Plantillas y recursos creativos',
      'Tutoriales y cursos integrados',
      'Actualizaciones incluidas durante el período de suscripción',
    ],
    details: {
      apps: [
        'Photoshop: Edición y composición de imágenes',
        'Illustrator: Gráficos vectoriales y diseño',
        'Premiere Pro: Edición de video profesional',
        'After Effects: Efectos visuales y motion graphics',
        'InDesign: Diseño editorial y maquetación',
        'XD: Diseño y prototipado de interfaces',
        'Acrobat Pro: Creación y edición de PDFs',
        'Lightroom: Edición fotográfica y organización',
        'Audition: Edición de audio profesional',
        'Animate: Animaciones interactivas',
        'Dreamweaver: Desarrollo web',
        'Dimension: Composiciones 3D',
        'Y más aplicaciones especializadas',
      ],
      pricing: [
        'Aproximadamente $19.99 USD/mes (varía según el país y promociones)',
        'Comparado con $52.99 USD/mes del plan regular',
      ],
    },
    requirements: [
      'Correo institucional activo (@uagrm.edu.bo)',
      'Documento que acredite tu condición de estudiante',
      'Renovación anual de la verificación',
    ],
    howToAccess: [
      'Visita Adobe Creative Cloud para estudiantes',
      'Haz clic en "Comprar ahora"',
      'Selecciona el plan para estudiantes',
      'Crea una cuenta Adobe ID o inicia sesión si ya tienes una',
      'Completa el proceso de verificación con tu correo institucional UAGRM',
      'Es posible que necesites proporcionar documentación adicional para verificar tu estatus',
    ],
    link: 'https://www.adobe.com/la/creativecloud/buy/students.html',
  },
  {
    id: 'tableau',
    title: 'Tableau for Students',
    Icon: TableauIcon,
    imageHint: 'data visualization analytics business',
    type: 'free',
    description:
      'Tableau ofrece ahora su software profesional sin costo para todos los estudiantes a través de Tableau Desktop Public Edition.',
    mainBenefits: [
      'Descarga gratuita de Tableau Desktop Public Edition (sin caducidad ni renovación)',
      'Acceso a Tableau Prep para preparar datos',
      'Actualizaciones permanentes mientras dure el programa',
      'Biblioteca de vídeos de formación y comunidad DataFam'
    ],
    details: { /* features se mantiene igual, pero sin bloque pricing */ },
    requirements: [
      'Correo institucional activo (@uagrm.edu.bo)',
      'Verificación de estatus de estudiante (SheerID)',
    ],
    howToAccess: [
      'Visita Tableau for Students',
      'Haz clic en "Get Tableau for Free"',
      'Descarga Tableau Desktop Public Edition y crea tu perfil en Tableau Public'
    ],
    link: 'https://www.tableau.com/academic/students'
  },
  {
    id: 'coursera',
    title: 'Coursera for Campus',
    Icon: CourseraIcon, // Updated Icon
    imageHint: 'online courses education learning skill',
    type: 'discounted',
    description:
      'Coursera for Campus ofrece a los estudiantes universitarios acceso con descuento a miles de cursos y especializaciones de las mejores universidades y empresas del mundo.',
    mainBenefits: [
      'Acceso a más de 4,000 cursos y especializaciones con descuentos especiales',
      'Certificaciones reconocidas globalmente',
      'Contenido de universidades prestigiosas (Stanford, Yale, Princeton, etc.)',
      'Cursos impartidos por empresas líderes (Google, IBM, Microsoft)',
      'Proyectos prácticos guiados',
      'Material didáctico de alta calidad',
      'Flexibilidad para estudiar a tu propio ritmo',
      'Comunidad global de estudiantes',
    ],
    details: {
      areas: [
        'Ciencia de datos',
        'Inteligencia artificial y machine learning',
        'Desarrollo de software',
        'Ciberseguridad',
        'Cloud computing',
        'Desarrollo web y móvil',
        'Negocios digitales',
        'Marketing digital',
        'Diseño UX/UI',
        'Big Data',
      ],
      models: [
        'Plan Basic: Algunos cursos gratuitos con certificados pagos (70-80% de descuento para estudiantes)',
        'Plan Student: Suscripción mensual con descuento (varía según el país)',
        'Plan Student Plus: Suscripción anual con mayor descuento',
        'Programas específicos: Algunos programas tienen acuerdos especiales con universidades',
      ],
    },
    requirements: [
      'Para descuentos individuales: Verificación con correo institucional (@uagrm.edu.bo)',
      'Para acceso a programas especiales: Depende de los acuerdos entre Coursera y la UAGRM',
    ],
    howToAccess: [
      'Visita Coursera',
      'Crea una cuenta con tu correo institucional UAGRM',
      'Verifica tu correo electrónico',
      'Busca los cursos que te interesen y aplica para los descuentos de estudiantes',
      'Para programas específicos, consulta con la oficina de relaciones internacionales o la facultad correspondiente de la UAGRM sobre posibles convenios existentes',
    ],
    link: 'https://www.coursera.org',
  },
];

export const recommendations: string[] = [
  'Mantén activo tu correo institucional: La mayoría de estos beneficios requieren verificación periódica.',
  'Configura recordatorios de renovación: Muchos de estos beneficios necesitan renovarse anualmente.',
  'Únete a comunidades tecnológicas: Grupos como GitHub Education, AWS Community y Tableau Community comparten recursos adicionales y oportunidades.',
  'Crea un calendario de aplicaciones: Organiza las fechas para solicitar cada beneficio.',
  'Mantente informado: Sigue las redes sociales oficiales de estos programas para enterarte de nuevas oportunidades y recursos.',
  'Aprovecha los recursos de aprendizaje: Además del software, estos programas ofrecen cursos, tutoriales y comunidades de aprendizaje.',
  'Construye tu portafolio: Utiliza estas herramientas para crear proyectos que puedas mostrar a futuros empleadores.',
];
