const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.post('/contact', (req, res) => {
    console.log('Contact form submission received:');
    console.log(req.body);
    res.status(200).send({ message: 'Form data received successfully.' });
});

app.post('/donate', (req, res) => {
    console.log('Donation attempt received:');
    console.log(req.body);
    // In a real application, this is where you would integrate with a payment gateway like Stripe.
    res.status(200).send({ message: 'Donation received! (This is a placeholder - no real payment was processed)' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
