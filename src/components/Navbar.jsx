import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate, useLocation} from 'react-router-dom'
import { useSearchContext } from '../Context/SearchContext'

export const Navbar = () => {
  const context = useSearchContext()
  const navigate = useNavigate()
  const location = useLocation()

  const onSubmit = (event) => {
    event.preventDefault()
    context.setSearch(event.target.input.value)
    console.log(context.search)
    if (location.pathname !== '/') {
      navigate('/')
    }
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand' href='#'>
          <img src='http://softmehr.com/wp-content/uploads/2016/10/ecommerce-icon-shopping-store-cart.png' alt='e-Commerce' width={80} height={80} />
          <label>e-Commerce</label>
        </Link>
        <form className='d-flex' role='search' onSubmit={onSubmit}>
          <input name='input' className='form-control me-2' type='search' placeholder='Buscar productos...' aria-label='Search' />
          <button className='btn btn-secondary my-2 my-sm-0' type='submit'><FaSearch /> </button>
        </form>
        <div>
          <Link className='text-decoration-none text-body ' to='/login'> Login </Link>
          <Link className='text-decoration-none text-body' to='/signup'> Sign up </Link>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
