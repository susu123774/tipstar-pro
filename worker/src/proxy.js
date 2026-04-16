export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Sofascore live matches JSON API
    if (url.pathname === "/sofascore" || url.pathname.startsWith("/sofascore")) {
      const apiUrl = "https://www.sofascore.com/api/cdn/football-web-widget-data/9/7/0/3.json";
      try {
        const res = await fetch(apiUrl, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Accept": "application/json, */*",
            "Referer": "https://www.sofascore.com/",
            "Origin": "https://www.sofascore.com",
          }
        });
        const text = await res.text();
        return new Response(text, {
          status: res.status,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 502, headers: { "Content-Type": "application/json" } });
      }
    }

    // Sofascore widget iframe (pass-through with CORS headers)
    if (url.pathname === "/widget") {
      const sport = url.searchParams.get("sport") || "football";
      const widgetUrl = `https://www.sofascore.com/${sport}/live-widget`;
      try {
        const res = await fetch(widgetUrl, {
          headers: {
            "User-Agent": "Mozilla/5.0",
            "Accept": "text/html",
          }
        });
        return new Response(await res.text(), {
          status: res.status,
          headers: {
            "Content-Type": "text/html",
            "Access-Control-Allow-Origin": "*",
          }
        });
      } catch (err) {
        return new Response("Error", { status: 502 });
      }
    }

    return new Response("Not Found", { status: 404 });
  }
};
