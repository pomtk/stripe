// This is your test secret API key.
const stripe = require('stripe')('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');

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
          currency: 'usd',
          product_data: {
            name: 'Plan',
          },
          unit_amount: 100, // takes lowest units that is if Rs20 multiply by 100
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