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
    // formdata로 보낼 경우 axios의 content-type에 multipart/form-data를 반드시 추가해야한다.
    api.defaults.headers.post['Content-Type'] = 'multipart/form-data'
    const response = await api.post('/posts', data)
    return response.data
  } catch (error) {
    throw error
  }
}

export async function putPosts(id, data) {
  try {
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
