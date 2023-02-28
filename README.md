# Prebuilt Checkout page with subscriptions

 The client- and server-side code redirects to a prebuilt payment page hosted on Stripe. 
 
* just got a mail saying gpay not supported
## Running the sample 

1. Build the server

~~~
npm install
~~~

2. Run the server

~~~
npm start
~~~

3. Go to [http://localhost:4242/checkout.html](http://localhost:4242/checkout.html)

4. For testing cards : 
    4242 4242 4242 4242 : Payment succeeds
    4000 0025 0000 3155 : Payment requires authentication
    4000 0000 0000 9995 : Payment is declined

