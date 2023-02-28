// This is your test secret API key.
const stripe = require('stripe')('sk_test_51MgMBuSARskrOXimTYIvdN84eAro3qQn3ubnBc4q13wNEDBGIKlMQB1GQJn6p5fbNng1kA76ziTTHoTYmZzW3mbV00qdz1gzrZ');

const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // can also use preset price and product id created in stripe but i guess that will not be needed
        price_data: {
          currency: 'inr',
          product_data: {
            name: 'Plan',
          },
          unit_amount: 2000, // takes lowest units that is if Rs20 multiply by 100
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));