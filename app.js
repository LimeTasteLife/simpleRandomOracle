const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  const time = Date.now();
  res.send(`${time % 3}`);
});
app.listen(port, () => {
  console.log('listening to 3077');
});
