import React, {useContext, useEffect} from 'react'
import './DetailsDrink.css'
import Img_Drink from  '../../Img/bebida.png'
import Context from '../utils/Context'


function DetailsDrink() {
  const {detailsDrink,shopCart,setShopCart}= useContext(Context)

  const addDrinkToShopCart= (drink)=>{
    //let newShopCart= shopCart.push(drink)
    //setShopCart(newShopCart)
    setShopCart([...shopCart,drink])
    //console.log (shopCart)
  }

  if(!(detailsDrink && detailsDrink.title)){
    return (

      <div>

      </div>

    )
  }else{
    return (
      <div className='Container_DetailsDrink'>
        <div className="Components_DetailsDrink">
          <div className="img_details_drink">
            <div className="background_drink">
            <img src={detailsDrink.thumbnail} alt="img-drink" width='175px' className='img_drink'/> </div>     
          </div>
          <div className="details-drink">
            <div className="line"></div>
              <div className="model-drink">
                <h5 className='title-price-model' >Modelo: &nbsp;</h5> 
                <p style={{fontSize:'13px', textTransform:'unset'}}> {detailsDrink.title}</p>
              </div>
              <div className="price-drink">
                <h5 className='title-price-model'>Preço: &nbsp;</h5> 
                <p> {detailsDrink.price}</p>            
            </div>
            <button className='btn-details-drink' onClick={()=> addDrinkToShopCart(detailsDrink)} >comprar</button>
          </div>
        </div>
        { <div className="Footer_Details">
          <h6 className='title-details-drink'>Detalhes:</h6>
          <p className='text-drink-details'>{detailsDrink.title}</p>
        </div>}
      </div>
    )

  }

}

export default DetailsDrink