import { useStateContext } from "../lib/context"
import { CartWrapper, CartStyle, Card, CardInfo, EmptyStyle } from "../styles/CartStyles";
import { BsBagX } from 'react-icons/bs'

export default function Cart() {
    const { cartItems, setShowCart, onAdd } = useStateContext();
    return (
        <CartWrapper>
            <CartStyle>
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
                                    <h3>{item.price}</h3>
                                </CardInfo>
                            </Card>
                        )
                    }))}



            </CartStyle>
        </CartWrapper>
    )
}