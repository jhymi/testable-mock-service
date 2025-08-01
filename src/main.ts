import { serve } from "https://deno.land/std/http/server.ts";

const port = 8000;

const handler = (request: Request): Response => {
  return new Response("Hello, Deno!", {
    headers: { "content-type": "text/plain" },
  });
};

console.log(`Server is running on http://localhost:${port}`);
await serve(handler, { port });