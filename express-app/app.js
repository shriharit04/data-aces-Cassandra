// index.js
express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World 🌍');
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
