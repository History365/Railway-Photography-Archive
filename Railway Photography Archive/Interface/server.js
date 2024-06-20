const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint to get the count of files in the 'images' directory
app.get('/photo-count', (req, res) => {
    const directoryPath = path.join(__dirname, 'public', 'images');

    // Read the directory and count files
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            res.status(500).send('Error reading directory');
        } else {
            res.send({ count: files.length });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
