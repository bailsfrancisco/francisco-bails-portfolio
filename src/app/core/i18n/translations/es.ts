export const es = {
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    techStack: 'Tecnologías',
    projects: 'Proyectos',
    learning: 'Formación',
    contact: 'Contacto',
    language: 'EN',
    languageLabel: 'View in English'
  },
  home: {
    eyebrow: 'DESARROLLADOR FULL STACK',
    title: 'Transformando ideas en',
    highlight: 'soluciones digitales.',
    description:
      'Soy desarrollador de software especializado en .NET y Angular. Diseño y construyo aplicaciones web escalables, sistemas empresariales y soluciones orientadas a resolver problemas reales.',
    projectsButton: 'Ver proyectos',
    contactButton: 'Contactarme',
    profileAlt: 'Fotografía de Francisco Bails'
  },
  about: {
    aboutMe: '01 / SOBRE MÍ',
    title: 'Más que escribir código,',
    titleHighlight: 'construir soluciones.',
    paragraphs: [
      'Soy Ingeniero en Informática y desarrollador Full Stack, enfocado en crear aplicaciones web y soluciones de software para resolver necesidades reales de negocio.',
      'A lo largo de mi experiencia trabajé en el desarrollo y evolución de sistemas empresariales, participando en distintas etapas del ciclo de vida del software: desde el análisis y diseño hasta la implementación y puesta en producción.',
      'Mi especialidad está en el ecosistema .NET y Angular. Me interesa especialmente construir aplicaciones mantenibles, escalables y con una arquitectura que acompañe su crecimiento.',
      'Disfruto enfrentar desafíos técnicos, aprender nuevas tecnologías y encontrar soluciones que aporten valor más allá del código.'
    ],
    highlights: [
      {
        title: 'Software empresarial',
        description: 'Desarrollo y evolución de aplicaciones orientadas a procesos de negocio.'
      },
      {
        title: 'Arquitectura y calidad',
        description: 'Código organizado, separación de responsabilidades y soluciones mantenibles.'
      },
      {
        title: 'Desarrollo Full Stack',
        description: 'Integración entre backend, frontend y bases de datos para construir soluciones completas.'
      }
    ]
  },
  projects: {
    myWork: '03 / MI TRABAJO',
    projects: 'Proyectos y ',
    titleHighlight: 'experiencia',
    description: 'Una selección de experiencias profesionales y proyectos personales que reflejan mi enfoque del desarrollo de software.',
    keyContributions: 'Principales contribuciones',
    items: {
      securityManagement: {
        category: 'Aplicación empresarial',
        period: '2026 - Actualidad',
        title: 'Sistema de gestión empresarial de seguridad',
        description: 'Desarrollo y evolución de una aplicación web empresarial diseñada para gestionar operaciones de seguridad, personal y recursos organizacionales.',
        highlights: [
          'Implementación de arquitectura multi-tenant y control de acceso basado en organizaciones.',
          'Desarrollo de módulos para visitantes, personal, contratistas, vehículos y recursos operativos.',
          'Desarrollo de APIs backend y componentes frontend reutilizables utilizando .NET y Angular.',
          'Implementación, gestión de versiones y mantenimiento continuo.'
        ]
      },
      enterpriseErp: {
        category: 'ERP empresarial',
        period: '2020 - Actualidad',
        title: 'Sistema ERP empresarial',
        description: 'Desarrollo y mantenimiento de un sistema ERP empresarial que da soporte a operaciones comerciales, productivas y logísticas.',
        highlights: [
          'Implementación de procesos de negocio para producción, ventas, inventario y logística.',
          'Desarrollo e integración de APIs y servicios de terceros.',
          'Diseño de bases de datos y optimización de consultas en SQL Server.',
          'Mejoras continuas, resolución de problemas y mantenimiento de aplicaciones.'
        ]
      },
      personalPortfolio: {
        category: 'Proyecto personal',
        period: '2026',
        title: 'Portfolio personal',
        description: 'Diseño y desarrollo de un portfolio personal para presentar experiencia profesional, habilidades técnicas y proyectos de software.',
        highlights: [
          'Desarrollo utilizando componentes standalone de Angular y TypeScript.',
          'Interfaz responsive mediante SCSS y componentes reutilizables.',
          'Implementación de Server-Side Rendering y optimización para motores de búsqueda.',
          'Despliegue en la nube mediante Azure Static Web Apps y dominio personalizado.'
        ]
      }
    }
  },
  learning: {
    eyebrow: '04 / FORMACIÓN CONTINUA',
    title: 'Aprendizaje ',
    titleHighlight: 'continuo',
    description: 'Creo que el aprendizaje continuo es fundamental para crecer como desarrollador de software y mantenerse actualizado frente a la evolución de las tecnologías.',
    status: {
      completed: 'Completado',
      inProgress: 'En curso'
    },
    target: 'Objetivo:',
    items: {
      computerEngineering: {
        category: 'Formación universitaria',
        title: 'Ingeniería en Informática',
        institution: 'Universidad Nacional del Noroeste de la Provincia de Buenos Aires',
        status: 'Finalizado'
      },
      systemsAnalyst: {
        category: 'Formación universitaria',
        title: 'Analista de Sistemas',
        institution: 'Universidad Nacional del Noroeste de la Provincia de Buenos Aires',
        status: 'Finalizado'
      },
      dotnetBackend: {
        category: 'Desarrollo Backend',
        title: '.NET Backend: .NET Core, SQL Server y seguridad JWT'
      }
    }
  },
  techStack: {
    eyebrow: '02 / TECNOLOGÍAS',
    title: 'Herramientas para',
    titleHighlight: 'construir grandes soluciones.',
    description: 'Tecnologías, herramientas y patrones que utilizo para diseñar y desarrollar soluciones de software.',
    groups: {
      backend: {
        title: 'Backend Development',
        description: 'Desarrollo de aplicaciones y servicios.'
      },
      frontend: {
        title: 'Frontend Development',
        description: 'Interfaces web modernas y responsivas.'
      },
      database: {
        title: 'Database',
        description: 'Persistencia y gestión de datos.'
      },
      architecture: {
        title: 'Architecture & Engineering',
        description: 'Diseño y organización de soluciones.'
      },
      cloud: {
        title: 'Cloud & Tools',
        description: 'Infraestructura y herramientas de desarrollo.'
      },
      ai: {
        title: 'IA aplicada al desarrollo',
        description: 'Herramientas de IA generativa, ingeniería de prompts y automatización del desarrollo.'
      }
    }
  },
  contact: {
    eyebrow: '05 / CONTACTO',
    title: 'Construyamos algo',
    titleHighlight: 'significativo.',
    description: 'Siempre estoy abierto a conversar sobre nuevas oportunidades, proyectos interesantes y formas de crear soluciones de software que generen un impacto real.',
    button: 'Hablemos',
    emailLabel: 'O enviame un correo a',
    linkedinLabel: 'Visitar mi perfil de LinkedIn',
    githubLabel: 'Visitar mi perfil de GitHub'
  }
};
