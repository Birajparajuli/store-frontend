import { FooterStyle } from "../styles/FooterStyle";

export default function Footer() {
    const date = new Date();
    return (
        <FooterStyle>
            <h3>©️{date.getFullYear()} | Biraj Parajuli</h3>
        </FooterStyle>
    )
}