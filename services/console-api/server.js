const express = require('express');
const app = express();

app.get('/api/health', (_req, res) =>
  res.json({ ok: true, service: 'console-api', time: new Date().toISOString() })
);
app.get('/api', (_req, res) => res.send('API root OK ✅'));
app.get('/', (_req, res) => res.send('Hello from console-api 👋'));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('console-api listening on', port));
// test trigger
