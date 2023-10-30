import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion:'2023-10-16'
})

export const POST = async (request: Request) =>{
    const singnature = request.headers.get('stripe-signature')

    if(!singnature) return NextResponse.error();

    const text = await request.text();

    const event = stripe.webhooks.constructEvent(
        text,
        singnature,
        process.env.STRIPE_WEBHOOK_SECRET_KEY
    )

    if(event.type === 'checkout.session.completed'){
        const sessionWithLineItems = stripe.checkout.sessions.retrieve(
            event.data.object.id,
            {
                expand: ['line_items']
            }
        );

        const lineItems = (await sessionWithLineItems).line_items;

        console.log(lineItems);
        
    }

    return  NextResponse.json({received: true})
}