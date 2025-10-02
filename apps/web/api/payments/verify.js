export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  // Placeholder: verify payment signature here
  res.status(200).json({ success: true });
}
