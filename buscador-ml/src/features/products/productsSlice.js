import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
 products: [],
 loading: false,
 errors: "",
}
const productsSlice = createSlice({
 name: "products",
 initialState,
 reducers: {
 setLoading: (state, { payload }) => {
 state.loading = payload
 },
setErrors: (state, { payload }) => {
 state.errors = payload
 },
setProducts: (state, { payload }) => {
 state.products = payload
 },
 },
})
export const { setLoading, setErrors, setProducts } = productsSlice.actions

export default productsSlice.reducer

export const productsSelector = (state) => state.productsStore

export const getProducts = () => {
    return async dispatch => {
    dispatch(setLoading(true))
    try {
    const baseURL = "https://api.mercadolibre.com/sites/MLA/search?q=iphone6&limit=4"
   const res = await axios.get(
    `${baseURL}`
    )
   dispatch(setLoading(false))
    dispatch(setProducts(res.data))
    } catch (error) {
    dispatch(setErrors(error))
    dispatch(setLoading(false))
    }
    }
}