import { useParams } from 'react-router-dom'

import { useState, useEffect } from 'react'
import axios from 'axios'

// components
import CardItem from '../components/CardItem'

const Producto = () => {
  const { code } = useParams()
  console.log(code)
  const baseUrl = `https://ecomerce-master.herokuapp.com/api/v1/item/${code}`

  const [item, SetItem] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  console.log(item, isLoading)

  const fetchItem = async () => {
    const result = await axios(baseUrl)
    console.log(result.data)
    SetItem(result.data)
    setIsLoading(false)
  }

  useEffect(() => {
    try {
      fetchItem()
    } catch (err) {
      setIsLoading(true)
    }
  }, [])

  return (
    <div className='gy-5 py-5 ps-4 pe-4'>
      {
        isLoading
          ? <p>Cargando...</p>
          : <aside className='d-flex'>
            <CardItem {...item} />
          </aside>
      }
    </div>
  )
}

export default Producto
