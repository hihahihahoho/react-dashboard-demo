import { MenuList } from '@/interface/layout/menu.interface';
import { mock, intercepter } from '../config';

const mockMenuList: MenuList = [
  {
    code: 'dashboard',
    label: {
      vi_VN: 'Trang chủ',
      en_US: 'dashboard',
    },
    icon: 'HomeOutlined',
    path: '/dashboard',
  },
  {
    code: 'quanLyCuaHang',
    label: {
      vi_VN: 'Quản lý cửa hàng',
      en_US: 'Permission',
    },
    path: '/quanLyCuaHang',
    children: [
      {
        code: 'danhMucMo',
        label: {
          vi_VN: 'Danh mục MO',
          en_US: 'Route Permission',
        },
        path: '/quanLyCuaHang/danhMucMo',
      },
    ],
  },
  {
    code: 'component',
    label: {
      vi_VN: '组件',
      en_US: 'Component',
    },
    path: '/component',
    children: [
      {
        code: 'componentForm',
        label: {
          vi_VN: '表单',
          en_US: 'Form',
        },
        path: '/component/form',
      },
      {
        code: 'componentTable',
        label: {
          vi_VN: '表格',
          en_US: 'Table',
        },
        path: '/component/table',
      },
      {
        code: 'componentSearch',
        label: {
          vi_VN: '查询',
          en_US: 'Search',
        },
        path: '/component/search',
      },
      {
        code: 'componentAside',
        label: {
          vi_VN: '侧边栏',
          en_US: 'Aside',
        },
        path: '/component/aside',
      },
      {
        code: 'componentTabs',
        label: {
          vi_VN: '选项卡',
          en_US: 'Tabs',
        },
        path: '/component/tabs',
      },
      {
        code: 'componentRadioCards',
        label: {
          vi_VN: '单选卡片',
          en_US: 'Radio Cards',
        },
        path: '/component/radio-cards',
      },
    ],
  },

  {
    code: 'business',
    label: {
      vi_VN: '业务',
      en_US: 'Business',
    },
    icon: 'permission',
    path: '/business',
    children: [
      {
        code: 'basic',
        label: {
          vi_VN: '基本',
          en_US: 'Basic',
        },
        path: '/business/basic',
      },
      {
        code: 'withSearch',
        label: {
          vi_VN: '带查询',
          en_US: 'WithSearch',
        },
        path: '/business/with-search',
      },
      {
        code: 'withAside',
        label: {
          vi_VN: '带侧边栏',
          en_US: 'WithAside',
        },
        path: '/business/with-aside',
      },
      {
        code: 'withRadioCard',
        label: {
          vi_VN: '带单选卡片',
          en_US: 'With Nav Tabs',
        },
        path: '/business/with-radio-cards',
      },
      {
        code: 'withTabs',
        label: {
          vi_VN: '带选项卡',
          en_US: 'With Tabs',
        },
        path: '/business/with-tabs',
      },
    ],
  },
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
