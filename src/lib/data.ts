import type {
  ChatMessage,
  PricingPlan,
  UseCase,
  ProblemPoint,
  HowItWorksStep,
  PrivacyPoint,
  ExampleQuestion,
  Feature,
  SocialProofCompany,
} from '@/types'

/**
 * Questions exemple affichées dans la section Examples.
 * Réalistes, courtes, ancrées dans des cas d'usage concrets.
 */
export const EXAMPLE_QUESTIONS: ExampleQuestion[] = [
  { text: "Qui ai-je contacté chez Stripe le mois dernier ?", icon: 'users' },
  { text: "Quel était le contenu de ma dernière échange avec Sophie ?", icon: 'mail' },
  { text: "As-tu trace d'un avocat contacté en 2024 ?", icon: 'search' },
  { text: "Récap de mes échanges avec l'équipe tech", icon: 'file-text' },
  { text: "Qui connaît quelqu'un chez Google dans mon réseau ?", icon: 'network' },
  { text: "Quel consultant ai-je briefé sur le projet Atlas ?", icon: 'target' },
]

/**
 * Messages du mockup chat animé dans le Hero.
 * Animation séquentielle : chaque message apparaît avec un délai progressif.
 */
export const CHAT_MESSAGES: ChatMessage[] = [
  {
    question: "Qui dans mes contacts connaît quelqu'un chez Google ?",
    answer: "3 contacts identifiés : Thomas Martin (promo HEC), Claire Dupont (Slack #freelances), et Marc Leroy (ex-collègue). Tu veux que je te donne les détails ?",
  },
  {
    question: "Récap de mes échanges avec Sophie sur le projet Atlas",
    answer: "Sophie Chen et toi avez échangé 12 emails depuis janvier. Le dernier date du 15 mars — elle validait le budget et demandait un rdv avant le 20.",
  },
  {
    question: "Quel avocat ai-je contacté en mars dernier ?",
    answer: "Me. Jean Dupont, cabinet Dupont & Associés (Paris 8e). Tu l'as contacté le 3 mars au sujet d'un contrat SaaS. Son email : j.dupont@dupont-avocat.fr",
  },
]

/**
 * Plans tarifaires affichés dans la section Pricing.
 * 2 colonnes : Free (0€) et Pro (29€/mois).
 */
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Gratuit',
    price: '0€',
    description: 'Pour découvrir MailMind.',
    features: [
      '100 questions/mois',
      '1 boîte mail connectée',
      'Réponses en 5 secondes',
      'Historique 7 jours',
    ],
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '29€/mois',
    description: 'Pour les pros qui gèrent beaucoup de contacts.',
    features: [
      'Questions illimitées',
      '5 boîtes mail',
      'Réponses instantanées',
      'Historique illimité',
      'Accès prioritaire',
      'Support prioritaire',
    ],
    highlighted: true,
  },
]

/**
 * Cas d'usage par profil utilisateur.
 * 3 profils cibles : Fondateur, Commercial, Consultant.
 */
export const USE_CASES: UseCase[] = [
  {
    profile: 'Fondateur',
    title: 'Ton entreprise a de la mémoire',
    description:
      "Tu travailles avec des dizaines de partenaires, investisseurs, prestataires. MailMind te permet de retrouver instantanément le moindre échange — sans fouiller pendant des heures.",
    points: [
      'Retrouver un contact en 5 secondes',
      "Historique complet avec chaque partie prenante",
      'Plus jamais chercher un email perdu',
    ],
  },
  {
    profile: 'Commercial',
    title: 'Chaque client a une histoire',
    description:
      "Tu gères des dizaines de deals en parallèle. MailMind te résume les échanges avec chaque prospect et t'aide à relancer au bon moment avec le bon contexte.",
    points: [
      'Récap client avant chaque rdv',
      'Historique des négociations',
      'Alertes sur les follow-up en retard',
    ],
  },
  {
    profile: 'Consultant',
    title: "L'expertise, c'est aussi dans tes emails",
    description:
      "Tu travailles sur plusieurs projets simultanément. MailMind indexe tes échanges passés pour que tu retrouves instantly les infos clés de chaque mission.",
    points: [
      "Récupérer le contexte d'une mission",
      'Toutes tes notes clients en un lieu',
      'Recherche sémantique dans les échanges',
    ],
  },
]

/**
 * Points problème dans la section Problem.
 * 3 douleurs identifiées que MailMind résout.
 */
export const PROBLEM_POINTS: ProblemPoint[] = [
  {
    title: 'Des années d emails inaccessibles',
    description:
      "Ta boîte mail, c'est des années de contexte. Mais y accéder, c'est devenu mission impossible. Tu sais que t'as déjà traité ce sujet quelque part — mais où ?",
  },
  {
    title: 'Chaque nouvel outil ajoute de la friction',
    description:
      "Slack, Notion, Linear, Drive… Tu passes ton temps à switcher entre 10 outils. Et l'info finale, elle est où ? Souvent : dans ta mailbox, encore et toujours.",
  },
  {
    title: "La recherche native, c'est pas de la recherche",
    description:
      "Tu tapes un nom, ça te sort 47 000 résultats. Tu tapes deux mots — tu trouves rien. La vraie recherche, c'est comprendre ce que tu cherches. Pas juste matcher des caractères.",
  },
]

/**
 * Étapes de fonctionnement dans la section HowItWorks.
 * 3 étapes numérotées.
 */
export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Connecte ta boîte mail',
    description:
      "Gmail ou Outlook. En 2 clics, sans code. Tes emails sont indexés localement — aucun accès à ton contenu par des humains.",
    icon: 'database',
  },
  {
    step: 2,
    title: 'Pose ta question',
    description:
      "En langage naturel. Pas besoin de mots-clés parfaits. MailMind comprend le contexte et cherche dans l'ensemble de tes échanges.",
    icon: 'message-square',
  },
  {
    step: 3,
    title: 'Reçois ta réponse en secondes',
    description:
      "Avec les sources. Tu peux cliquer sur chaque référence pour voir l'email ou le fil complet. Pas de black box.",
    icon: 'zap',
  },
]

/**
 * Points confidentialité dans la section Privacy.
 * 3 rassurances sur la vie privée.
 */
export const PRIVACY_POINTS: PrivacyPoint[] = [
  {
    title: 'Données traitées localement',
    description:
      "Ton contenu ne quitte jamais ton navigateur. L'IA tourne sur des serveurs externalisés, mais tes emails restent sur ta machine. Nobody reads your mail.",
  },
  {
    title: "Aucune donnée utilisée pour l'entraînement",
    description:
      "Tes emails ne servent pas à entraîner nos modèles. Point. C'est stipulé dans nos conditions d'utilisation — et c'est respecté.",
  },
  {
    title: 'Supprime quand tu veux',
    description:
      "Tu veux tout supprimer demain ? Un clic. Toutes les données sont détruites. Aucune rétention, aucune trace. Ton espace, ta vie privée.",
  },
]

/**
 * Fonctionnalités affichées dans la section Features.
 * Grille de 6 cards avec icônes et visuels.
 */
export const FEATURES: Feature[] = [
  {
    icon: 'search',
    title: 'Recherche sémantique',
    description:
      "Pas besoin de mots-clés parfaits. Décris ce que tu cherches, MailMind comprend le contexte et retrouve l'info.",
    span: 2,
  },
  {
    icon: 'brain',
    title: 'Compréhension du contexte',
    description:
      "L'IA lit entre les lignes. Elle fait le lien entre tes échanges pour te donner une réponse complète.",
  },
  {
    icon: 'network',
    title: 'Cartographie du réseau',
    description:
      "Découvre qui connaît qui dans tes contacts. Un vrai outil de networking intégré à ta boîte mail.",
  },
  {
    icon: 'trending-up',
    title: 'Suivi des interactions',
    description:
      "Relance automatiquement les contacts importants. Ne perds plus jamais un fil.",
    span: 2,
  },
  {
    icon: 'database',
    title: 'Indexation locale',
    description:
      "Tes emails restent sur ta machine. L'indexation se fait en local, dans ton navigateur.",
  },
  {
    icon: 'layers',
    title: 'Historique complet',
    description:
      "Accède à toutes tes conversations passées. Même celles de 3 ans en arrière.",
  },
]

/**
 * Entreprises affichées dans la section SocialProof.
 * Logos/sponsors ou partenaires.
 */
export const SOCIAL_PROOF_COMPANIES: SocialProofCompany[] = [
  { name: 'Stripe', style: 'serif' },
  { name: 'Vercel', style: 'mono' },
  { name: 'Linear', style: 'default' },
  { name: 'Notion', style: 'serif' },
  { name: 'Figma', style: 'italic' },
  { name: 'Supabase', style: 'mono' },
  { name: 'Railway', style: 'default' },
  { name: 'Resend', style: 'serif' },
]
