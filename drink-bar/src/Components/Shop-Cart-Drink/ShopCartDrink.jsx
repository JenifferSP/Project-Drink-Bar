import React,{useContext} from 'react'
import './ShopCartDrink.css'
import {BsFillCartXFill} from 'react-icons/bs'
import Context from '../utils/Context'

function ShopCartDrink() {
    const {shopCart}= useContext(Context)

    return (
        <div>
        <div className="Container_ShopCartDrink">
            <div className="Components_ShopCartDrink">
            <h3 className='title-my-kart'>My Cart</h3>
            <span className='cart-status'>{shopCart.length}</span>
            {shopCart.map((drink)=>{
                return (
                    <div key={drink.id} className="Check-Box-cart-Drink">
                       <input type="checkbox" /> 
                            <div className="Container-img-drink-kart">
                                <div className="img-drink-kart">
                                    <img src={drink.thumbnail} alt="img-drink" className='img-drink' width='70px'/>
                                </div>
                                <div className='model-price-drink'>
                                    <h6 className='text-detail-shp-cart-drink'>{drink.title}</h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <p>{drink.price}</p>
                                </div>
                                <button className='btn-delete-Product' ><BsFillCartXFill/></button>
                            </div>        
                    </div> 
                )
            })}
        
                
            </div>
        </div>
                <div className="Footer_Kart">
                    <h6 className='title-total-drink'>Total:&nbsp;{shopCart.reduce((soma,drink)=>soma+drink.price,0)}</h6>
                    <button className='btn-drink-kart'>Concluir</button>
                </div>    
    </div>

  )

  
}

export default ShopCartDrink