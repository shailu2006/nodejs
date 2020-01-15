const express = require('express');

// Create an application.
const app = express();
const port = 3000;

// Endpoints
app.get("/", (req, res) => {
    res.send("Hello World !");
});

// An Example of post.
app.post('/user', function (req, res) {
    res.send('Got a PUT request at /user')
});

// Serving public files form a folder. Get http://localhost:3000/hello.html
// Without the below settings you will get the error "Cannot GET /hello.html"
app.use(express.static('public'));

// Custom response for HTTP Error.
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

// Start the application and listen at port.
app.listen(port, () => {
    console.log(`Listening at port ${port}.`);
});




