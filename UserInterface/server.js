const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'src')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
