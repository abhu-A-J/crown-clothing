const express = require('export');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRIPE_KEY);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, (err) => {
  console.log(`Application running in port ${port}`);
  if (err) {
    console.error('Error loading server', err);
  }
});

app.post('/payment', async (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'inr',
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).json({
        err: stripeErr,
      });
    } else {
      res.status(200).json({
        success: stripeRes,
      });
    }
  });
});
