import { request } from 'umi';
import { TableListParams, TableListItem } from './data.d';

export async function queryRule(params?: TableListParams) {
  return request('/api/user/list', {
    params,
  });
}

export async function removeRuleOne(params: { id: number }) {
  return request('/api/user/delete', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function removeRule(params: { key: number[] }) {
  return request('/api/rule/delete', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListItem) {
  return request('/api/user/add', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/user/update', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
