
export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '#',
    },
    {
      text: 'Productos',
      href: '#productos',
    },
    {
      text: 'Sevicios',
      href: '#servicios',
    },
    {
      text: 'Sobre Nosotros',
      href: '#nosotros',
    },
    {
      text: 'Contáctanos',
      href: '#contacto',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Socials',
      links: [
        { text: 'info@sespesoft.com', href: 'mailto:info@sespesoft.com' },
      ],
      socialLinks: [
        { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/sespesoft' },
        { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/sespesoft/' },
        { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/channel/UC_arUmUpkQH6EVBJW1JDxSQ' },
        { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/sespesoft' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'Productos', href: '#productos' },
        { text: 'Servicios', href: '#servicios' },
        { text: 'Sobre Nosotros', href: '#nosotros' },
        { text: 'Contáctanos', href: '#contacto' },
      ],
      socialLinks: [
      ],
    },
    {
      title: 'Location & Contact',
      links: [
        { text2: 'San Jose de Cúcuta - Norte de Santander'},
        { text2: 'Calle 5 #0-14 Barrio LLeras '},
        { text2: 'Cel. 3174309332'},
      ],
      socialLinks: [
      ],
    },
  ],
  footNote: `
   SESPESOFT S.A.S. ©2024
  `,
};
