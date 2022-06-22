import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      setIsPending(true)

      try {
        const res = await fetch(url, { signal: controller.signal })
        if (res.ok) {
          const json = await res.json()
          setIsPending(false)
          setData(json)
          setError(null)
        } else {
          throw new Error(res.statusText)
        }
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setIsPending(false)
          setError('Couldnt fetch the data')
          console.log(err.message);
        }
      }
    }
    fetchData() // call/initialize the function

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, isPending, error } // hooks always return arrays or objects
}