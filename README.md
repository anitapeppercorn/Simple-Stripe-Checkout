# Simple-Stripe-Checkout
Simple Stripe Checkout Demo using react.

Tested and works. Concurrently not set up so you have to npm start client and server side separately.
.env should be in /server folder and include 
DOMAIN="http://localhost:3000"
PAYMENT_METHODS="card"
PRICE=price_XXXXXXXXXXXX
STATIC_DIR="../client"

STRIPE_PUBLISHABLE_KEY="pk_test_XXXXXXXXXXXX"

STRIPE_SECRET_KEY="sk_test_XXXXXXXXXXXXXX"

XXXXXX is your test specific key information

#### example PRICE=price_1HiPxg2eZvKYlo2C5g3rIPkx
#### example STRIPE_PUBLISHABLE_KEY="pk_test_TYooMQauvdEDq54NiTphI7jx"
#### example STRIPE_SECRET_KEY="sk_test_4eC39HqLyjWDarjtT1zdp7dc"

