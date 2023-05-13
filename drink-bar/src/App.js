import Context from './Components/utils/Context';
import { useState } from 'react';
import Header from './Components/Header/Header';
import ListDrink from './Components/List-Drink/ListDrink';
import DetailsDrink from './Components/Details-Drink/DetailsDrink';
import ShopCartDrink from './Components/Shop-Cart-Drink/ShopCartDrink';


function App() {
  const [detailsDrink, setDetailsDrink] = useState({})
  const [shopCart, setShopCart] = useState([])
  return (
    

      <Context.Provider value={{detailsDrink, setDetailsDrink,shopCart,setShopCart}}>
        <Header/>
        <ListDrink/>
        <DetailsDrink/>
        <ShopCartDrink/>
      </Context.Provider>
      
  );
}

export default App;