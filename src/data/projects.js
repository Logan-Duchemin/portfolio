export const projects = [
  {
    id: 'ticketing',
    type: 'professional',
    title: 'Logiciel de Ticketing & Support Client',
    shortDesc: 'Digitalisation du support technique avec gestion des flux en temps réel.',
    fullDesc:
      "Application web de support client permettant la gestion et le suivi des tickets en temps réel. L'implémentation de WebSockets assure une mise à jour instantanée des requêtes sans rechargement de page. Le système intègre une authentification multi-rôles avec filtrage dynamique des données selon les permissions administrateur, offrant une expérience fluide aussi bien aux agents qu'aux administrateurs.",
    stack: ['React', 'Symfony', 'WebSockets', 'MySQL', 'JWT', 'PHP'],
    github: '#',
    demo: '#',
    color: '#7c4dff',
  },
  {
    id: 'parc-vehicules',
    type: 'professional',
    title: 'Système de Gestion de Parc & Historique Véhicules',
    shortDesc: "Automatisation du suivi et de la traçabilité d'une flotte de véhicules.",
    fullDesc:
      "Application de gestion de flotte permettant un suivi complet des véhicules de l'entreprise. Le point clé du projet est un module de génération et lecture de QR Codes pour une identification rapide sur le terrain. La base de données intègre un historique d'affectation complet pour assurer une traçabilité totale des mouvements du parc, consultable depuis une interface web moderne.",
    stack: ['React', 'Symfony', 'MySQL', 'QR Code', 'PHP', 'SQL Server'],
    github: '#',
    demo: '#',
    color: '#00bcd4',
  },
  {
    id: 'LD-infomatique',
    type: 'professional',
    title: 'LD-infomatique',
    shortDesc: 'Site vitrine personnel présentant mes compétences et réalisations.',
    fullDesc:
      "Site vitrine et portfolio personnel destiné à présenter mes compétences, mes réalisations et mon parcours de développeur. Conçu avec une approche mobile-first, le site propose une navigation fluide entre les sections, un affichage des projets réalisés et un formulaire de contact. Le projet m'a permis de consolider mes bases en HTML, CSS et JavaScript avant d'adopter des frameworks modernes.",
    stack: ['React', 'Laravel', 'MySQL', 'PHP'],
    github: '#',
    demo: '#',
    color: '#00bcd4',
  },
  {
    id: 'jeux-interactifs',
    type: 'personal',
    title: 'Jeux interactifs',
    shortDesc: 'Plateforme de jeux interactifs au style Netflix — catalogue, scores et progression.',
    fullDesc:
      "Application web de divertissement présentant une collection de jeux interactifs accessibles directement dans le navigateur. L'interface s'inspire du design Netflix : navigation par catégories, cartes de jeux avec aperçu au survol et accès rapide. Chaque jeu gère ses propres règles et un système de score local. Le projet a été l'occasion d'approfondir la gestion d'état complexe avec React et de créer des animations CSS fluides sans bibliothèque externe.",
    stack: ['React', 'JavaScript', 'CSS Modules', 'HTML Canvas', 'LocalStorage'],
    github: '#',
    demo: '#',
    color: '#7c4dff',
  },
  {
    id: 'cinetrack',
    type: 'personal',
    title: 'CineTrack',
    shortDesc: 'Plateforme de tracking des films et séries en temps réel.',
    fullDesc:
      "Application fullstack de suivi cinématographique inspirée de TV Time, propulsée par l'API TMDB. Le frontend React/MUI propose un catalogue avec infinite scroll, une fiche détail (casting, trailer, similaires), un suivi épisode par épisode avec progress bar par saison, une watchlist et une page de statistiques. Le backend Laravel suit une architecture en couches (Controller → Repository pattern) avec authentification JWT et système multi-profils à la Netflix, le tout conteneurisé avec Docker.",
    stack: ['React', 'MUI', 'Laravel', 'MySQL', 'TMDB', 'Docker'],
    github: '#',
    demo: 'https://cinetrack-xi.vercel.app/',
    color: '#ccc53f',
  },
];
