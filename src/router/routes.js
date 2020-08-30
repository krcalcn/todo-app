const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/PageTodo.vue'),
      },
      {
        path: '/settings',
        component: () => import('pages/Settings.vue'),
      },
      {
        path: '/settings/help',
        component: () => import('pages/PageHelp.vue'),
      },
      {
        path: '/test',
        component: () => import('pages/Index2.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
