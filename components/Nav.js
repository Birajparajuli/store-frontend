import Link from "next/link";
import { BiShoppingBag } from 'react-icons/bi';
import { NavStyle } from "../styles/NavStyle";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";

export default function Nav() {
    const { showCart, setShowCart, total } = useStateContext();

    return (
        <>
            <NavStyle>
                <Link href="/">
                    <img src="./logo.png" alt="logo" />
                </Link>

                <div onClick={() => setShowCart(true)}>
                    {total > 0 && <span>{total}</span>}
                    <BiShoppingBag />
                    <h3>Cart</h3>

                </div>
            </NavStyle>
            {showCart && <Cart />}
        </>
    )
}