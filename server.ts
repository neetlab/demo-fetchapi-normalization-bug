const sharedHeaders = new Headers({
  "Content-Type": "application/json",
  "Vary": "Origin",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, PATCH, OPTIONS",
});

Deno.serve(async (req, _info) => {
  const body = await req.json().catch(() => undefined);

  switch (req.method) {
    case "OPTIONS":
      return new Response(null, {
        status: 204,
        headers: sharedHeaders,
      });
    case "GET":
      return new Response(JSON.stringify({ message: "Hi!" }), {
        status: 200,
        headers: sharedHeaders,
      });
    case "PATCH":
      return new Response(JSON.stringify(body), {
        status: 200,
        headers: sharedHeaders,
      });
    default:
      return new Response(null, {
        status: 404,
        headers: sharedHeaders,
      });
  }
});
