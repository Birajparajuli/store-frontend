import { FooterStyle } from "../styles/FooterStyle";

export default function Footer() {
    const date = new Date();
    return (
        <FooterStyle>
            <h3>©️{date.getFullYear()} Biraj Parajuli All Rights Reserved.</h3>
        </FooterStyle>
    )
}