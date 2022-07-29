import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const [qty, setQty] = useState(1);
    const [total, setTotal] = useState(0);


    // increase product qty
    const increaseQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decreaseQty = () => {
        setQty(prevQty => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1;
        })
    }

    // add product to cart
    const onAdd = (product, quantity) => {
        // increase total 
        setTotal(prevTotal => prevTotal + quantity)
        // Check if already in Cart
        const existingItem = cartItems.find(item => item.slug === product.slug);
        if (existingItem) {
            setCartItems(cartItems.map(item => {
                if (item.slug === product.slug) {
                    item.qty += quantity;
                }
                return item;
            }
            ))
        } else {
            setCartItems([...cartItems, { ...product, qty: quantity }])
        }
    }

    // remove product from cart
    const onRemove = (product) => {
        // decrease total 
        setTotal(prevTotal => prevTotal - 1)


        const existingItem = cartItems.find((item) => item.slug === product.slug);
        console.log(existingItem);
        if (existingItem.qty === 1) {
            setCartItems(cartItems.filter((item) => item.slug !== product.slug))
        } else {
            setCartItems(cartItems.map((item) => {
                if (item.slug === product.slug) {
                    item.qty -= 1;
                }
                return item;
            }
            ))
        }
    }


    return (
        <ShopContext.Provider value={{ qty, increaseQty, decreaseQty, showCart, setShowCart, cartItems, onAdd, onRemove, total }} >
            {children}
        </ShopContext.Provider>
    )
}

export const useStateContext = () => useContext(ShopContext) 