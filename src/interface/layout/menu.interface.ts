interface MenuItem {
  /** menu item code */
  code: string;
  /** menu labels */
  label: {
    vi_VN: string;
    en_US: string;
  };
  /** 图标名称
   *
   * 子子菜单不需要图标
   */
  icon?: any;
  /** 菜单路由 */
  path: string;
  /** 子菜单 */
  children?: MenuItem[];
}

export type MenuChild = Omit<MenuItem, 'children'>;

export type MenuList = MenuItem[];
