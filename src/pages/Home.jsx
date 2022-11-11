import CardsAllItems from '../components/CardsAllItems'
import { useSearchContext } from '../Context/SearchContext'

export const Home = () => {
  const context = useSearchContext()

  return (
    <div className='row gx-3 gy-5 py-5 ps-4 pe-4'>
      <h5>Nuestros productos</h5>
      {
        context.isLoading
          ? <div className='d-flex justify-content-center'>
            <div className='spinner-border text-warning' role='status'>
              <span className='visually-hidden d-flex justify-content-center'>Loading...</span>
            </div>
            </div>

          : context.Data.filter(item => {
            if (context.search === '') {
              return item
            } else if (item.product_name.toLowerCase().includes(context.search.toLowerCase())) {
              return item
            }
            return null
          })
            .map((item, index) => (
              <aside key={index} className='col-md-2' height='30 rem'>
                <CardsAllItems {...item} />
              </aside>
            ))
      }
    </div>
  )
}

export default Home
