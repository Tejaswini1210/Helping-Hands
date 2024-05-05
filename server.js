const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files like HTML, CSS, and JS

// Dummy user data (replace with a real database in production)
const users = [
    { username: 'user1', password: 'password1', email: 'user1@example.com' },
    { username: 'user2', password: 'password2', email: 'user2@example.com' }
];

// Routes
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Dummy authentication (replace with actual authentication logic)
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        res.status(200).json({ message: 'Login successful!', user });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

app.post('/feedback', (req, res) => {
    const feedbackMessage = req.body.feedbackMessage;

    // Process feedback message (e.g., save to database)
    // For demonstration, let's just log it to the console
    console.log('Feedback:', feedbackMessage);
    
    res.status(200).json({ message: 'Feedback received!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
