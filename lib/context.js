import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const [qty, setQty] = useState(1);


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


    return (
        <ShopContext.Provider value={{ qty, increaseQty, decreaseQty, showCart, setShowCart, cartItems, onAdd }} >
            {children}
        </ShopContext.Provider>
    )
}

export const useStateContext = () => useContext(ShopContext) 