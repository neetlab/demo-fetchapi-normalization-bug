const createHeaders = (override: HeadersInit = {}) =>
  new Headers({
    Vary: "Origin",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
    ...override,
  });

Deno.serve((req, _info) => {
  const responseBody = JSON.stringify({
    message: "Hello!",
  });

  switch (req.method) {
    case "OPTIONS":
      return new Response(null, {
        status: 204,
        headers: createHeaders(),
      });
    case "GET":
      return new Response(responseBody, {
        status: 200,
        headers: createHeaders(),
      });
    case "PATCH":
      return new Response(responseBody, {
        status: 200,
        headers: createHeaders(),
      });
    case "POST":
    case "PUT":
    case "DELETE":
    case "HEAD":
    default:
      return new Response(null, {
        status: 405,
        headers: createHeaders({ "Content-Type": "text/plain" }),
      });
  }
});
