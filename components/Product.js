
import { ProductStyle } from '../styles/ProductStyle'
import Link from 'next/link'

export default function Product({ product }) {
    return (
        <ProductStyle>
            <Link href={`product/${product.attributes.slug}`}>
                <div>
                    <img src={product.attributes.image.data.attributes.formats.small.url} />
                </div>
            </Link>
            <h2>{product.attributes.title}</h2>
            <h3>${product.attributes.price}</h3>
        </ProductStyle>
    )
}

