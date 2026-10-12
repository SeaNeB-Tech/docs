import {
  Smartphone,
  Briefcase,
  Car,
  Newspaper,
  Heart,
  Home,
  UtensilsCrossed,
} from 'lucide-react';

/*
 * Product data — single source of truth.
 * Used by: Homepage cards, Product Launcher, Footer.
 *
 * LOGO SETUP:
 * 1. Export each logo as 120×120px PNG (transparent background).
 * 2. Place in: static/img/products/<filename>.png
 * 3. Set the `logo` field below to '/img/products/<filename>.png'
 *
 * If `logo` is set   → PNG image is rendered.
 * If `logo` is empty  → fallback lucide `icon` is rendered.
 */

import { translate } from '@docusaurus/Translate';

export const products = [
  {
    id: 'app',
    name: translate({ message: 'Seaneb App', id: 'product.app.name' }),
    description: translate({ message: 'Local updates, offers and discovery.', id: 'product.app.desc' }),
    category: translate({ message: 'DISCOVERY', id: 'product.category.discovery' }),
    href: '/docs/Seaneb App/overview',
    icon: Smartphone,
    logo: '/img/products/seaneb-app.png',
  },
  {
    id: 'jobs',
    name: translate({ message: 'Seaneb Jobs', id: 'product.jobs.name' }),
    description: translate({ message: 'Local hiring and recruitment tools.', id: 'product.jobs.desc' }),
    category: translate({ message: 'HIRING', id: 'product.category.hiring' }),
    href: '/docs/Seaneb Jobs/overview',
    icon: Briefcase,
    logo: '/img/products/seaneb-jobs.png',
  },
  {
    id: 'auto',
    name: translate({ message: 'Seaneb Auto', id: 'product.auto.name' }),
    description: translate({ message: 'Used vehicles and supporting services.', id: 'product.auto.desc' }),
    category: translate({ message: 'AUTOMOTIVE', id: 'product.category.auto' }),
    href: '/docs/Seaneb Auto/overview',
    icon: Car,
    logo: '/img/products/seaneb-auto.png',
  },
  {
    id: 'tiffin',
    name: translate({ message: 'Tiffin Service', id: 'product.tiffin.name' }),
    description: translate({ message: 'Daily meal plans and subscriptions.', id: 'product.tiffin.desc' }),
    category: translate({ message: 'FOOD', id: 'product.category.food' }),
    href: '/docs/Tiffin Service/overview',
    icon: UtensilsCrossed,
    logo: '/img/products/tiffin-service.png',
  },
  {
    id: 'news',
    name: translate({ message: 'Seaneb News', id: 'product.news.name' }),
    description: translate({ message: 'Hyper-local news aggregator platform.', id: 'product.news.desc' }),
    category: translate({ message: 'MEDIA', id: 'product.category.media' }),
    href: '/docs/Seaneb News/overview',
    icon: Newspaper,
    logo: '/img/products/seaneb-news.png',
    comingSoon: true,
  },
  {
    id: 'ngo',
    name: translate({ message: 'Seaneb NGO', id: 'product.ngo.name' }),
    description: translate({ message: 'Local causes, mankind activities and updates.', id: 'product.ngo.desc' }),
    category: translate({ message: 'COMMUNITY', id: 'product.category.community' }),
    href: '/docs/Seaneb NGO/overview',
    icon: Heart,
    logo: '/img/products/seaneb-ngo.png',
    comingSoon: true,
  },
  {
    id: 'property',
    name: translate({ message: 'Seaneb Property', id: 'product.property.name' }),
    description: translate({ message: 'Local properties to buy, rent or sell.', id: 'product.property.desc' }),
    category: translate({ message: 'REAL ESTATE', id: 'product.category.realestate' }),
    href: '/docs/Seaneb Property/overview',
    icon: Home,
    logo: '/img/products/seaneb-property.png',
    comingSoon: true,
  },
];
