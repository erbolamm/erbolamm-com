import { useState, useCallback } from 'react'
import type { UniverseNode } from '../types'

export function useGithubMemory() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchUserRepos = useCallback(async (username: string) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`)
      
      if (!res.ok) {
        throw new Error(`GitHub API error: ${res.statusText}`)
      }
      
      const data = await res.json()

      const repoNodes: UniverseNode[] = data.map((repo: any) => ({
        id: `repo-${repo.name}`,
        label: repo.name,
        size: 14,
        color: '#FFA726',
        emoji: '🐙',
        subtitle: repo.description ? (repo.description.length > 40 ? repo.description.slice(0, 37) + '...' : repo.description) : 'Repositorio GitHub',
        url: repo.html_url,
        type: 'proyecto',
        pillar: 'herramientas',
        status: 'active'
      }))

      return repoNodes
    } catch (err: any) {
      console.error('Error fetching GitHub repos:', err)
      setError(err.message)
      return []
    } finally {
      setLoading(false)
    }
  }, [])

  return { fetchUserRepos, loading, error }
}
