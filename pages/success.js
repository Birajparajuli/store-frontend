import { useRouter } from "next/router"

export default function Success() {
    const route = useRouter();
    return (
        <div>
            <div>
                <h1>Thank you for your order</h1>
                <h2>Conformation email has sent to </h2>
                <h2>email</h2>

                <div>
                    <h3>Address</h3>
                    <h2>Address Info</h2>
                </div>
                <div>
                    <h3>Products</h3>
                    <h2>All the products</h2>
                </div>
                <button onClick={() => route.push("/")}>Continue Shopping</button>
            </div>
        </div>
    )
}