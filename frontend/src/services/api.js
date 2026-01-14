// Serviço de API para comunicação com o backend

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

// Função auxiliar para fazer requisições
async function request(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  if (config.body && typeof config.body === 'object') {
    config.body = JSON.stringify(config.body)
  }

  try {
    const response = await fetch(url, config)
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Erro desconhecido' }))
      throw new Error(error.detail || `Erro: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Erro na requisição:', error)
    throw error
  }
}

// API de Artistas
export const artistsAPI = {
  getAll: () => request('/artists'),
  getById: (id) => request(`/artists/${id}`),
  create: (artist) => request('/artists', {
    method: 'POST',
    body: artist,
  }),
}

// API de Músicas
export const songsAPI = {
  getAll: () => request('/songs'),
  create: (song) => request('/songs', {
    method: 'POST',
    body: song,
  }),
}

