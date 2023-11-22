const http = require('http');
const PORT = 4444;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(`Welcome to Simple HTTP Server\nYou are currently on the ${req.url} page.`);
    res.end();
}).listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
