import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)
      const json = await res.json()
      setData(json)
    }
    fetchData() // call/initialize the function

  }, [url])

  return { data } // hooks always return arrays or objects
}