export const NAV_LINKS = [
  { id: 'home', labelKey: 'nav_home', href: '#home' },
  { id: 'projects', labelKey: 'nav_projects', href: '#projects' },
  { id: 'process', labelKey: 'nav_process', href: '#process' },
  { id: 'offer', labelKey: 'nav_offer', href: '#offer' },
  { id: 'faq', labelKey: 'nav_faq', href: '#faq' },
];

export const ANIMATION_DURATION = { fast: 200, normal: 300, slow: 500 };
export const SCROLL_OFFSET = 80;
export const INTERSECTION_THRESHOLD = 0.1;
export const BREAKPOINTS = { sm: 640, md: 768, lg: 1024, xl: 1280 };
export const WHATSAPP_NUMBER = '33663732677';
export const PHONE_DISPLAY = '+33 6 63 73 26 77';
export const EMAIL = 'emerick.lafortune@gmail.com';

export const whatsappUrl = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
