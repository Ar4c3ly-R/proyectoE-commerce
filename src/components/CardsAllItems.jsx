import { Link } from 'react-router-dom'
import imagenotfound from '/src/assets/imagenotfound.png'

const styles = {
  imageCard: {
    width: '200px',
    height: '200px'
  }
}

const CardsAllItems = ({ product_name = {}, price, image, _id }) => {
  return (
    <Link className='text-decoration-none text-body' to={`/${_id}`}>
      <div className='card'>
        <img src={image || imagenotfound} className='card-img-top' alt='...' style={styles.imageCard} />
        <div className='card-body'>
          <h6 className='card-title'>{product_name}</h6>
          <p>${price}.00</p>
        </div>
      </div>
    </Link>
  )
}

export default CardsAllItems
