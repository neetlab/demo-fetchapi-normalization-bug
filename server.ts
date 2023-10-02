Deno.serve((req, _info) => {
  const responseBody = JSON.stringify({
    message: "OK",
  });

  switch (req.method) {
    case "OPTIONS":
    case "GET":
    case "PATCH":
    case "POST":
    case "PUT":
    case "DELETE":
    case "HEAD":
      return new Response(responseBody, {
        status: 200,
        headers: new Headers({
          Vary: "Origin",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "*",
          "Content-Type": "application/json",
        }),
      });
    default:
      return new Response(null, {
        status: 405,
        headers: new Headers({
          Vary: "Origin",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "*",
          "Content-Type": "text/plain",
        }),
      });
  }
});
