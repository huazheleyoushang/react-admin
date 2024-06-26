import { Login } from '../interface/index';
import qs from 'qs';

import request from '@/utils/request';

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
  return request.post<Login.ResLogin>('/login', qs.stringify(params)); // post 请求携带 表单 参数  ==>  application/x-www-form-urlencoded
  return request.post<Login.ResLogin>('/login', params, {
    headers: { noLoading: true },
  }); // 控制当前请求不显示 loading
};

// * 获取按钮权限
export const getAuthorButtons = () => {
  return request.get<Login.ResAuthButtons>('/auth/buttons');
};

// * 获取菜单列表
export const getMenuList = () => {
  return request.get<Menu.MenuOptions[]>('/menu/list');
};
