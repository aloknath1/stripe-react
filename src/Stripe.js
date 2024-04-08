import React from 'react'
import './Stripe.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('');

function Stripe() {  
  return (
    <div className="Stripe">
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
}

export default Stripe;
