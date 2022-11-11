import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetData = (url) => {
  const [Data, SetData] = useState([])
  const [isLoading, SetIsLoading] = useState(true)

  const fetchItems = async () => {
    const result = await axios(url)
    SetData(result.data)
    SetIsLoading(false)
  }

  useEffect(() => {
    try {
      fetchItems()
    } catch (err) {
      SetIsLoading(true)
    }
  }, [])

  return (
    { Data, isLoading }
  )
}

export default useGetData
