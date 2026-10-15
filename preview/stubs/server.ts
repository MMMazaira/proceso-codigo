export const NextResponse = { json: (b: unknown, i?: ResponseInit) => new Response(JSON.stringify(b), { ...i, headers: { "content-type": "application/json" } }) };
