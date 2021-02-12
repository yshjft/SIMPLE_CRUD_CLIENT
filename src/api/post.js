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
    const response = await api.post('/posts', data)
    return response.data
  } catch (error) {
    throw error
  }
}
