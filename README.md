Simple-Stripe-Checkout

Simple Stripe Checkout Demo using react. leveraged from Stripe original documentations and further simplified.

This is Tested and deployed on Heroku and works. 
https://heroku-stripe-simple.herokuapp.com/

To try, clone repo and setup a .env in /server folder and include items below.
visit this site to generate your stripe API key - https://stripe.com/docs/keys
npm i and npm start in directory ..

``` text 
DOMAIN="http://localhost:3000" 
//(in production this will be the url)

PAYMENT_METHODS="card"

PRICE=price_XXXXXXXXXXXX

STATIC_DIR="../client"

STRIPE_PUBLISHABLE_KEY="pk_test_XXXXXXXXXXXX"

STRIPE_SECRET_KEY="sk_test_XXXXXXXXXXXXXX"

XXXXXX is your test specific key information
```
example PRICE=price_1HiPxg2eZvKYlo2C5g3rIPkx

example STRIPE_PUBLISHABLE_KEY="pk_test_TYooMQauvdEDq54NiTphI7jx"

example STRIPE_SECRET_KEY="sk_test_4eC39HqLyjWDarjtT1zdp7dc"


MIT license and original authored by @thorsten-stripe
This project was bootstrapped with Create React App.
