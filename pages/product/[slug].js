import { useQuery } from "urql"
import { GET_PRODUCT } from "../../lib/query"
import { useRouter } from 'next/router'
import Router from "next/dist/server/router"

export default function ProductDetails() {
    // Fetch slug
    const { query } = useRouter();
    // Fetch queries from strapi
    const [results] = useQuery({
        query: GET_PRODUCT,
        variables: {
            slug: "air-jordan-1-mid"
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
    const product = data.products.data;
    console.log(product);

    return (
        <div>
            {/* <img src="" alt="" /> */}
            <div>
                <h3>Title</h3>
                <p>Description</p>

            </div>
            <div>
                <span>Quantity</span>
                <button>-</button>
                <p>0</p>
                <button>+</button>
            </div>
            <button>Add to Cart</button>
        </div>
    )
}