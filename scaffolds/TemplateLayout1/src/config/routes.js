import React from 'react';

import BasicLayout from '@/layouts/BasicLayout';

const About = React.lazy(() => import('@/pages/About'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));
const Home = React.lazy(() => import('@/pages/Home'));

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      { path: '/about', component: About },
      { path: '/home', component: Home },
      { component: NotFound },
      { path: '', component: Home },
    ],
  },
];

export default routerConfig;
