const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;


app.prepare().then(() => {
  createServer((request, response) => {
    const parsedUrl = parse(request.url, true);
    // eslint-disable-next-line no-unused-vars
    const { pathname, query } = parsedUrl;

    if (pathname === '/' || pathname === '/locations' || pathname === '/all-locations') {
      app.render(request, response, '/dashboard');
    } else {
      handle(request, response, parsedUrl);
    }
  }).listen(port, error => {
    if (error) throw error;
  });
});
