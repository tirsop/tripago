import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)
      try {
        const res = await fetch(url)
        if (res.ok) {
          const json = await res.json()
          setIsPending(false)
          setData(json)
          setError(null)
        } else {
          throw new Error(res.statusText)
        }
      } catch (err) {
        setIsPending(false)
        setError('Couldnt fetch the data')
        console.log(err.message);
      }
    }
    fetchData() // call/initialize the function

  }, [url])

  return { data, isPending, error } // hooks always return arrays or objects
}