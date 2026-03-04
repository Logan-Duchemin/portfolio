export const projects = [
  {
    id: 'alpha',
    title: 'Projet Alpha',
    shortDesc: 'Application de gestion de tâches collaboratives en temps réel.',
    fullDesc:
      "Projet Alpha est une application web full-stack permettant aux équipes de gérer leurs tâches quotidiennes avec une interface intuitive. Elle intègre la collaboration en temps réel grâce à Socket.io, un système d'authentification JWT sécurisé, et un tableau de bord avec statistiques de productivité. L'application supporte la gestion de rôles (admin, membre) et l'envoi de notifications par email.",
    stack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT', 'Express'],
    github: '#',
    demo: '#',
    color: '#7c4dff',
  },
  {
    id: 'beta',
    title: 'Projet Beta',
    shortDesc: 'Plateforme e-commerce moderne avec paiement Stripe intégré.',
    fullDesc:
      "Projet Beta est une plateforme e-commerce complète avec gestion des stocks, catalogue produits dynamique, panier persistant et intégration du paiement sécurisé via Stripe. Le tableau de bord administrateur offre des analytics en temps réel (ventes, conversions, retours). L'application est conteneurisée avec Docker et déployée sur AWS avec un pipeline CI/CD automatisé.",
    stack: ['Next.js', 'PostgreSQL', 'Stripe', 'Docker', 'AWS', 'Prisma'],
    github: '#',
    demo: '#',
    color: '#00bcd4',
  },
  {
    id: 'gamma',
    title: 'Projet Gamma',
    shortDesc: 'API RESTful haute performance pour application mobile.',
    fullDesc:
      "Projet Gamma est une API RESTful conçue pour alimenter une application mobile iOS/Android. Elle intègre une authentification OAuth2, du rate limiting par IP, un cache Redis pour les requêtes fréquentes, et une documentation Swagger interactive. Les endpoints couvrent la gestion des utilisateurs, des contenus et des notifications push. Les performances ont été optimisées pour répondre en moins de 50ms en moyenne.",
    stack: ['Python', 'FastAPI', 'Redis', 'AWS', 'PostgreSQL', 'OAuth2'],
    github: '#',
    demo: '#',
    color: '#ff5722',
  },
];
