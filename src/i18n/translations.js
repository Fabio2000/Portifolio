// Textos do site nos três idiomas suportados.
// pt = Português (Brasil), es = Espanhol, en = Inglês.
const translations = {
  pt: {
    nav: {
      home: 'Início',
      resumo: 'Resumo',
      historico: 'Histórico',
      skills: 'Skills',
      formacao: 'Formação',
      projetos: 'Projetos',
      curriculo: 'Baixar Currículo',
      email: 'Enviar E-mail',
    },
    toggle: {
      light: 'Ativar modo claro',
      dark: 'Ativar modo escuro',
      language: 'Escolher idioma',
    },
    home: {
      greeting: 'Sou o Fabio Silva',
      roles: ['Analista Pleno.', 'Desenvolvedor Full Stack.', 'Criador de Software SaaS.'],
    },
    resumo: {
      title: 'Resumo Profissional',
      p1: 'Desenvolvedor Full Stack e Analista Pleno com experiência sólida na criação e manutenção de aplicações web. Com forte foco em resolução ágil de problemas, possuo domínio prático em ecossistemas baseados em JavaScript (React.js, Node.js, Angular) e PHP, além de sólida base em Python, HTML e CSS.',
      p2: 'Construí uma base técnica robusta ao longo de 4 anos atuando como Analista de Suporte na TM Informática, onde fui responsável por garantir a estabilidade e a evolução contínua de sistemas. Hoje, como desenvolvedor autônomo, lidero projetos de ponta a ponta.',
      p3: 'Como destaque da minha visão de produto, sou o fundador e desenvolvedor principal do RainFlow (agendamento.rainstore.net), um software SaaS de agendamento de elite. Neste projeto, gerencio todo o ciclo de vida da aplicação: desde a configuração de infraestrutura e domínios até a construção da arquitetura de backend, com disparos de notificações automatizadas e gestão de clientes.',
      p4: 'Focado em entregar código limpo, escalável e centrado no usuário, possuo uma visão estratégica sobre arquitetura de software. Em constante evolução, busco sempre as melhores práticas do mercado, com um forte interesse e direcionamento de estudos voltados para a área de Segurança da Informação.',
    },
    historico: {
      title: 'Histórico Profissional',
      rainflow: {
        role: 'Fundador & Desenvolvedor Full Stack',
        date: 'Julho 2025 - Presente',
        body: 'Idealização, desenvolvimento e gestão completa de um software SaaS de agendamento de elite. Atuação autônoma cobrindo todo o ciclo de vida do produto: configuração de infraestrutura web, desenvolvimento Front-end (React.js) e Back-end (PHP), integrações com APIs externas (pagamentos via Stripe, notificações automatizadas via WhatsApp Business) e otimização contínua da experiência do usuário (UX/UI).',
      },
      tm: {
        role: 'Analista de Suporte e Desenvolvimento',
        date: 'Abril 2021 - Julho 2025',
        body: 'Suporte técnico avançado a Sistemas de Informação Laboratorial (LIS) e Sistemas Informatizados de Gestão Hospitalar (HIS/ERP). Atuação direta na resolução de incidentes e evolução das plataformas utilizando Node.js, Pascal (Delphi), Oracle SQL, MongoDB e Redis. Realização de análises de integração e testes de APIs (REST/RESTful e SOAP) utilizando ferramentas como Postman e SOAP UI.',
      },
      redblock: {
        role: 'Desenvolvedor Front-end & Mobile',
        date: 'Setembro 2020 – Dezembro 2020',
        body: 'Desenvolvimento de aplicações e interfaces digitais. Atuação na criação de aplicativos mobile utilizando React Native e desenvolvimento de plataformas web corporativas com WordPress, HTML5, CSS3, Bootstrap e JavaScript.',
      },
      wolf: {
        role: 'Desenvolvedor Web Front-end',
        date: 'Outubro 2019 – Janeiro 2020',
        body: 'Criação e prototipação de interfaces de usuário (UI). Desenvolvimento de layouts responsivos focados na experiência do usuário utilizando HTML, CSS, JavaScript, Bootstrap e bibliotecas de ícones como FontAwesome.',
      },
    },
    skills: {
      title: 'Habilidades Técnicas',
      apis: 'APIs (Stripe, etc)',
    },
    certificados: {
      title: 'Certificações',
      alt: 'Certificado',
    },
    projetos: {
      title: 'Projetos',
      hint: 'Toque para ver',
      rainflow: {
        subtitle: 'Software Autoral',
        body: 'SaaS de agendamento de elite com faturamento automatizado e notificações via WhatsApp.',
        cta: 'Acessar Plataforma',
      },
      tiringa: {
        subtitle: 'Projeto Acadêmico',
        body: 'E-commerce completo desenvolvido para conclusão de curso de desenvolvimento web.',
        cta: 'Ver Deploy',
        code: 'Ver Código',
      },
      financas: {
        subtitle: 'Blog Autoral',
        body: 'Blog de educação financeira com artigos sobre economia, investimentos e organização pessoal.',
        cta: 'Acessar Blog',
      },
      vitalize: {
        subtitle: 'Projeto Freelancer',
        body: 'Site institucional para clínica odontológica em Taguatinga Norte (DF), com foco em performance e SEO.',
        cta: 'Ver Site',
      },
    },
    footer: {
      title: 'Contato ✦ Redes Sociais',
      subtitle: 'Vamos criar algo incrível juntos?',
      rights: 'Todos os direitos reservados.',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      resumo: 'Resumen',
      historico: 'Trayectoria',
      skills: 'Habilidades',
      formacao: 'Formación',
      projetos: 'Proyectos',
      curriculo: 'Descargar CV',
      email: 'Enviar correo',
    },
    toggle: {
      light: 'Activar modo claro',
      dark: 'Activar modo oscuro',
      language: 'Elegir idioma',
    },
    home: {
      greeting: 'Soy Fabio Silva',
      roles: ['Analista Semi Sénior.', 'Desarrollador Full Stack.', 'Creador de Software SaaS.'],
    },
    resumo: {
      title: 'Resumen Profesional',
      p1: 'Desarrollador Full Stack y Analista Semi Sénior con experiencia sólida en la creación y el mantenimiento de aplicaciones web. Con un fuerte enfoque en la resolución ágil de problemas, domino en la práctica los ecosistemas basados en JavaScript (React.js, Node.js, Angular) y PHP, además de una base sólida en Python, HTML y CSS.',
      p2: 'Construí una base técnica robusta a lo largo de 4 años como Analista de Soporte en TM Informática, donde fui responsable de garantizar la estabilidad y la evolución continua de los sistemas. Hoy, como desarrollador autónomo, lidero proyectos de principio a fin.',
      p3: 'Como muestra de mi visión de producto, soy el fundador y desarrollador principal de RainFlow (agendamento.rainstore.net), un software SaaS de agendamiento de alto nivel. En este proyecto gestiono todo el ciclo de vida de la aplicación: desde la configuración de la infraestructura y los dominios hasta la construcción de la arquitectura de backend, con envío de notificaciones automatizadas y gestión de clientes.',
      p4: 'Enfocado en entregar código limpio, escalable y centrado en el usuario, tengo una visión estratégica sobre la arquitectura de software. En constante evolución, busco siempre las mejores prácticas del mercado, con un fuerte interés y una orientación de estudios hacia el área de Seguridad de la Información.',
    },
    historico: {
      title: 'Trayectoria Profesional',
      rainflow: {
        role: 'Fundador y Desarrollador Full Stack',
        date: 'Julio 2025 - Presente',
        body: 'Ideación, desarrollo y gestión completa de un software SaaS de agendamiento de alto nivel. Trabajo autónomo cubriendo todo el ciclo de vida del producto: configuración de infraestructura web, desarrollo Front-end (React.js) y Back-end (PHP), integraciones con APIs externas (pagos vía Stripe, notificaciones automatizadas vía WhatsApp Business) y optimización continua de la experiencia de usuario (UX/UI).',
      },
      tm: {
        role: 'Analista de Soporte y Desarrollo',
        date: 'Abril 2021 - Julio 2025',
        body: 'Soporte técnico avanzado a Sistemas de Información de Laboratorio (LIS) y Sistemas Informatizados de Gestión Hospitalaria (HIS/ERP). Participación directa en la resolución de incidentes y en la evolución de las plataformas utilizando Node.js, Pascal (Delphi), Oracle SQL, MongoDB y Redis. Realización de análisis de integración y pruebas de APIs (REST/RESTful y SOAP) con herramientas como Postman y SOAP UI.',
      },
      redblock: {
        role: 'Desarrollador Front-end y Mobile',
        date: 'Septiembre 2020 – Diciembre 2020',
        body: 'Desarrollo de aplicaciones e interfaces digitales. Creación de aplicaciones móviles con React Native y desarrollo de plataformas web corporativas con WordPress, HTML5, CSS3, Bootstrap y JavaScript.',
      },
      wolf: {
        role: 'Desarrollador Web Front-end',
        date: 'Octubre 2019 – Enero 2020',
        body: 'Creación y prototipado de interfaces de usuario (UI). Desarrollo de layouts responsivos centrados en la experiencia del usuario utilizando HTML, CSS, JavaScript, Bootstrap y bibliotecas de iconos como FontAwesome.',
      },
    },
    skills: {
      title: 'Habilidades Técnicas',
      apis: 'APIs (Stripe, etc.)',
    },
    certificados: {
      title: 'Certificaciones',
      alt: 'Certificado',
    },
    projetos: {
      title: 'Proyectos',
      hint: 'Toca para ver',
      rainflow: {
        subtitle: 'Software Propio',
        body: 'SaaS de agendamiento de alto nivel con facturación automatizada y notificaciones vía WhatsApp.',
        cta: 'Acceder a la Plataforma',
      },
      tiringa: {
        subtitle: 'Proyecto Académico',
        body: 'E-commerce completo desarrollado como trabajo final del curso de desarrollo web.',
        cta: 'Ver Deploy',
        code: 'Ver Código',
      },
      financas: {
        subtitle: 'Blog Propio',
        body: 'Blog de educación financiera con artículos sobre economía, inversiones y organización personal.',
        cta: 'Acceder al Blog',
      },
      vitalize: {
        subtitle: 'Proyecto Freelance',
        body: 'Sitio institucional para una clínica odontológica en Taguatinga Norte (DF), con foco en rendimiento y SEO.',
        cta: 'Ver Sitio',
      },
    },
    footer: {
      title: 'Contacto ✦ Redes Sociales',
      subtitle: '¿Creamos algo increíble juntos?',
      rights: 'Todos los derechos reservados.',
    },
  },

  en: {
    nav: {
      home: 'Home',
      resumo: 'Summary',
      historico: 'Experience',
      skills: 'Skills',
      formacao: 'Education',
      projetos: 'Projects',
      curriculo: 'Download Resume',
      email: 'Send Email',
    },
    toggle: {
      light: 'Switch to light mode',
      dark: 'Switch to dark mode',
      language: 'Choose language',
    },
    home: {
      greeting: 'I am Fabio Silva',
      roles: ['Mid-level Analyst.', 'Full Stack Developer.', 'SaaS Software Builder.'],
    },
    resumo: {
      title: 'Professional Summary',
      p1: 'Full Stack Developer and Mid-level Analyst with solid experience building and maintaining web applications. With a strong focus on fast problem solving, I have hands-on command of JavaScript-based ecosystems (React.js, Node.js, Angular) and PHP, plus a solid foundation in Python, HTML and CSS.',
      p2: 'I built a robust technical foundation over 4 years as a Support Analyst at TM Informática, where I was responsible for ensuring the stability and continuous evolution of production systems. Today, as a freelance developer, I lead projects end to end.',
      p3: 'As the highlight of my product vision, I am the founder and lead developer of RainFlow (agendamento.rainstore.net), a premium SaaS scheduling platform. On this project I manage the entire application lifecycle: from infrastructure and domain setup to the backend architecture, with automated notification delivery and customer management.',
      p4: 'Focused on delivering clean, scalable and user-centered code, I bring a strategic view of software architecture. Always evolving, I look for the best practices on the market, with a strong interest and study track aimed at Information Security.',
    },
    historico: {
      title: 'Professional Experience',
      rainflow: {
        role: 'Founder & Full Stack Developer',
        date: 'July 2025 - Present',
        body: 'Conception, development and full management of a premium SaaS scheduling platform. Independent work covering the entire product lifecycle: web infrastructure setup, Front-end (React.js) and Back-end (PHP) development, third-party API integrations (Stripe payments, automated WhatsApp Business notifications) and continuous user experience optimization (UX/UI).',
      },
      tm: {
        role: 'Support and Development Analyst',
        date: 'April 2021 - July 2025',
        body: 'Advanced technical support for Laboratory Information Systems (LIS) and Hospital Management Systems (HIS/ERP). Direct work on incident resolution and platform evolution using Node.js, Pascal (Delphi), Oracle SQL, MongoDB and Redis. Integration analysis and API testing (REST/RESTful and SOAP) with tools such as Postman and SOAP UI.',
      },
      redblock: {
        role: 'Front-end & Mobile Developer',
        date: 'September 2020 – December 2020',
        body: 'Development of digital applications and interfaces. Built mobile apps with React Native and corporate web platforms with WordPress, HTML5, CSS3, Bootstrap and JavaScript.',
      },
      wolf: {
        role: 'Front-end Web Developer',
        date: 'October 2019 – January 2020',
        body: 'Creation and prototyping of user interfaces (UI). Development of responsive, user-experience-driven layouts using HTML, CSS, JavaScript, Bootstrap and icon libraries such as FontAwesome.',
      },
    },
    skills: {
      title: 'Technical Skills',
      apis: 'APIs (Stripe, etc.)',
    },
    certificados: {
      title: 'Certifications',
      alt: 'Certificate',
    },
    projetos: {
      title: 'Projects',
      hint: 'Tap to see',
      rainflow: {
        subtitle: 'Own Software',
        body: 'Premium scheduling SaaS with automated billing and WhatsApp notifications.',
        cta: 'Open Platform',
      },
      tiringa: {
        subtitle: 'Academic Project',
        body: 'Complete e-commerce built as the final project of a web development course.',
        cta: 'View Deploy',
        code: 'View Code',
      },
      financas: {
        subtitle: 'Own Blog',
        body: 'Personal finance blog with articles on economics, investing and money organization.',
        cta: 'Open Blog',
      },
      vitalize: {
        subtitle: 'Freelance Project',
        body: 'Marketing website for a dental clinic in Taguatinga Norte (DF), focused on performance and SEO.',
        cta: 'View Site',
      },
    },
    footer: {
      title: 'Contact ✦ Social Media',
      subtitle: 'Shall we build something amazing together?',
      rights: 'All rights reserved.',
    },
  },
};

export default translations;
