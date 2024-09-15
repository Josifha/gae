const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, App Engine!');
});

// Start the server on the port provided by App Engine or 8080 locally
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
