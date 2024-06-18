// 全局固定配置项 只做导出不做修改

// * 首页地址（默认）
export const HOME_URL: string = '/home/index';

// * Tabs（黑名单地址，不需要添加到 tabs 的路由地址，暂时没用）
export const TABS_BLACK_LIST: string[] = ['/404', '/layout', '/login'];

// * 高德地图key
export const MAP_KEY: string = '';

interface Imenu {
  icon: string;
  title: string;
  path: string;
  children?: Imenu[];
}

export const menuConfigList: Imenu[] = [
  {
    icon: 'HomeOutlined',
    title: '首页',
    path: '/home/index',
  },
  {
    icon: 'ProfileOutlined',
    title: '菜单嵌套',
    path: '/menu',
    children: [
      {
        icon: 'AppstoreOutlined',
        path: '/menu/menu1',
        title: '菜单1',
      },
      {
        icon: 'AppstoreOutlined',
        path: '/menu/menu2',
        title: '菜单2',
        children: [
          {
            icon: 'AppstoreOutlined',
            path: '/menu/menu2/menu21',
            title: '菜单2-1',
          },
          {
            icon: 'AppstoreOutlined',
            path: '/menu/menu2/menu22',
            title: '菜单2-2',
            children: [
              {
                icon: 'AppstoreOutlined',
                path: '/menu/menu2/menu22/menu221',
                title: '菜单2-2-1',
              },
              {
                icon: 'AppstoreOutlined',
                path: '/menu/menu2/menu22/menu222',
                title: '菜单2-2-2',
              },
            ],
          },
          {
            icon: 'AppstoreOutlined',
            path: '/menu/menu2/menu23',
            title: '菜单2-3',
          },
        ],
      },
      {
        icon: 'AppstoreOutlined',
        path: '/menu/menu3',
        title: '菜单3',
      },
    ],
  },
  {
    icon: 'ExclamationCircleOutlined',
    title: '错误页面',
    path: '/error',
    children: [
      {
        icon: 'AppstoreOutlined',
        path: '/404',
        title: '404页面',
      },
    ],
  },
];
