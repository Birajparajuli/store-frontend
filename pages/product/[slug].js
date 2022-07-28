import { useQuery } from "urql"
import { GET_PRODUCT } from "../../lib/query"
import { useRouter } from 'next/router'
import { ProductDetail, ProductInfo, AddToCart, Quantity } from "../../styles/ProductDetail";

import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

export default function ProductDetails() {
    // Fetch slug
    const { query } = useRouter();
    // Fetch queries from strapi
    const [results] = useQuery({
        query: GET_PRODUCT,
        variables: {
            slug: query.slug
        }

    })
    const { data, fetching, error } = results;

    if (fetching) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error: {error.message}</p>
    }
    if (!data) {
        return <p>No data</p>
    }
    const { title, description, image } = data.products.data[0].attributes;


    return (
        <ProductDetail>
            <img src={image.data.attributes.formats.small.url} alt={title} />
            <ProductInfo>
                <h3>{title}</h3>
                <p>{description}</p>
                <Quantity>
                    <span>Quantity</span>
                    <AiFillMinusCircle />
                    <p>0</p>
                    <AiFillPlusCircle />
                </Quantity>
                <AddToCart>Add to Cart</AddToCart>
            </ProductInfo>

        </ProductDetail>
    )
}