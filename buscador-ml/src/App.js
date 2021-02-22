import React, { useEffect } from "react"
import { productsSelector, getProducts } from "./features/products/productsSlice"
import { useSelector, useDispatch } from "react-redux"

function App() {
 const dispatch = useDispatch()
 const { products, loading, errors } = useSelector(productsSelector)
console.log(products, loading, errors)
useEffect(() => {
 dispatch(getProducts())
 }, [dispatch])
return <div className="App">Hello world</div>
}
export default App
