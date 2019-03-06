const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((request, response) => {
    const parsedUrl = parse(request.url, true);
    // eslint-disable-next-line no-unused-vars
    const { pathname, query } = parsedUrl;

    if (pathname === '/') {
      app.render(request, response, '/dashboard');
    } else {
      handle(request, response, parsedUrl);
    }
  }).listen(3000, error => {
    if (error) throw error;
  });
});
