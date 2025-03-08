import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload
            const index = state.products.find(item => item.id === newItem.id)
            if (index) {//如果購物車有相同產品
                index.quantity++
                index.totalPrice += newItem.price
            } else { //若購物車沒有相同產品，state.products需要建立新品項
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    img: newItem.image
                })
            }
            state.totalPrice += newItem.price
            state.totalQuantity++
        },
        removeFromCart(state, action) {
            const removeItem = action.payload
            const compare = state.products.find(item => item.id === removeItem.id)
            console.log(removeItem.id);

            if (compare) {
                state.totalPrice -= compare.totalPrice //購物車總金額要扣掉該品項總金額
                state.totalQuantity -= compare.quantity
                state.products = state.products.filter(item => item.id !== removeItem.id) //要移除的id品項篩選掉，形成新array
            }


        },
        increaseCount(state, aciton) {
            const increaseItem = aciton.payload
            const compare = state.products.find(item => item.id === increaseItem.id)
            if (compare) {
                compare.quantity++
                compare.totalPrice += increaseItem.price
                state.totalQuantity++
                state.totalPrice += increaseItem.price
            }
        },
        decreaseCount(state, aciton) {
            const decreaseItem = aciton.payload
            const compare = state.products.find(item => item.id === decreaseItem.id)
 
            if (compare) {
                compare.quantity--
                compare.totalPrice -= decreaseItem.price
                state.totalQuantity--
                state.totalPrice -= decreaseItem.price
            } 
            if (compare.quantity == 0) {
                state.products = state.products.filter(item => item.id !== decreaseItem.id)
            }
            
        }

    }

})



export const { addToCart, removeFromCart, increaseCount, decreaseCount } = cartSlice.actions
export default cartSlice.reducer

