export const initialState = {
  Topbar: {
    display: false,
    data: {
      links: {
        '1': {
          title: 'Home',
          href: '/',
        },
        '2': {
          title: 'Artwork',
          href: '/',
        },
        '3': {
          title: 'Contact',
          href: '/',
        },
      },
    },
  },
  footer: {
    display: false,
    data: {
      '1': {
        name: 'My Objective',
        description:
          "Nous établissons des relations durables avec nos patients, c'est pourquoi nous prenons le temps de faire votre connaissance, de connaître votre vision et votre style de vie. Rendez-nous visite aujourd'hui pour un examen complet de la vue et visitez notre grande sélection de montures de designers.",
      },
      '2': {
        name: 'Contact Me',
        data: {
          '1': {
            type: 'link',
            title: 'facebook',
            href: 'http://fb.com',
          },
          '2': {
            type: 'link',
            title: 'instagram',
            href: 'http://instagram.com',
          },
          '3': {
            type: 'phone',
            title: '+213 541 554 123',
          },
          '4': {
            type: 'email',
            title: 'feniclaw@gmail.com',
          },
        },
      },
    },
  },
  slider: {
    numberOfSlides: 3,
    slides: {
      '1': {
        photo:
          'https://www.fotor.com/loopBannerImg/indexBannerImg/banner-01.jpg',
      },
    },
  },
  sidebar: {
    displayed: false,
    categories: {
      '1': {
        title: 'drawing',
        display: true,
        types: {
          '1': {
            title: 'ink',
            checked: false,
          },
          '2': {
            title: 'digital',
            checked: false,
          },
          '3': {
            title: 'fantasy',
            checked: false,
          },
        },
      },
      '2': {
        title: 'writing',
        display: true,
        types: {
          '1': {
            title: 'stories',
            checked: false,
          },
          '2': {
            title: 'piece of mind',
            checked: false,
          },
          '3': {
            title: 'novels',
            checked: false,
          },
        },
      },
    },
    products: {
      loading: false,
      page: 1,
      numberOfItems: 5,
      items: {
        '1': {
          title: 'product one',
          date: '1596565397527',
          image:
            'https://res.cloudinary.com/visionstorebiskra/image/upload/w_1024,c_scale/v1571255122/ybhdkynty0ue9daruka9.jpg',
          type: 'writing',
          label: ['ink', 'digital', 'fantasy'],
        },
        '2': {
          title: 'product two',
          date: '1596565397527',
          image:
            'https://res.cloudinary.com/visionstorebiskra/image/upload/w_1024,c_scale/v1571255122/ybhdkynty0ue9daruka9.jpg',
          type: 'drawing',
          label: ['stories', 'piece of mind', 'novels'],
        },
        '3': {
          title: 'product 3',
          date: '1596565397527',
          image:
            'https://res.cloudinary.com/visionstorebiskra/image/upload/w_1024,c_scale/v1571255122/ybhdkynty0ue9daruka9.jpg',
          type: 'writing',
          label: ['digital', 'fantasy'],
        },
        '4': {
          title: 'product 4',
          date: '1596565397527',
          image:
            'https://res.cloudinary.com/visionstorebiskra/image/upload/w_1024,c_scale/v1571255122/ybhdkynty0ue9daruka9.jpg',
          type: 'writing',
          label: ['ink', 'fantasy'],
        },
        '5': {
          title: 'product 5',
          date: '1596565397527',
          image:
            'https://res.cloudinary.com/visionstorebiskra/image/upload/w_1024,c_scale/v1571255122/ybhdkynty0ue9daruka9.jpg',
          type: 'writing',
          label: ['ink'],
        },
      },
    },
  },
};
