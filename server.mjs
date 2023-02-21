import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello TAylor!');
  res.end();
}).listen(process.env.PORT);
