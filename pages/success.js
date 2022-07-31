import { useRouter } from "next/router"
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
import Image from "next/image";
import Yeah from "../public/Yeah.gif"
import styled from "styled-components";


const motion = require("framer-motion");

export async function getServerSideProps(params) {
    const order = await stripe.checkout.sessions.retrieve(params.query.session_id, {
        expand: ["line_items"],
    });
    return { props: { order } }
}

export default function Success({ order }) {
    const route = useRouter();
    console.log(order);
    return (
        <Wrapper>
            <Card>
                <h1>Thank you for your order</h1>
                <h2>Conformation email has sent to </h2>
                <h2>{order.customer_details.email}</h2>
                <InfoWrapper>
                    <Address>
                        <h3>Address</h3>
                        {Object.entries(order.customer_details.address).map(
                            ([key, value]) => {
                                return <p key={key}>{key}: {value}</p>;
                            }
                        )}
                    </Address>
                    <OrderInfo>
                        <h3>Products</h3>
                        {order.line_items.data.map(item => {
                            return (
                                <div key={item.id}>
                                    <p>Product: {item.description}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: {item.price.unit_amount / 100}</p>
                                </div>
                            );
                        }
                        )}
                    </OrderInfo>
                </InfoWrapper>
                <button onClick={() => route.push("/")}>Continue Shopping</button>
                <Image src={Yeah} alt="Rickroll"></Image>
            </Card>
        </Wrapper>
    )
}



const Wrapper = styled.div`
    margin: 5rem 15rem;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 2rem;
    padding: 3rem;
    h2{
        margin: 1rem 0;
    }

    button {
        color: white;
        background-color: var(--primary);
        font-size: 1.2rem;
        font-weight: 500;
        padding: 1rem 2rem;
        cursor: pointer;
        border: none;
        margin: 1rem;
    }
`

const Address = styled.div`
    
    font-size: 1rem;
    width: 100%;

    `;

const OrderInfo = styled.div`
    
font-size: 1rem;
width: 100%;
div{
    padding-bottom: 1rem;
}

`;
const InfoWrapper = styled.div`
    display: flex;
    margin: 2rem 0;
`;