const headerMenuConfig = [
  {
    name: ' ',
    path: 'https://baidu.com',
    external: true,
    newWindow: false,
    id: 'Menu_mjapk',
    icon: 'setting',
  },
  { name: ' ', icon: 'dateDetail', id: 'Menu_scsv6' },
  {
    name: ' ',
    path: '/test',
    external: false,
    newWindow: false,
    id: 'Menu_j27jp',
    icon: 'person',
  },
];

const asideMenuConfig = [
  { name: '首页', path: '/home', id: 'Menu_0ogxh', icon: 'home' },
  {
    name: '元数据',
    children: [
      { name: '元数据首页', path: '/about', id: 'Menu_24e7m' },
      { name: '元数据管理', id: 'Menu_t7hku' },
    ],

    id: 'Menu_ybxip',
    icon: 'ysj',
  },

  {
    name: '数据标准',
    children: [
      {
        name: '依标建库',
        children: [
          { name: '数据模型', id: 'Menu_lgp1g' },
          { name: '模型分类管理', id: 'Menu_0njdl' },
        ],

        id: 'Menu_bdxux',
      },
    ],

    id: 'Menu_xh3to',
    icon: 'sjbz',
  },

  {
    name: '资源目录',
    children: [
      { name: '外层末尾', id: 'Menu_aewri', path: '/test' },
      { name: '新增', path: '/newAdd', id: 'Menu_3vgvm' },
    ],

    id: 'Menu_jsw1c',
    icon: 'zyml',
  },

  { name: '标签管理', children: [], id: 'Menu_adkv3', icon: 'bqgl' },
  { name: '基础配置', children: [], id: 'Menu_vy4t6', icon: 'jcpz' },
];

export { headerMenuConfig, asideMenuConfig };
