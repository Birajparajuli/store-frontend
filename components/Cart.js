import { useStateContext } from "../lib/context"
import { CartWrapper, CartStyle, Card, CardInfo, EmptyStyle, Quantity, Checkout } from "../styles/CartStyles";
import { BsBagX } from 'react-icons/bs'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import getStripe from "../lib/getStripe";

// PAyment Integration
const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartItems)
    })
    const data = await response.json();
    await stripe.redirectToCheckout({
        sessionId: data.id
    })

}


export default function Cart() {
    const { cartItems, setShowCart, onAdd, onRemove, totalPrice } = useStateContext();
    // PAyment Integration
    const handleCheckout = async () => {
        const stripe = await getStripe();
        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartItems)
        })
        const data = await response.json();
        await stripe.redirectToCheckout({
            sessionId: data.id
        })

    }
    return (
        <CartWrapper
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCart(false)}>
            <CartStyle
                initial={{ x: "50%" }}
                animate={{ x: " 0%" }}
                exit={{ x: "50%" }}
                transition={{ type: "tween" }}
                layout

                onClick={(e) => e.stopPropagation()}>
                {cartItems.length < 1 && (
                    <EmptyStyle
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}

                    >
                        <BsBagX />
                        <h3>There is nothing in your bag.😥</h3>

                    </EmptyStyle>

                )}
                {cartItems.length >= 1 && (
                    cartItems.map(item => {
                        return (
                            <Card
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                layout
                                key={item.slug}>
                                <img src={item.image.data.attributes.formats.thumbnail.url} alt={item.title} />
                                <CardInfo>
                                    <h3>{item.title}</h3>
                                    <h3>$ {item.price}</h3>

                                    <Quantity>
                                        <span>Quantity</span>
                                        <AiFillMinusCircle onClick={() => onRemove(item)} />
                                        <p>{item.qty}</p>
                                        <AiFillPlusCircle onClick={() => onAdd(item, 1)} />
                                    </Quantity>
                                </CardInfo>
                            </Card>
                        )
                    }))}

                {cartItems.length >= 1 && (
                    <Checkout layout>
                        <h3>Subtotal: ${totalPrice}</h3>
                        <button onClick={handleCheckout}>Checkout</button>
                    </Checkout>
                )}


            </CartStyle>
        </CartWrapper>
    )
}