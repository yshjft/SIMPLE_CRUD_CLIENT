import api from './index'

export async function getPosts() {
  try {
    const response = await api.get('/posts')
    return response.data
  } catch (error) {
    throw error
  }
}

export async function getPostWithId(id) {
  try {
    const response = await api.get(`/posts/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export async function postPosts(data) {
  try {
    api.defaults.headers.post['Content-Type'] = 'multipart/form-data'
    const response = await api.post('/posts', data)
    return response.data
  } catch (error) {
    throw error
  }
}

export async function putPosts(id, data) {
  try {
    api.defaults.headers.post['Content-Type'] = 'multipart/form-data'
    const response = await api.put(`/posts/${id}`, data)
    return response.data
  } catch (error) {
    throw error
  }
}

export async function deletePostWithId(id) {
  try {
    const response = await api.delete(`/posts/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}
