export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/google75ea72259d22d278.html') {
      return new Response('google-site-verification: google75ea72259d22d278.html\n', {
        headers: { 'content-type': 'text/html' }
      });
    }
    return env.ASSETS.fetch(request);
  }
};
