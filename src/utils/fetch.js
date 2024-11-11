import { useRouter } from 'vue-router'

export const get = async (path, { headers, isAuthenticated = true } = {}) => {
  const fullUrl = `${import.meta.env.VITE_API_DOMAIN}/${path}`

  if (isAuthenticated) {
    const token = localStorage.getItem('token')

    headers = {
      Authorization: `Bearer ${token}`,
      ...headers,
    }
  }

  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  })

  if (response.status === 401 || response.status === 403) {
    const router = useRouter()
    router.push('/login')
  } else if (response.ok) {
    return await response.json()
  }
}

export const post = async (
  path,
  { body, headers, isAuthenticated = true } = {},
) => {
  const fullUrl = `${process.env.API_DOMAIN}/${path}`

  if (isAuthenticated) {
    const token = localStorage.getItem('token')

    headers = {
      Authorization: `Bearer ${token}`,
      ...headers,
    }
  }

  const response = await fetch(fullUrl, {
    method: 'POST',
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  })

  if (response.status === 401) {
    const router = useRouter()
    router.push('/login')
  } else if (response.ok) {
    return await response.json()
  }
}
