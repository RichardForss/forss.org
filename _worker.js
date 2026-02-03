export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.endsWith('.html') && url.pathname.startsWith('/google')) {
      const asset = await env.ASSETS.fetch(request);
      return asset;
    }
    return env.ASSETS.fetch(request);
  }
};
