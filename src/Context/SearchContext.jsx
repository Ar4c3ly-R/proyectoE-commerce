import { createContext, useState, useEffect, useContext } from 'react'
// import useGetData from '../Hooks/useGetData'
import axios from 'axios'

const SearchContext = createContext()

function ItemsProvider (props) {
  const [Data, SetData] = useState([])
  const [isLoading, SetIsLoading] = useState(true)
  const [item, setItem] = useState([])
  const [search, setSearch] = useState('')

  const fetchItems = async () => {
    const result = await axios('https://ecomerce-master.herokuapp.com/api/v1/item')
    SetData(result.data)
    SetIsLoading(false)
    console.log(Data, isLoading)
  }

  useEffect(() => {
    try {
      fetchItems()
    } catch (err) {
      SetIsLoading(true)
    }
  }, [])

  const value = {
    Data,
    isLoading,
    item,
    setItem,
    search,
    setSearch
  }

  return (
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  )
}

const useSearchContext = () => {
  const context = useContext(SearchContext)
  return context
}

export {
  ItemsProvider,
  useSearchContext
}
