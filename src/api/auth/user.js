import request from '@/utils/request'

export function fetchUser(params) {
  return request({
    url: '/auth/user',
    method: 'get',
    params
  })
}

export function addUser(data) {
  return request({
    url: '/auth/user',
    method: 'post',
    data
  })
}

export function updateUser(id, data) {
  return request({
    url: '/auth/user/' + id,
    method: 'put',
    data
  })
}

export function deleteUser(params) {
  return request({
    url: '/auth/user/' + params.id,
    method: 'delete'
  })
}
