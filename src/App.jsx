import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Project6Ecom/Components/Home'
import Navbar from './Project6Ecom/Components/Navbar'
import Cart from './Project6Ecom/Components/Cart'
import About from './Project6Ecom/Components/About'
import Data from './Project6Ecom/Data'
import { useState } from 'react'


const App = () => {
  const [data,setData]=useState(Data)
  const [search, setSearch]=useState("")
  const [cart,setCart]=useState([])
 
  function handleClick(item){
    setCart([...cart,item])
  }

 

  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar setSearch={setSearch} size={cart.length} data={data} setData={setData}/>
      <Routes>
        <Route path='/' element={<Home data={data} search={search} handleClick={handleClick}/>}></Route>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path='/about/:aboutId'element={<About Data={Data}/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App