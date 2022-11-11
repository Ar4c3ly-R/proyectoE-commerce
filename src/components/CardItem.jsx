import React from 'react'

const CardItem = ({ product_name, description, image, price }) => {
  return (
    <section className='row d-flex justify-content-center'>
      <div className='col-md-4'>
        <img src={image || 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'} className='img-fluid rounded-start ' alt='...' />
      </div>
      <div className='col-md-8'>
        <div className='card mb-3 col-md-5' style={{ maxWidth: 540 }}>
          <div className='row g-0'>
            <div className='col-md-12'>
              <div className='card-body'>
                <h5 className='card-title'>{product_name}</h5>
                <p className='card-text'>Details: {description}</p>
                <p className='card-text'>Price: ${price}.00</p>
                <button type='button' class='btn btn-warning'>Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 

export default CardItem
