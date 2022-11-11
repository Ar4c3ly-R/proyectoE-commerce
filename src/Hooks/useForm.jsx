import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  // Estado unico para guardar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults)

  // Cargar los valores por defecto
  useEffect(() => {
    setInput({ ...defaults })
  }, [])

  // Funcion que se ejecuta cuando se escucha un cambio en un input
  const handleInputChange = (event) => {
    const { name, value } = event.target
    // Equivalente a:
    // const name = event.target.name
    // const value =  event.target.value
    // console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  // Funcion que se ejecuta cuando se envia el formulario
  const handleSubmit = (event) => {
    event.preventDefault() // Evito que se recargue la pagina y rompa el SPA
    callback(input) // Esta es la funcion que se recibe por parametro
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
