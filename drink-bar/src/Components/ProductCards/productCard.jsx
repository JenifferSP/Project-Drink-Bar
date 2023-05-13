import React from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs'
import './productCard.css'
import propTypes from 'prop-types'
import formatCurrency from '../utils/formatCurrency'

function productCard(props) {

    const {title, thumbnail, price} = props.data;
  return (
    <section className='product-card' onClick={props.onClick}>
        <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="drink" className='card__image' />

        <div className="card__infos">
            <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
            <h2 className="card__title">{title}</h2>
            <div className="lineCard"></div>
       
        </div>
      
        <div className="container-btn-cart">
            <button type='button' className='button_add-cart'><BsFillCartPlusFill/></button>
        </div>

    </section>
  )
}

export default productCard

productCard.propTypes ={
    data: propTypes.shape({}),
}.isRequired