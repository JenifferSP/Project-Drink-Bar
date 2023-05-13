import React, {useContext,useState,useEffect} from 'react'
import './ListDrink.css'
import {FaSearch} from 'react-icons/fa'
import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCards/productCard'
import Context from '../utils/Context'

function ListDrink() {
  const [products, setProducts] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [debouncedSearchValue,setdebouncedSearchValue] = useState('')
  //setSearchValue(target.value)
  const {setDetailsDrink}= useContext(Context)

  useEffect(() =>{
    /* */
    fetchProducts( 'drnks').then((response) =>{
      setProducts(response);
      console.log(response)
    });
  }, []);

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setdebouncedSearchValue(searchValue);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [searchValue, 500]);

  useEffect(() =>{
    fetchProducts( 'drnks').then((response) =>{
      let prods = response.filter(prod => prod.title.toLowerCase().includes(debouncedSearchValue.toLowerCase())) 
      setProducts(prods);
    });
  }, [debouncedSearchValue]);

  const selectProdut = (produto) => {
    console.log (produto)
    setDetailsDrink(produto)
  }
      
  return (
    <div className='Container_ListDrink'>
      <div className="Components_ListDrink">
      
        <div className="Container_inputSearch">
          <input type="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='inputSearch'  placeholder='Sua sede é de que?...' required/>
          <button type="submit" className='Button_search'><FaSearch/>
          </button>
        </div>
        <section className="products_container">
           {
            products.map((product) => <ProductCard onClick={() => selectProdut(product)} key={product.id} data={product}/>)
           }
        </section>

      </div>    
    </div>
  )
}

export default ListDrink