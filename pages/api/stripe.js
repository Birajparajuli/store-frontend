import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method == "POST") {
        try {
            const session = await stripe.checkout.sessions.create({
                submit_type: "pay",
                mode: "payment",
                payment_method_types: ["card"],
                shipping_address_collection: {
                    allowed_countries: ["US", "CA", "NP"]
                },
                shipping_options: [

                    {
                        shipping_rate: "shr_1LRCFqGfh3OF5TwFoIZM3ekr"
                    },
                    {
                        shipping_rate: "shr_1LRCWBGfh3OF5TwFETZ4oCFT"
                    }


                ],
                allow_promotion_codes: true,
                line_items: req.body.map(item => {
                    return {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: item.title,

                                images: [item.image.data.attributes.formats.thumbnail.url]
                            },
                            unit_amount: item.price * 100
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,

                        },
                        quantity: item.qty
                    }
                }),
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/cancel`
            });
            res.status(200).json(session);
        } catch (err) {
            res.status(err.statusCode || 500).json(err);
        }
    }
}