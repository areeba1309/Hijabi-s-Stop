export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  // Placeholder: in production, call Razorpay order creation here
  const mockOrder = {
    id: 'order_12345',
    amount: 199900,
    currency: 'INR',
    receipt: 'rcpt_001'
  };
  res.status(200).json({ order: mockOrder });
}
