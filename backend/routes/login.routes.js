import express from 'express';
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'test@example.com' && password === '123456') {
    return res.json({
      token: 'mock-jwt-token',
      user: { name: 'Faheem Daruwala', email },
    });
  } else {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
});

export default router;
