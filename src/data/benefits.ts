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
} from '@/components/icons';

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
      'El GitHub Student Developer Pack es uno de los recursos más valiosos para estudiantes de tecnología. Ofrece acceso gratuito a más de 100 herramientas y servicios de desarrollo valorados en más de $45,000 USD.',
    mainBenefits: [
      'GitHub Pro: Repositorios privados ilimitados, 2GB de almacenamiento para GitHub Pages y GitHub Codespaces',
      'Namecheap: Un año de dominio .me gratis y descuentos en renovaciones',
      'Bootstrap Studio: Licencia completa gratuita para la herramienta de diseño web',
      'JetBrains: Suscripción gratuita a todos los IDEs de JetBrains',
      'DigitalOcean: $100 en créditos para servicios en la nube',
      'Microsoft Azure: $100 en créditos y acceso gratuito a servicios en la nube',
      'DataCamp: Suscripción gratuita de 3 meses para aprendizaje de ciencia de datos',
      'Frontend Masters: Suscripción gratuita de 6 meses para cursos de desarrollo frontend',
      'Termius: Cliente SSH premium gratuito',
      'Iconscout: 60 descargas premium gratuitas por mes',
      'Heroku: Crédito para despliegue de aplicaciones web',
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
  },
  {
    id: 'azure',
    title: 'Microsoft Azure for Students',
    Icon: AzureIcon,
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
  },
  {
    id: 'aws',
    title: 'AWS Educate',
    Icon: AWSIcon,
    imageHint: 'cloud infrastructure learning',
    type: 'free',
    description:
      'AWS Educate es la iniciativa global de Amazon Web Services para proporcionar a estudiantes recursos completos para el aprendizaje de la computación en la nube.',
    mainBenefits: [
      'Créditos promocionales AWS ($75-$100 según el nivel educativo)',
      'Acceso al AWS Educate Job Board con oportunidades de empleo y pasantías',
      'Laboratorios prácticos en la nube sin costo',
      'Proyectos basados en la nube para desarrollar habilidades prácticas',
      'Badges digitales por completar rutas de aprendizaje',
      'Acceso a AWS CloudWatch, Lambda, EC2 y otros servicios',
      'Cursos y contenido educativo sobre ciencia de datos, machine learning, desarrollo web y más',
      'Entrenamiento para certificaciones AWS',
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
    id: 'jetbrains',
    title: 'JetBrains IDEs',
    Icon: JetBrainsIcon,
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
  },
    {
    id: 'autodesk',
    title: 'Autodesk Education',
    Icon: AutodeskIcon,
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
    id: 'figma',
    title: 'Figma Education',
    Icon: FigmaIcon,
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
  },
  {
    id: 'mongodb',
    title: 'MongoDB University',
    Icon: MongoDBIcon,
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
    Icon: UnityIcon,
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
    id: 'adobe',
    title: 'Adobe Creative Cloud',
    Icon: AdobeIcon,
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
    type: 'discounted',
    description:
      'Tableau, líder en software de visualización y análisis de datos, ofrece su versión profesional con un descuento significativo para estudiantes universitarios.',
    mainBenefits: [
      'Licencia de Tableau Desktop Professional por 1 año',
      'Precio especial de $29 USD (en lugar de $70/mes del plan regular)',
      'Actualización gratuita a nuevas versiones durante el período de licencia',
      'Acceso completo a todas las funcionalidades avanzadas',
      'Compatibilidad con múltiples fuentes de datos',
      'Capacidad para crear visualizaciones complejas e interactivas',
      'Herramientas de análisis estadístico',
      'Integración con lenguajes de programación como Python y R',
      'Comunidad de aprendizaje y recursos educativos',
    ],
    details: {
      features: [
        'Creación de dashboards interactivos',
        'Visualización de datos avanzada',
        'Análisis predictivo',
        'Integración con diversas fuentes de datos (SQL, Excel, BigData)',
        'Mapas y análisis geoespacial',
        'Cálculos y fórmulas personalizadas',
        'Storytelling con datos',
        'Publicación y compartición de dashboards',
      ],
    },
    requirements: [
      'Correo institucional activo (@uagrm.edu.bo)',
      'Verificación de estatus como estudiante',
      'Renovación anual',
    ],
    howToAccess: [
      'Visita Tableau for Students',
      'Haz clic en "Get Tableau for Students"',
      'Completa el formulario con tu información personal y académica',
      'Utiliza tu correo institucional UAGRM',
      'Espera la verificación (generalmente toma 2-3 días hábiles)',
      'Una vez aprobado, recibirás instrucciones para descargar e instalar Tableau Desktop',
    ],
    link: 'https://www.tableau.com/academic/students',
  },
  {
    id: 'coursera',
    title: 'Coursera for Campus',
    Icon: CourseraIcon,
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
    link: 'https://www.coursera.org/for-university-and-college-students',
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
