const bcrypt = require('bcrypt');

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new AdminRegistration({ email, password: hashedPassword });
    await newAdmin.save();
    res
      .status(201)
      .json({ message: 'Registration successful', admin: newAdmin });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Registration failed', error });
  }
});
