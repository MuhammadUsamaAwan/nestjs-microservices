import Stripe from 'stripe';

export class CreateCharge {
  card: Stripe.PaymentMethodCreateParams.Card1;
  amount: number;
}
