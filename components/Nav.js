import Link from "next/link";
import { BiShoppingBag } from 'react-icons/bi';
import { NavStyle } from "../styles/NavStyle";
import Cart from "./Cart";

export default function Nav() {
    return (
        <>
            <NavStyle>
                <Link href="/">
                    <img src="./logo.png" alt="logo" />
                </Link>

                <div>
                    <BiShoppingBag />
                    <h3>Cart</h3>

                </div>



            </NavStyle>
            <Cart />
        </>
    )
}