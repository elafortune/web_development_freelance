// {delay} est remplacé par offer.mockupDelay (voir src/data/offer.js)
export const translations = {
  FR: {
    // Navigation
    nav_home: 'Accueil',
    nav_projects: 'Mes sites',
    nav_process: 'Comment ça marche',
    nav_offer: 'Tarifs',
    nav_faq: 'FAQ',
    nav_cta: 'Ma maquette gratuite',

    // Hero
    hero_hello: "👋 Salut, moi c'est Emerick",
    hero_seo: 'Sites web pour salons de coiffure, instituts de beauté & bien-être · Paris 11e',
    hero_h1_a: 'Votre salon mérite',
    hero_h1_highlight: 'mieux',
    hero_h1_b: "qu'une page Instagram.",
    hero_sub: "Je vous montre votre futur site avant que vous ne payiez quoi que ce soit.",
    hero_cta: 'Recevoir ma maquette gratuite',
    hero_cta_secondary: 'Voir mes sites',
    hero_proof: '{n} clients ravis · réponse en moins de 24h',
    hero_me: "c'est moi !",
    hero_sticker_city: 'Paris 🗼',
    hero_sticker_gift: 'Maquette offerte 🎁',
    hero_badge: 'sur mesure · sur mesure · ',

    // Bandeau métiers
    marquee: ['Salons de coiffure ✂️', 'Barbiers 💈', 'Instituts de beauté 💅', 'Esthéticiennes 🌸', 'Spas & massages 🧖', 'Thérapeutes 💞', 'Sophrologues 🧘', 'Kinés & ostéos 💆'],

    // Réalisations
    projects_eyebrow: 'les preuves',
    projects_title: 'De vrais sites, pour de vrais gens.',
    projects_visits: 'visites/mois',
    projects_cta: 'Voir le site',
    projects_next: 'Votre business pourrait être le prochain.',
    projects_next_cta: 'Je veux le même 🙋',

    // Process
    process_eyebrow: 'simple comme bonjour',
    process_title: 'Comment ça marche ?',
    process_steps: [
      { icon: '📩', title: "Vous m'envoyez le nom de votre business", tag: '30 secondes' },
      { icon: '🎨', title: 'Je vous montre votre maquette', tag: 'gratuit · sous {delay}' },
      { icon: '🚀', title: 'Ça vous plaît ? On met en ligne.', tag: 'sinon, zéro frais' },
    ],
    process_cta: "C'est parti !",

    // Offre
    offer_eyebrow: 'pas de mauvaise surprise',
    offer_title: 'Des prix clairs.',
    offer_recommended: 'mon conseil 👍',
    offer_plans: {
      subscription: {
        name: 'Tout compris',
        setupLabel: 'pour démarrer',
        monthlyLabel: '/mois',
        commitment: '{n} mois, puis sans engagement',
        features: ['🌐 Nom de domaine', '☁️ Hébergement', '📱 Parfait sur mobile', '🔍 SEO local', '📍 Fiche Google optimisée', '✏️ Modifs incluses'],
      },
      oneshot: {
        name: 'Propriétaire',
        setupLabel: 'une seule fois',
        monthlyLabel: '/mois de maintenance',
        commitment: 'Sans engagement',
        features: ['🔑 Le site est à vous', '☁️ Hébergement', '📱 Parfait sur mobile', '🔍 SEO local', '🛟 Mises à jour'],
      },
    },
    offer_cta: 'Commencer par la maquette',
    offer_note: 'Boutique en ligne ou projet plus gros ? On en parle, devis gratuit.',

    // Avis
    testimonials_eyebrow: 'pas moi qui le dis',
    testimonials_title: 'Ils en parlent mieux que moi.',

    // À propos
    about_eyebrow: "derrière l'écran",
    about_title: 'Un humain, pas une agence.',
    about_caption: 'en plein échange 💬',
    about_line: "Je crée des sites qui donnent envie de pousser la porte de votre boutique.",
    about_facts: [
      '📍 Paris 11e : on peut se voir au salon',
      "🤖 Ingénieur IA : je vais vite, sans faire du générique",
      '⚡ Réponse en moins de 24h',
      '🤝 Un seul interlocuteur : moi',
    ],
    about_cta: 'Me parler directement',

    // FAQ
    faq_eyebrow: 'vous vous demandez sûrement…',
    faq_title: 'Questions fréquentes',
    faq_items: [
      { q: 'La maquette est vraiment gratuite ?', a: 'Oui. Si elle ne vous plaît pas, on se quitte bons amis. Zéro frais.' },
      { q: 'Combien de temps pour avoir mon site ?', a: 'La maquette sous {delay}, le site en ligne en quelques semaines.' },
      { q: "Je n'y connais rien en informatique…", a: "Parfait, c'est mon job. Vous m'envoyez vos photos et vos infos, je m'occupe du reste." },
      { q: 'Et si je veux modifier quelque chose ?', a: "Un message WhatsApp et c'est réglé. Les petites modifs sont incluses." },
      { q: 'Vous êtes où ?', a: "À Paris, et surtout dans le 11e : je peux passer vous voir au salon ou au cabinet." },
      { q: 'Est-ce que Google va me trouver ?', a: 'Chaque site est optimisé pour le référencement local, et je peux aussi booster votre fiche Google.' },
    ],

    // Contact
    contact_eyebrow: 'à vous de jouer',
    contact_title: 'Votre maquette gratuite, sous {delay}.',
    contact_sub: "Trois infos et c'est parti. Aucun engagement.",
    contact_me: 'Je vous réponds en personne ✌️',
    contact_business: 'Nom de votre business',
    contact_business_ph: 'Ex : Salon Bel Hair',
    contact_trade: 'Votre métier & ville',
    contact_trade_ph: 'Ex : coiffeuse, Paris 11e',
    contact_name: 'Votre prénom',
    contact_name_ph: 'Ex : Julie',
    contact_link: 'Un lien (Instagram, Google Maps…)',
    contact_link_ph: 'Facultatif',
    contact_submit: 'Envoyer sur WhatsApp',
    contact_email: 'Plutôt par email ?',
    contact_message: "Bonjour Emerick ! Je suis {name}, de {business} ({trade}). J'aimerais recevoir ma maquette gratuite.",
    contact_subject: 'Ma maquette gratuite — {business}',

    // Footer
    footer_bye: 'À très vite ✌️',
    footer_tagline: 'Des sites qui donnent envie de pousser la porte.',
    footer_rights: 'Tous droits réservés.',
    footer_legal: 'Mentions légales',
    footer_made: 'Fait main à Paris',

    sticky_cta: 'Ma maquette gratuite 🎁',
  },

  EN: {
    nav_home: 'Home',
    nav_projects: 'My work',
    nav_process: 'How it works',
    nav_offer: 'Pricing',
    nav_faq: 'FAQ',
    nav_cta: 'My free mockup',

    hero_hello: "👋 Hi, I'm Emerick",
    hero_seo: 'Websites for hair salons, beauty & wellness · Paris 11th',
    hero_h1_a: 'Your salon deserves',
    hero_h1_highlight: 'better',
    hero_h1_b: 'than an Instagram page.',
    hero_sub: "I show you your future website before you pay a single cent.",
    hero_cta: 'Get my free mockup',
    hero_cta_secondary: 'See my work',
    hero_proof: '{n} happy clients · reply within 24h',
    hero_me: "that's me!",
    hero_sticker_city: 'Paris 🗼',
    hero_sticker_gift: 'Free mockup 🎁',
    hero_badge: 'tailor-made · tailor-made · ',

    marquee: ['Hair salons ✂️', 'Barbers 💈', 'Beauty salons 💅', 'Beauticians 🌸', 'Spas & massage 🧖', 'Therapists 💞', 'Sophrologists 🧘', 'Physios 💆'],

    projects_eyebrow: 'the proof',
    projects_title: 'Real websites, for real people.',
    projects_visits: 'visits/month',
    projects_cta: 'Visit',
    projects_next: 'Your business could be next.',
    projects_next_cta: 'I want one too 🙋',

    process_eyebrow: 'easy as pie',
    process_title: 'How does it work?',
    process_steps: [
      { icon: '📩', title: 'Send me your business name', tag: '30 seconds' },
      { icon: '🎨', title: 'I show you your mockup', tag: 'free · within {delay}' },
      { icon: '🚀', title: 'Like it? We go live.', tag: "if not, you pay nothing" },
    ],
    process_cta: "Let's go!",

    offer_eyebrow: 'no bad surprises',
    offer_title: 'Clear prices.',
    offer_recommended: 'my pick 👍',
    offer_plans: {
      subscription: {
        name: 'All inclusive',
        setupLabel: 'to start',
        monthlyLabel: '/month',
        commitment: '{n} months, then cancel anytime',
        features: ['🌐 Domain name', '☁️ Hosting', '📱 Mobile-perfect', '🔍 Local SEO', '📍 Optimised Google listing', '✏️ Edits included'],
      },
      oneshot: {
        name: 'Owner',
        setupLabel: 'one-off',
        monthlyLabel: '/month maintenance',
        commitment: 'No commitment',
        features: ['🔑 The site is yours', '☁️ Hosting', '📱 Mobile-perfect', '🔍 Local SEO', '🛟 Updates'],
      },
    },
    offer_cta: 'Start with the mockup',
    offer_note: "Online shop or bigger project? Let's talk, free quote.",

    testimonials_eyebrow: "don't take my word for it",
    testimonials_title: 'They say it better than me.',

    about_eyebrow: 'behind the screen',
    about_title: 'A human, not an agency.',
    about_caption: 'deep in conversation 💬',
    about_line: 'I build websites that make people want to walk into your shop.',
    about_facts: [
      '📍 Paris 11th: we can meet at your salon',
      '🤖 AI engineer: fast, never generic',
      '⚡ Reply within 24h',
      '🤝 One single contact: me',
    ],
    about_cta: 'Talk to me directly',

    faq_eyebrow: "you're probably wondering…",
    faq_title: 'FAQ',
    faq_items: [
      { q: 'Is the mockup really free?', a: "Yes. If you don't like it, we part as friends. Zero cost." },
      { q: 'How long until my site is live?', a: 'The mockup within {delay}, the live site in a few weeks.' },
      { q: "I'm not tech-savvy at all…", a: "Perfect, that's my job. Send me your photos and info, I handle the rest." },
      { q: 'What if I want to change something?', a: 'One WhatsApp message and it’s done. Small edits are included.' },
      { q: 'Where are you based?', a: 'In Paris, mainly the 11th: I can drop by your salon or practice.' },
      { q: 'Will Google find me?', a: 'Every site is optimised for local SEO, and I can boost your Google listing too.' },
    ],

    contact_eyebrow: 'your turn',
    contact_title: 'Your free mockup, within {delay}.',
    contact_sub: 'Three details and we’re off. No commitment.',
    contact_me: 'I reply personally ✌️',
    contact_business: 'Business name',
    contact_business_ph: 'e.g. Bel Hair Salon',
    contact_trade: 'Trade & city',
    contact_trade_ph: 'e.g. hairdresser, Paris 11th',
    contact_name: 'First name',
    contact_name_ph: 'e.g. Julie',
    contact_link: 'A link (Instagram, Google Maps…)',
    contact_link_ph: 'Optional',
    contact_submit: 'Send on WhatsApp',
    contact_email: 'Prefer email?',
    contact_message: "Hi Emerick! I'm {name}, from {business} ({trade}). I'd love to get my free mockup.",
    contact_subject: 'My free mockup — {business}',

    footer_bye: 'See you soon ✌️',
    footer_tagline: 'Websites that make people walk through your door.',
    footer_rights: 'All rights reserved.',
    footer_legal: 'Legal notice',
    footer_made: 'Handmade in Paris',

    sticky_cta: 'My free mockup 🎁',
  },
};
