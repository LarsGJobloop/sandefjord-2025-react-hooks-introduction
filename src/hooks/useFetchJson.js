import { useEffect, useState } from "react"

export function useFetchJson(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const isLoading = !(data || error)

  useEffect(() => {
    async function getJson() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (error) {
        setError(error)
      }
    }
    getJson()
    },
    [url]
  )

  return {
    data,
    error,
    isLoading,
  }
}