// Create web server with express
// 1. Create a web server application
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for PUT /comments
// 5. Create a route for DELETE /comments

// 1. Create a web server application
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

// 2. Create a route for GET /comments
app.get('/comments', (req, res) => {
    res.status(200).json({
        message: 'GET /comments'
    });
});

// 3. Create a route for POST /comments
app.post('/comments', (req, res) => {
    res.status(200).json({
        message: 'POST /comments'
    });
});

// 4. Create a route for PUT /comments
app.put('/comments', (req, res) => {
    res.status(200).json({
        message: 'PUT /comments'
    });
});

// 5. Create a route for DELETE /comments
app.delete('/comments', (req, res) => {
    res.status(200).json({
        message: 'DELETE /comments'
    });
});

// 6. Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));

