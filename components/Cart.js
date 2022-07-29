import { useStateContext } from "../lib/context"
import { CartWrapper, CartStyle, Card, CardInfo, EmptyStyle, Quantity } from "../styles/CartStyles";
import { BsBagX } from 'react-icons/bs'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

export default function Cart() {
    const { cartItems, setShowCart, onAdd, onRemove } = useStateContext();

    return (
        <CartWrapper onClick={() => setShowCart(false)}>
            <CartStyle onClick={(e) => e.stopPropagation()}>
                {cartItems.length < 1 && (
                    <EmptyStyle>
                        <BsBagX />
                        <h3>There is nothing in your bag.😥</h3>

                    </EmptyStyle>

                )}
                {cartItems.length >= 1 && (
                    cartItems.map(item => {
                        return (
                            <Card key={item.slug}>
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
                    <div>
                        <h3>Subtotal: </h3>
                        <button>Checkout</button>
                    </div>
                )}


            </CartStyle>
        </CartWrapper>
    )
}